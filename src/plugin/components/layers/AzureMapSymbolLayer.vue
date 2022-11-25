<script lang="ts">
import {
  getMapInjection,
  getDataSourceInjection,
} from '@/plugin/utils/dependency-injection'
import addMapEventListeners from '@/plugin/utils/add-map-event-listeners'
import { atlas } from 'types'
import { defineComponent, PropType, reactive } from 'vue'

enum AzureMapSymbolLayerEvent {
  Created = 'created',
}

const state = reactive({ id: 0 })

/**
 * A symbol layer uses text or icons to render point-based data wrapped in the DataSource as symbols on the map.
 */
export default defineComponent({
  name: 'AzureMapSymbolLayer',

  /**
   * Inject the `getMap` function to get the `atlas.Map` instance
   * Inject the `getDataSource` function to get the `atlas.source.DataSource` instance
   */
  inject: ['getMap', 'getDataSource'],
  inheritAttrs: false,

  props: {
    id: {
      type: String,
      default: '',
    },

    symbolOptions: {
      type: Object as PropType<atlas.SymbolLayerOptions | null>,
      default: null,
    },
  },
  emits: Object.values(AzureMapSymbolLayerEvent),
  data() {
    return {
      symbolLayer: {} as atlas.layer.SymbolLayer,
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

    // Create the symbol layer
    this.$data.symbolLayer = new this.$_azureMaps.atlas.layer.SymbolLayer(
      dataSource,
      this.id || `azure-map-symbol-layer-${state.id++}`,
      this.symbolOptions || undefined
    )

    this.$emit(AzureMapSymbolLayerEvent.Created, this.$data.symbolLayer)

    // Watch for options changes
    this.$watch(
      'options',
      (newOptions: atlas.SymbolLayerOptions | null) => {
        this.$data.symbolLayer.setOptions(newOptions || {})
      },
      {
        deep: true,
      }
    )

    // Add the layer to the map
    map.layers.add(this.$data.symbolLayer)

    // Add the layer events to the map
    addMapEventListeners({
      map,
      target: this.$data.symbolLayer,
      listeners: this.$attrs,
      reservedEventTypes: Object.values(AzureMapSymbolLayerEvent),
    })
  },
  unmounted() {
    // Look for the injected function that retreives the map instance
    const getMap = getMapInjection(this)

    if (!getMap) return

    // Retrieve the map instance from the injected function
    const map = getMap()
    map.layers.remove(this.$data.symbolLayer)
  },
  render() {
    return () => null
  },
})
</script>
