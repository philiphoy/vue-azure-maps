<script lang="ts">
import { getDataSourceInjection } from '@/plugin/utils/dependency-injection'
import * as atlas from 'azure-maps-control'
import { reactive, defineComponent, PropType } from 'vue'

enum AzureMapPolygonEvents {
  Error = 'error',
}

const state = reactive({ id: 0 })

/**
 * A Polygon represents a geographic polygon.
 */
export default defineComponent({
  name: 'AzureMapPolygon',

  /**
   * Inject the `getDataSource` function to get the `atlas.source.DataSource` instance
   */
  inject: ['getDataSource'],

  props: {
    id: {
      type: String,
      default: '',
    },

    coordinates: {
      type: Array as PropType<
        atlas.data.Position[] | atlas.data.Position[][] | null
      >,
      default: null,
    },

    properties: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({}),
    },
  },
  emits: Object.values(AzureMapPolygonEvents),
  unmounted() {
    const getDataSource = getDataSourceInjection(this)

    if (!getDataSource) return

    // Retrieve the data source from the injected function
    const dataSource = getDataSource()
    const shape = new atlas.Shape(
      new atlas.data.Polygon(this.coordinates || []),
      this.id || `azure-map-polygon-${state.id++}`,
      this.properties
    )

    dataSource.remove(shape)
  },
  async created() {
    await this.validateProps()

    // Look for the injected function that retreives the data source instance
    const getDataSource = getDataSourceInjection(this)

    if (!getDataSource) return

    // Retrieve the data source from the injected function
    const dataSource = getDataSource()

    // Create a shape from the polygon geometry
    const shape = new atlas.Shape(
      new atlas.data.Polygon(this.coordinates || []),
      this.id || `azure-map-polygon-${state.id++}`,
      this.properties
    )

    // Add the shape to the data source.
    dataSource.add([shape])

    // Watch the shape position and update it every time it changes
    this.$watch(
      'coordinates',
      (
        newCoordinates: atlas.data.Position[] | atlas.data.Position[][] | null
      ) => {
        this.validateCoordinates(newCoordinates).then((coords) => {
          shape.setCoordinates(coords)
        })
      },
      {
        deep: true,
      }
    )
  },

  methods: {
    // Perform more complex prop validations than is possible
    // inside individual validator functions for each prop.
    async validateProps(): Promise<void> {
      if (process.env.NODE_ENV === 'production') return

      await this.validateCoordinates(this.coordinates)
    },

    async validateCoordinates(
      coordinates: atlas.data.Position[] | atlas.data.Position[][] | null
    ): Promise<atlas.data.Position[] | atlas.data.Position[][]> {
      try {
        // Check for invalid coordinates
        if (!coordinates) {
          throw new Error(
            `Invalid <AzureMapLineString> coordinates, coordinates are ${coordinates}.\nPlease make sure <AzureMapLineString> coordinates are valid.`
          )
        }
        return Promise.resolve(coordinates || [])
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(error)
        }
        this.$emit(AzureMapPolygonEvents.Error, error)
        return Promise.reject(error)
      }
    },
  },
  render() {
    return () => null
  },
})
</script>
