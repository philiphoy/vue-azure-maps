<script lang="ts">
import { defineComponent, h, PropType } from 'vue'
import AzureMapPoint from './AzureMapPoint.vue'
import { atlas } from 'types'

/**
 * A Point with a circle subtype.
 */
export default defineComponent({
  name: 'AzureMapCircle',

  functional: true,

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
    /**
     * The circle radius
     */
    radius: {
      type: Number,
      default: 0,
    },
  },

  render() {
    // const defaultProperties = {
    //   subType: 'Circle',
    //   radius: this.radius,
    // }

    // if (!context.data.attrs) {
    //   context.data.attrs = {}
    // }

    // context.data.attrs.properties = context.data.attrs.properties
    //   ? {
    //       ...context.data.attrs.properties,
    //       ...defaultProperties,
    //     }
    //   : defaultProperties

    return h(AzureMapPoint, this.$props)
  },
})
</script>
