import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare enum AzureMapTileLayerEvent {
  Created = 'created',
}
declare const _default: import('vue').DefineComponent<
  {
    id: {
      type: StringConstructor
      default: string
    }
    options: {
      type: PropType<atlas.TileLayerOptions | null>
      default: null
    }
  },
  unknown,
  {
    tileLayer: atlas.layer.TileLayer
  },
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AzureMapTileLayerEvent.Created[],
  AzureMapTileLayerEvent,
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
        type: PropType<atlas.TileLayerOptions | null>
        default: null
      }
    }>
  > & {
    onCreated?: ((...args: any[]) => any) | undefined
  },
  {
    id: string
    options: atlas.TileLayerOptions | null
  }
>
/**
 * Tile layers allow you to superimpose images on top of Azure Maps base map tiles.
 */
export default _default
