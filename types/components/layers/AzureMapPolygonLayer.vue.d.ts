import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare enum AzureMapPolygonLayerEvent {
  Created = 'created',
}
declare const _default: import('vue').DefineComponent<
  {
    id: {
      type: StringConstructor
      default: string
    }
    options: {
      type: PropType<atlas.PolygonLayerOptions | null>
      default: null
    }
  },
  unknown,
  {
    polygonLayer: atlas.layer.PolygonLayer
  },
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AzureMapPolygonLayerEvent.Created[],
  AzureMapPolygonLayerEvent,
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
        type: PropType<atlas.PolygonLayerOptions | null>
        default: null
      }
    }>
  > & {
    onCreated?: ((...args: any[]) => any) | undefined
  },
  {
    id: string
    options: atlas.PolygonLayerOptions | null
  }
>
/**
 * A symbol layer uses text or icons to render point-based data wrapped in the DataSource as symbols on the map.
 */
export default _default
