<script lang="ts">
import {
  getMapInjection,
  getDataSourceInjection,
} from '@/plugin/utils/dependency-injection'
import bindProps from '@/plugin/utils/bind-props'
import { looseEqual } from '@/plugin/utils'
import * as atlas from 'azure-maps-control'
import { defineComponent, PropType, reactive } from 'vue'

enum AzureMapPointEvent {
  GeometryCreated = 'geometry-created',
  ShapeCreated = 'shape-created',
  ShapeAdded = 'shape-added',
  CircleCoordinates = 'circle-coordinates',
}

const state = reactive({ id: 0 })

/**
 * A Point that represents a geographic position.
 */
export default defineComponent({
  name: 'AzureMapPoint',

  /**
   * Inject the `getMap` function to get the `atlas.Map` instance
   * Inject the `getDataSource` function to get the `atlas.source.DataSource` instance
   */
  inject: ['getMap', 'getDataSource'],

  props: {
    id: {
      type: String,
      default: '',
    },

    coordinates: {
      type: Array as PropType<atlas.data.Position | null>,
      default: null,
    },

    longitude: {
      type: Number as PropType<number | null>,
      default: null,
    },

    latitude: {
      type: Number as PropType<number | null>,
      default: null,
    },

    properties: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({}),
    },
  },
  data() {
    return {
      unbindProps: function () {},
      point: null as atlas.data.Point | null,
      shape: null as atlas.Shape | null,
    }
  },
  computed: {
    pointCoordinates(): atlas.data.Position | null {
      // If coordinates are not provided,
      // look for individual props
      if (!this.coordinates) {
        // If individual props are not provided,
        // return null
        if (!this.longitude || !this.latitude) {
          return null
        }
        // return individual props
        return [this.longitude, this.latitude]
      }
      // return position
      return this.coordinates
    },

    pointProperties(): Record<string, unknown> {
      // Create a computed property to keep track of the same object reference
      return { ...(this.properties || {}) }
    },
  },
  created() {
    // Look for the injected function that retreives the map instance
    const getMap = getMapInjection(this)

    if (!getMap) return

    // Retrieve the map instance from the injected function
    const map = getMap()

    // Look for the injected function that retreives the data source instance
    const getDataSource = getDataSourceInjection(this)

    if (!getDataSource) return

    // Retrieve the data source from the injected function
    const dataSource = getDataSource()

    // Create a point geometry
    this.$data.point = new atlas.data.Point(this.pointCoordinates || [])

    this.$emit(AzureMapPointEvent.GeometryCreated, this.$data.point)

    // Create a shape from the point geometry
    this.$data.shape = new atlas.Shape(
      this.$data.point,
      this.id || `azure-map-point-${state.id++}`,
      this.properties
    )

    this.$emit(AzureMapPointEvent.ShapeCreated, this.$data.shape)

    // If the point has a circle polygon,
    // emit the coordinates of the circle
    if (this.$data.shape.isCircle()) {
      this.emitCircleCoordinates(this.$data.shape)
    }

    // Add the shape to the data source.
    dataSource.add(this.$data.shape)

    // Bind component props
    this.$data.unbindProps = bindProps({
      vm: this,
      map,
      props: [
        {
          propName: 'coordinates',
          target: this.$data.shape,
          targetEventName: 'shapechanged',
          isSetAsObject: false,
          identity: (
            newVal: atlas.data.Position,
            oldVal: atlas.data.Position
          ) => looseEqual(newVal, oldVal),
        },
        {
          propName: 'longitude',
          target: this.$data.shape,
          targetMethodName: 'coordinates',
          targetEventName: 'shapechanged',
          setter: (longitude: number) =>
            this.latitude !== null &&
            this.$data.shape?.setCoordinates([longitude, this.latitude]),
          isSetAsObject: false,
          retriever: (coordinates: atlas.data.Position) => coordinates[0],
        },
        {
          propName: 'latitude',
          target: this.$data.shape,
          targetMethodName: 'coordinates',
          targetEventName: 'shapechanged',
          setter: (latitude: number) =>
            this.longitude !== null &&
            this.$data.shape?.setCoordinates([this.longitude, latitude]),
          isSetAsObject: false,
          retriever: (coordinates: atlas.data.Position) => coordinates[1],
        },
        {
          propName: 'pointProperties',
          target: this.$data.shape,
          targetMethodName: 'properties',
          targetEventName: 'shapechanged',
          isSetAsObject: false,
          identity: (
            newVal: Record<string, unknown>,
            oldVal: Record<string, unknown>
          ) => looseEqual(newVal, oldVal),
          applier: (
            newValue: Record<string, unknown>,
            oldValue: Record<string, unknown>,
            set: (newValue: Record<string, unknown>) => void
          ) => {
            if (!looseEqual(newValue, oldValue)) {
              set(newValue)
            }

            if (
              this.$data.shape?.isCircle() &&
              (newValue.radius !== oldValue.radius ||
                newValue.subType !== oldValue.subType)
            ) {
              this.emitCircleCoordinates(this.$data.shape)
            }
          },
          watchOptions: {
            deep: true,
          },
        },
      ],
    })
  },

  methods: {
    emitCircleCoordinates(shape: atlas.Shape): void {
      // If the point has a circle polygon,
      // emit the coordinates of the circle
      this.$emit(
        AzureMapPointEvent.CircleCoordinates,
        shape.getCircleCoordinates()
      )
    },
  },
  removed() {
    // Look for the injected function that retreives the data source instance
    const getDataSource = getDataSourceInjection(this)

    if (!getDataSource) return

    // Retrieve the data source from the injected function
    const dataSource = getDataSource()
    if (this.$data.shape === null) return
    dataSource.remove(this.$data.shape)
    this.$data.unbindProps()
  },
  render() {
    return () => null
  },
})
</script>
