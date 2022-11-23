<script lang="ts">
import {
  getMapInjection,
  getDataSourceInjection,
} from '@/plugin/utils/dependency-injection'
import addMapEventListeners from '@/plugin/utils/add-map-event-listeners'
import { atlas } from 'types'
import { defineComponent, PropType, reactive } from 'vue'

enum AzureMapHeatMapLayerEvent {
  Created = 'created',
}

const state = reactive({ id: 0 })

/**
 * Heat maps are a type of data visualization used to represent the density of data using a range of colors.
 */
export default defineComponent({
  name: 'AzureMapHeatMapLayer',

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

    options: {
      type: Object as PropType<atlas.HeatMapLayerOptions | null>,
      default: null,
    },
  },
  data() {
    return {
      heatMapLayer: {} as atlas.layer.HeatMapLayer,
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

    // Create the heat map layer
    this.$data.heatMapLayer = new this.$_azureMaps.atlas.layer.HeatMapLayer(
      dataSource,
      this.id || `azure-map-heat-map-layer-${state.id++}`,
      this.options || undefined
    )

    this.$emit(AzureMapHeatMapLayerEvent.Created, this.$data.heatMapLayer)

    // Watch for options changes
    this.$watch(
      'options',
      (newOptions: atlas.HeatMapLayerOptions | null) => {
        this.$data.heatMapLayer.setOptions(newOptions || {})
      },
      {
        deep: true,
      }
    )

    // Add the layer to the map
    map.layers.add(this.$data.heatMapLayer)

    // Add the layer events to the map
    addMapEventListeners({
      map,
      target: this.$data.heatMapLayer,
      listeners: this.$attrs,
      reservedEventTypes: Object.values(AzureMapHeatMapLayerEvent),
    })
  },
  unmounted() {
    const getMap = getMapInjection(this)
    if (!getMap) return
    const map = getMap()
    map.layers.remove(this.$data.heatMapLayer)
  },
  render() {
    return () => null
  },
})
</script>
