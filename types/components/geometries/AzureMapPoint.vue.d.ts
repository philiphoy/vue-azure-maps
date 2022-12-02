import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
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
  },
  unknown,
  {
    unbindProps: () => void
    point: atlas.data.Point | null
    shape: atlas.Shape | null
  },
  {
    pointCoordinates(): atlas.data.Position | null
    pointProperties(): Record<string, unknown>
  },
  {
    emitCircleCoordinates(shape: atlas.Shape): void
  },
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
    }>
  >,
  {
    id: string
    coordinates: atlas.data.Position | null
    properties: Record<string, unknown>
    longitude: number | null
    latitude: number | null
  }
>
/**
 * A Point that represents a geographic position.
 */
export default _default
