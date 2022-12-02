import { PropType } from 'vue'
import * as atlas from 'azure-maps-control'
declare const _default: import('vue').DefineComponent<
  {
    id: {
      type: StringConstructor
      default: string
    }
    coordinates: {
      type: PropType<atlas.data.Position | null>
      default: null
    }
    longitude: {
      type: PropType<number | null>
      default: null
    }
    latitude: {
      type: PropType<number | null>
      default: null
    }
    properties: {
      type: PropType<Record<string, unknown>>
      default: () => {}
    }
    /**
     * The circle radius
     */
    radius: {
      type: NumberConstructor
      default: number
    }
  },
  unknown,
  unknown,
  {
    propsToPass(): {
      id: string
      coordinates: atlas.data.Position | null
      latitude: number | null
      longitude: number | null
      properties: {
        subType: string
        radius: number
      }
    }
  },
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      id: {
        type: StringConstructor
        default: string
      }
      coordinates: {
        type: PropType<atlas.data.Position | null>
        default: null
      }
      longitude: {
        type: PropType<number | null>
        default: null
      }
      latitude: {
        type: PropType<number | null>
        default: null
      }
      properties: {
        type: PropType<Record<string, unknown>>
        default: () => {}
      }
      /**
       * The circle radius
       */
      radius: {
        type: NumberConstructor
        default: number
      }
    }>
  >,
  {
    id: string
    radius: number
    coordinates: atlas.data.Position | null
    properties: Record<string, unknown>
    longitude: number | null
    latitude: number | null
  }
>
/**
 * A Point with a circle subtype.
 */
export default _default
