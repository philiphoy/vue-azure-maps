import { SpiderClusterManager } from '@/plugin/modules/other/spiderClusterManager'
import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare enum AzureMapSpiderClusterManagerEvent {
  FeatureSelected = 'feature-selected',
  FeatureUnselected = 'feature-unselected',
}
declare const _default: import('vue').DefineComponent<
  {
    /**
     * The cluster layer instace
     */
    clusterLayer: {
      type: PropType<atlas.layer.BubbleLayer | atlas.layer.SymbolLayer | null>
      default: null
      required: true
    }
    /**
     * The unclusted layer instance
     */
    unclustedLayer: {
      type: PropType<atlas.layer.BubbleLayer | atlas.layer.SymbolLayer | null>
      default: null
      required: true
    }
    /** Minimium number of point features in cluster before switching from circle to spiral spider layout. Default: 6 */
    circleSpiralSwitchover: {
      type: PropType<number | undefined>
      default: undefined
    }
    /** The minium pixel distance between point features and the cluster, when rendering spider layout as a circle. Default: 30 */
    minCircleLength: {
      type: PropType<number | undefined>
      default: undefined
    }
    /** The minium angle between point features in the spiral. Default: 25 */
    minSpiralAngleSeperation: {
      type: PropType<number | undefined>
      default: undefined
    }
    /** The maximum number of features that can be rendered in the spider layout. When the cluster is bigger than this value, it will zoom until the cluster starts to break apart. Default: 100 */
    maxFeaturesInWeb: {
      type: PropType<number | undefined>
      default: undefined
    }
    /** A factor that is used to grow the pixel distance of each point feature from the center in the spiral. Default: 5 */
    spiralDistanceFactor: {
      type: PropType<number | undefined>
      default: undefined
    }
    /** Layer options used to style the stick connecting the individual point feature to the cluster. */
    stickLayerOptions: {
      type: PropType<atlas.LineLayerOptions | undefined>
      default: undefined
    }
    /** A boolean indicating if the cluster layer is visible or not. */
    visible: {
      type: PropType<boolean | undefined>
      default: undefined
    }
  },
  unknown,
  {
    spiderManager: SpiderClusterManager | null
  },
  {
    spiderManagerOptionsProps(): Record<string, unknown>
  },
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AzureMapSpiderClusterManagerEvent[],
  AzureMapSpiderClusterManagerEvent,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      /**
       * The cluster layer instace
       */
      clusterLayer: {
        type: PropType<atlas.layer.BubbleLayer | atlas.layer.SymbolLayer | null>
        default: null
        required: true
      }
      /**
       * The unclusted layer instance
       */
      unclustedLayer: {
        type: PropType<atlas.layer.BubbleLayer | atlas.layer.SymbolLayer | null>
        default: null
        required: true
      }
      /** Minimium number of point features in cluster before switching from circle to spiral spider layout. Default: 6 */
      circleSpiralSwitchover: {
        type: PropType<number | undefined>
        default: undefined
      }
      /** The minium pixel distance between point features and the cluster, when rendering spider layout as a circle. Default: 30 */
      minCircleLength: {
        type: PropType<number | undefined>
        default: undefined
      }
      /** The minium angle between point features in the spiral. Default: 25 */
      minSpiralAngleSeperation: {
        type: PropType<number | undefined>
        default: undefined
      }
      /** The maximum number of features that can be rendered in the spider layout. When the cluster is bigger than this value, it will zoom until the cluster starts to break apart. Default: 100 */
      maxFeaturesInWeb: {
        type: PropType<number | undefined>
        default: undefined
      }
      /** A factor that is used to grow the pixel distance of each point feature from the center in the spiral. Default: 5 */
      spiralDistanceFactor: {
        type: PropType<number | undefined>
        default: undefined
      }
      /** Layer options used to style the stick connecting the individual point feature to the cluster. */
      stickLayerOptions: {
        type: PropType<atlas.LineLayerOptions | undefined>
        default: undefined
      }
      /** A boolean indicating if the cluster layer is visible or not. */
      visible: {
        type: PropType<boolean | undefined>
        default: undefined
      }
    }>
  > & {
    'onFeature-selected'?: ((...args: any[]) => any) | undefined
    'onFeature-unselected'?: ((...args: any[]) => any) | undefined
  },
  {
    visible: boolean | undefined
    clusterLayer: atlas.layer.BubbleLayer | atlas.layer.SymbolLayer | null
    unclustedLayer: atlas.layer.BubbleLayer | atlas.layer.SymbolLayer | null
    circleSpiralSwitchover: number | undefined
    minCircleLength: number | undefined
    minSpiralAngleSeperation: number | undefined
    maxFeaturesInWeb: number | undefined
    spiralDistanceFactor: number | undefined
    stickLayerOptions: atlas.LineLayerOptions | undefined
  }
>
export default _default
