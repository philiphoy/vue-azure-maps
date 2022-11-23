<script lang="ts">
import { getMapInjection } from '@/plugin/utils/dependency-injection'
import addMapEventListeners from '@/plugin/utils/add-map-event-listeners'
import { atlas } from 'types'
import { reactive, defineComponent, PropType } from 'vue'

enum AzureMapTileLayerEvent {
  Created = 'created',
}

const state = reactive({ id: 0 })

/**
 * Tile layers allow you to superimpose images on top of Azure Maps base map tiles.
 */
export default defineComponent({
  name: 'AzureMapTileLayer',

  /**
   * Inject the `getMap` function to get the `atlas.Map` instance
   */
  inject: ['getMap'],

  props: {
    id: {
      type: String,
      default: '',
    },

    options: {
      type: Object as PropType<atlas.TileLayerOptions | null>,
      default: null,
    },
  },
  data() {
    return {
      tileLayer: {} as atlas.layer.TileLayer,
    }
  },
  created() {
    // Look for the injected function that retreives the map instance
    const getMap = getMapInjection(this)

    if (!getMap) return

    // Retrieve the map instance from the injected function
    const map = getMap()

    // Create the tile layer
    this.$data.tileLayer = new this.$_azureMaps.atlas.layer.TileLayer(
      this.options || undefined,
      this.id || `azure-map-tile-layer-${state.id++}`
    )

    this.$emit(AzureMapTileLayerEvent.Created, this.$data.tileLayer)

    // Watch for options changes
    this.$watch(
      'options',
      (newOptions: atlas.TileLayerOptions | null) => {
        this.$data.tileLayer.setOptions(newOptions || {})
      },
      {
        deep: true,
      }
    )

    // Add the layer to the map
    map.layers.add(this.$data.tileLayer)

    // Add the layer events to the map
    addMapEventListeners({
      map,
      target: this.$data.tileLayer,
      listeners: this.$attrs,
      reservedEventTypes: Object.values(AzureMapTileLayerEvent),
    })
  },
  unmounted() {
    // Look for the injected function that retreives the map instance
    const getMap = getMapInjection(this)

    if (!getMap) return

    // Retrieve the map instance from the injected function
    const map = getMap()

    map.layers.remove(this.$data.tileLayer)
  },
  render() {
    return () => null
  },
})
</script>
