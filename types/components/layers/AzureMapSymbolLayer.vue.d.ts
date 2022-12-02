import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare enum AzureMapSymbolLayerEvent {
  Created = 'created',
}
declare const _default: import('vue').DefineComponent<
  {
    id: {
      type: StringConstructor
      default: string
    }
    symbolOptions: {
      type: PropType<atlas.SymbolLayerOptions | null>
      default: null
    }
  },
  unknown,
  {
    symbolLayer: atlas.layer.SymbolLayer
  },
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AzureMapSymbolLayerEvent.Created[],
  AzureMapSymbolLayerEvent,
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
        type: PropType<atlas.SymbolLayerOptions | null>
        default: null
      }
    }>
  > & {
    onCreated?: ((...args: any[]) => any) | undefined
  },
  {
    id: string
    symbolOptions: atlas.SymbolLayerOptions | null
  }
>
/**
 * A symbol layer uses text or icons to render point-based data wrapped in the DataSource as symbols on the map.
 */
export default _default
