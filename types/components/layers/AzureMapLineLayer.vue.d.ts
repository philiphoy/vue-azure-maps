import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare enum AzureMapLineLayerEvent {
  Created = 'created',
}
declare const _default: import('vue').DefineComponent<
  {
    id: {
      type: StringConstructor
      default: string
    }
    lineOptions: {
      type: PropType<atlas.LineLayerOptions | null>
      default: null
    }
  },
  unknown,
  {
    lineLayer: atlas.layer.LineLayer
  },
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AzureMapLineLayerEvent.Created[],
  AzureMapLineLayerEvent,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      id: {
        type: StringConstructor
        default: string
      }
      lineOptions: {
        type: PropType<atlas.LineLayerOptions | null>
        default: null
      }
    }>
  > & {
    onCreated?: ((...args: any[]) => any) | undefined
  },
  {
    id: string
    lineOptions: atlas.LineLayerOptions | null
  }
>
/**
 * Renders line data on the map.
 */
export default _default
