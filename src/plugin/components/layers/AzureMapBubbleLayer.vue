<script lang="ts">
import {
  getMapInjection,
  getDataSourceInjection,
} from '@/plugin/utils/dependency-injection'
import addMapEventListeners from '@/plugin/utils/add-map-event-listeners'
import { atlas } from 'types'
import { reactive, defineComponent, PropType } from 'vue'

enum AzureMapBubbleLayerEvent {
  Created = 'created',
}

const state = reactive({ id: 0 })

/**
 * Renders Point objects as scalable circles (bubbles).
 */
export default defineComponent({
  name: 'AzureMapBubbleLayer',

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
      type: Object as PropType<atlas.BubbleLayerOptions | null>,
      default: null,
    },
  },
  data() {
    return {
      bubbleLayer: {} as atlas.layer.BubbleLayer,
    }
  },
  unmounted() {
    const getMap = getMapInjection(this)

    if (!getMap) return

    // Retrieve the map instance from the injected function
    const map = getMap()

    map.layers.remove(this.$data.bubbleLayer)
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

    // Create the bubble layer
    this.$data.bubbleLayer = new this.$_azureMaps.atlas.layer.BubbleLayer(
      dataSource,
      this.id || `azure-map-bubble-layer-${state.id++}`,
      this.options || undefined
    )

    this.$emit(AzureMapBubbleLayerEvent.Created, this.$data.bubbleLayer)

    // Watch for options changes
    this.$watch(
      'options',
      (newOptions: atlas.BubbleLayerOptions | null) => {
        this.bubbleLayer.setOptions(newOptions || {})
      },
      {
        deep: true,
      }
    )

    // Add the layer to the map
    map.layers.add(this.$data.bubbleLayer)

    // Add the layer events to the map
    addMapEventListeners({
      map,
      target: this.bubbleLayer,
      listeners: this.$attrs,
      reservedEventTypes: Object.values(AzureMapBubbleLayerEvent),
    })
  },
  render() {
    return () => null
  },
})
</script>
