<script lang="ts">
import { getMapInjection } from '@/plugin/utils/dependency-injection'
import addMapEventListeners from '@/plugin/utils/add-map-event-listeners'
import * as atlas from 'azure-maps-control'
import { defineComponent, PropType, reactive } from 'vue'

enum AzureMapImageLayerEvent {
  Created = 'created',
}

const state = reactive({ id: 0 })

/**
 * Overlay an image to fixed set of coordinates on the map.
 */
export default defineComponent({
  name: 'AzureMapImageLayer',
  /**
   * Inject the `getMap` function to get the `atlas.Map` instance
   */
  inject: ['getMap'],
  inheritAttrs: true,

  props: {
    id: {
      type: String,
      default: '',
    },

    options: {
      type: Object as PropType<atlas.ImageLayerOptions | null>,
      default: null,
    },
  },
  emits: Object.values(AzureMapImageLayerEvent),
  data() {
    return {
      imageLayer: {} as atlas.layer.ImageLayer,
    }
  },
  created() {
    // Look for the injected function that retreives the map instance
    const getMap = getMapInjection(this)

    if (!getMap) return

    // Retrieve the map instance from the injected function
    const map = getMap()

    // Create the image layer
    this.$data.imageLayer = new atlas.layer.ImageLayer(
      this.options || {},
      this.id || `azure-map-image-layer-${state.id++}`
    )

    this.$emit(AzureMapImageLayerEvent.Created, this.$data.imageLayer)

    // Watch for options changes
    this.$watch(
      'options',
      (newOptions: atlas.ImageLayerOptions | null) => {
        this.$data.imageLayer.setOptions(newOptions || {})
      },
      {
        deep: true,
      }
    )

    // Add the layer to the map
    map.layers.add(this.$data.imageLayer)

    // Add the layer events to the map
    addMapEventListeners({
      map,
      target: this.$data.imageLayer,
      listeners: this.$attrs,
      reservedEventTypes: Object.values(AzureMapImageLayerEvent),
    })
  },
  unmounted() {
    // Look for the injected function that retreives the map instance
    const getMap = getMapInjection(this)

    if (!getMap) return

    // Retrieve the map instance from the injected function
    const map = getMap()
    map.layers.remove(this.$data.imageLayer)
  },
  render() {
    return () => null
  },
})
</script>
