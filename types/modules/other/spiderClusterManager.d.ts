import atlas from 'azure-maps-control'
/**
 * Options used to customize how the SpiderClusterManager renders clusters.
 */
export interface ISpiderClusterOptions {
  /** Minimium number of point features in cluster before switching from circle to spiral spider layout. Default: 6 */
  circleSpiralSwitchover?: number
  /** The minium pixel distance between point features and the cluster, when rendering spider layout as a circle. Default: 30 */
  minCircleLength?: number
  /** The minium angle between point features in the spiral. Default: 25 */
  minSpiralAngleSeperation?: number
  /** The maximum number of features that can be rendered in the spider layout. When the cluster is bigger than this value, it will zoom until the cluster starts to break apart. Default: 100 */
  maxFeaturesInWeb?: number
  /** A factor that is used to grow the pixel distance of each point feature from the center in the spiral. Default: 5 */
  spiralDistanceFactor?: number
  /** Layer options used to style the stick connecting the individual point feature to the cluster. */
  stickLayerOptions?: atlas.LineLayerOptions
  /**
   * A callback function that is fired when an individual point feature is clicked.
   * If the point feature is part of a cluster, the cluster will also be returned in the callback.
   */
  featureSelected?: (
    shape: atlas.Shape,
    cluster: atlas.data.Feature<atlas.data.Point, any> | null
  ) => void
  /** A callback that is fired when a point feature is unselected or a spider cluster is collapsed. */
  featureUnselected?: () => void
  /** A boolean indicating if the cluster layer is visible or not. */
  visible?: boolean
}
/**
 * Adds a clustering layer to the map which expands clusters into a spiral spider layout.
 */
export declare class SpiderClusterManager {
  /**********************
   * Private Properties
   ***********************/
  private _atlasLib
  private _map
  private _datasource
  private _spiderDataSource
  private _clusterLayer
  private _unclustedLayer
  private _spiderFeatureLayer
  private _spiderLineLayer
  private _hoverStateId
  private _spiderDatasourceId
  private _currentCluster
  private _options
  /**********************
   * Constructor
   ***********************/
  /**
   * @constructor
   * A cluster manager that expands clusters when selectd into a spiral layout.
   * @param map A map instance to add the cluster layer to.
   * @param clusterLayer The layer used for rendering the clusters.
   * @param options A combination of SpiderClusterManager and Cluster options.
   */
  constructor(
    lib: typeof atlas,
    map: atlas.Map,
    clusterLayer: atlas.layer.BubbleLayer | atlas.layer.SymbolLayer,
    unclustedLayer: atlas.layer.BubbleLayer | atlas.layer.SymbolLayer,
    options?: ISpiderClusterOptions
  )
  /**********************
   * Public Functions
   ***********************/
  /**
   * Disposes the SpiderClusterManager and releases it's resources.
   */
  dispose(): void
  /**
   * Collapses any open spider clusters.
   */
  private hideSpiderCluster
  /**
   * Sets the options used to customize how the SpiderClusterManager renders clusters.
   * @param options The options used to customize how the SpiderClusterManager renders clusters.
   */
  setOptions(options: ISpiderClusterOptions): void
  /**
   * Expands a cluster into it's open spider layout.
   * @param cluster The cluster to show in it's open spider layout.
   */
  showSpiderCluster(
    cluster: atlas.data.Feature<atlas.data.Point, atlas.ClusteredProperties>
  ): void
  /**********************
   * Private Functions
   ***********************/
  /**
   * Click event handler for when a shape in the cluster layer is clicked.
   * @param e The mouse event argurment from the click event.
   */
  private _layerClickEvent
  private _highlightStick
  private _unhighlightStick
  private _deepCopy
}
