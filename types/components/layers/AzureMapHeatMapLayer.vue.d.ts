import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare enum AzureMapHeatMapLayerEvent {
  Created = 'created',
}
declare const _default: import('vue').DefineComponent<
  {
    id: {
      type: StringConstructor
      default: string
    }
    options: {
      type: PropType<atlas.HeatMapLayerOptions | null>
      default: null
    }
  },
  unknown,
  {
    heatMapLayer: atlas.layer.HeatMapLayer
  },
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AzureMapHeatMapLayerEvent.Created[],
  AzureMapHeatMapLayerEvent,
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
        type: PropType<atlas.HeatMapLayerOptions | null>
        default: null
      }
    }>
  > & {
    onCreated?: ((...args: any[]) => any) | undefined
  },
  {
    id: string
    options: atlas.HeatMapLayerOptions | null
  }
>
/**
 * Heat maps are a type of data visualization used to represent the density of data using a range of colors.
 */
export default _default
