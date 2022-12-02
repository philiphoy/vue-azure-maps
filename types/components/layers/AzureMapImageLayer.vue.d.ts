import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare enum AzureMapImageLayerEvent {
  Created = 'created',
}
declare const _default: import('vue').DefineComponent<
  {
    id: {
      type: StringConstructor
      default: string
    }
    options: {
      type: PropType<atlas.ImageLayerOptions | null>
      default: null
    }
  },
  unknown,
  {
    imageLayer: atlas.layer.ImageLayer
  },
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AzureMapImageLayerEvent.Created[],
  AzureMapImageLayerEvent,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      id: {
        type: StringConstructor
        default: string
      }
      options: {
        type: PropType<atlas.ImageLayerOptions | null>
        default: null
      }
    }>
  > & {
    onCreated?: ((...args: any[]) => any) | undefined
  },
  {
    id: string
    options: atlas.ImageLayerOptions | null
  }
>
/**
 * Overlay an image to fixed set of coordinates on the map.
 */
export default _default
