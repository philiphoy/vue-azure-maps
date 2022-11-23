<script lang="ts">
import {
  getMapInjection,
  getDataSourceInjection,
} from '@/plugin/utils/dependency-injection'
import addMapEventListeners from '@/plugin/utils/add-map-event-listeners'
import { atlas } from 'types'
import { defineComponent, PropType, reactive } from 'vue'

enum AzureMapPolygonLayerEvent {
  Created = 'created',
}

const state = reactive({ id: 0 })

/**
 * A symbol layer uses text or icons to render point-based data wrapped in the DataSource as symbols on the map.
 */
export default defineComponent({
  name: 'AzureMapPolygonLayer',

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

    lineOptions: {
      type: Object as PropType<atlas.PolygonLayerOptions | null>,
      default: null,
    },
  },
  data() {
    return {
      polygonLayer: {} as atlas.layer.PolygonLayer,
    }
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

    // Create the polygon layer
    this.$data.polygonLayer = new this.$_azureMaps.atlas.layer.PolygonLayer(
      dataSource,
      this.id || `azure-map-polygon-layer-${state.id++}`,
      this.lineOptions || undefined
    )

    this.$emit(AzureMapPolygonLayerEvent.Created, this.$data.polygonLayer)

    // Watch for options changes
    this.$watch(
      'options',
      (newOptions: atlas.PolygonLayerOptions | null) => {
        this.$data.polygonLayer.setOptions(newOptions || {})
      },
      {
        deep: true,
      }
    )

    // Add the layer to the map
    map.layers.add(this.$data.polygonLayer)

    // Add the layer events to the map
    addMapEventListeners({
      map,
      target: this.$data.polygonLayer,
      listeners: this.$attrs,
      reservedEventTypes: Object.values(AzureMapPolygonLayerEvent),
    })
  },
  unmounted() {
    // Look for the injected function that retreives the map instance
    const getMap = getMapInjection(this)

    if (!getMap) return

    // Retrieve the map instance from the injected function
    const map = getMap()
    map.layers.remove(this.$data.polygonLayer)
  },
  render() {
    return () => null
  },
})
</script>
