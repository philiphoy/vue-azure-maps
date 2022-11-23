<script lang="ts">
import {
  getMapInjection,
  getDataSourceInjection,
} from '@/plugin/utils/dependency-injection'
import addMapEventListeners from '@/plugin/utils/add-map-event-listeners'
import { atlas } from 'types'
import { defineComponent, PropType, reactive } from 'vue'

enum AzureMapLineLayerEvent {
  Created = 'created',
}

const state = reactive({ id: 0 })

/**
 * Renders line data on the map.
 */
export default defineComponent({
  name: 'AzureMapLineLayer',

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
      type: Object as PropType<atlas.LineLayerOptions | null>,
      default: null,
    },
  },
  data() {
    return {
      lineLayer: {} as atlas.layer.LineLayer,
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

    // Create the line layer
    this.$data.lineLayer = new this.$_azureMaps.atlas.layer.LineLayer(
      dataSource,
      this.id || `azure-map-line-layer-${state.id++}`,
      this.options || undefined
    )

    this.$emit(AzureMapLineLayerEvent.Created, this.$data.lineLayer)

    this.$watch(
      'options',
      (newOptions: atlas.LineLayerOptions | null) => {
        this.$data.lineLayer.setOptions(newOptions || {})
      },
      {
        deep: true,
      }
    )

    // Add the layer to the map
    map.layers.add(this.$data.lineLayer)

    // Add the layer events to the map
    addMapEventListeners({
      map,
      target: this.$data.lineLayer,
      listeners: this.$attrs,
      reservedEventTypes: Object.values(AzureMapLineLayerEvent),
    })
  },
  unmounted() {
    // Look for the injected function that retreives the map instance
    const getMap = getMapInjection(this)

    if (!getMap) return

    // Retrieve the map instance from the injected function
    const map = getMap()
    map.layers.remove(this.$data.lineLayer)
  },
  render() {
    return () => null
  },
})
</script>
