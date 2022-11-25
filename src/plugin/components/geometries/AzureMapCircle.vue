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
  computed: {
    propsToPass() {
      const defaultProperties = {
        subType: 'Circle',
        radius: this.radius,
      }
      const propProps = this.properties
        ? {
            ...this.properties,
            ...defaultProperties,
          }
        : defaultProperties
      return {
        id: this.id,
        coordinates: this.coordinates,
        latitude: this.latitude,
        longitude: this.longitude,
        properties: propProps,
      }
    },
  },
  render() {
    return h(AzureMapPoint, this.propsToPass)
  },
})
</script>
