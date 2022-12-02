import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare enum AzureMapLineStringEvents {
  Error = 'error',
}
declare const _default: import('vue').DefineComponent<
  {
    id: {
      type: StringConstructor
      default: string
    }
    coordinates: {
      type: PropType<atlas.data.Position[] | null>
      default: null
    }
    properties: {
      type: PropType<Record<string, unknown>>
      default: () => {}
    }
  },
  unknown,
  unknown,
  {},
  {
    validateProps(): Promise<void>
    validateCoordinates(
      coordinates: atlas.data.Position[] | null
    ): Promise<atlas.data.Position[]>
  },
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AzureMapLineStringEvents.Error[],
  AzureMapLineStringEvents,
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
        type: PropType<atlas.data.Position[] | null>
        default: null
      }
      properties: {
        type: PropType<Record<string, unknown>>
        default: () => {}
      }
    }>
  > & {
    onError?: ((...args: any[]) => any) | undefined
  },
  {
    id: string
    coordinates: atlas.data.Position[] | null
    properties: Record<string, unknown>
  }
>
/**
 * A LineString represents a geographic curve.
 */
export default _default
