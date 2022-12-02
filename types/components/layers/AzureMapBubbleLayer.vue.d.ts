import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare enum AzureMapBubbleLayerEvent {
  Created = 'created',
}
declare const _default: import('vue').DefineComponent<
  {
    id: {
      type: StringConstructor
      default: string
    }
    symbolOptions: {
      type: PropType<atlas.BubbleLayerOptions | null>
      default: null
    }
  },
  unknown,
  {
    bubbleLayer: atlas.layer.BubbleLayer
  },
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AzureMapBubbleLayerEvent.Created[],
  AzureMapBubbleLayerEvent,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      id: {
        type: StringConstructor
        default: string
      }
      symbolOptions: {
        type: PropType<atlas.BubbleLayerOptions | null>
        default: null
      }
    }>
  > & {
    onCreated?: ((...args: any[]) => any) | undefined
  },
  {
    id: string
    symbolOptions: atlas.BubbleLayerOptions | null
  }
>
/**
 * Renders Point objects as scalable circles (bubbles).
 */
export default _default
