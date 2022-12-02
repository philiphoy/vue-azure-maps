import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare enum AzureMapDataSourceEvent {
  Created = 'created',
}
declare const _default: import('vue').DefineComponent<
  {
    /**
     * A unique id that the user assigns to the data source.
     * If this is not specified, then the data source will automatically be assigned an id.
     */
    id: {
      type: PropType<string | undefined>
      default: undefined
    }
    /**
     * Maximum zoom level at which to create vector tiles (higher means greater detail at high zoom levels).
     * default `18`
     * @default 18
     */
    maxZoom: {
      type: PropType<number | undefined>
      default: undefined
    }
    /**
     * A boolean indicating if Point features in the source should be clustered or not.
     * If set to true, points will be clustered together into groups by radius.
     * default `false`
     * @default false
     */
    cluster: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    /**
     * The radius of each cluster in pixels.
     * default `50`
     * @default 50
     */
    clusterRadius: {
      type: PropType<number | undefined>
      default: undefined
    }
    /**
     * The maximum zoom level in which to cluster points.
     * Defaults to one zoom less than `maxZoom` so that last zoom features are not clustered.
     */
    clusterMaxZoom: {
      type: PropType<number | undefined>
      default: undefined
    }
    /**
     * Defines custom properties that are calculated using expressions against all the points within each cluster and added to the properties of each cluster point.
     */
    clusterProperties: {
      type: PropType<Record<string, atlas.AggregateExpression> | undefined>
      default: undefined
    }
    /**
     * Specifies whether to calculate line distance metrics.
     * This is required for line layers that specify `lineGradient` values.
     * default `false`
     * @default false
     */
    lineMetrics: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    externalSourceUrl: {
      type: PropType<string | undefined>
      default: undefined
    }
    /**
     * The Douglas-Peucker simplification tolerance that is applied to the data when rendering (higher means simpler geometries and faster performance).
     * default `0.375`
     * @default 0.375
     */
    tolerance: {
      type: PropType<number | undefined>
      default: undefined
    }
  },
  unknown,
  {
    dataSource: atlas.source.DataSource | null
  },
  {
    dataSourceOptionProps(): atlas.DataSourceOptions
  },
  {
    initializeDataSource(): void
    destroyed(): void
    getDataSource(): atlas.source.DataSource | null
  },
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AzureMapDataSourceEvent.Created[],
  AzureMapDataSourceEvent,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      /**
       * A unique id that the user assigns to the data source.
       * If this is not specified, then the data source will automatically be assigned an id.
       */
      id: {
        type: PropType<string | undefined>
        default: undefined
      }
      /**
       * Maximum zoom level at which to create vector tiles (higher means greater detail at high zoom levels).
       * default `18`
       * @default 18
       */
      maxZoom: {
        type: PropType<number | undefined>
        default: undefined
      }
      /**
       * A boolean indicating if Point features in the source should be clustered or not.
       * If set to true, points will be clustered together into groups by radius.
       * default `false`
       * @default false
       */
      cluster: {
        type: PropType<boolean | undefined>
        default: undefined
      }
      /**
       * The radius of each cluster in pixels.
       * default `50`
       * @default 50
       */
      clusterRadius: {
        type: PropType<number | undefined>
        default: undefined
      }
      /**
       * The maximum zoom level in which to cluster points.
       * Defaults to one zoom less than `maxZoom` so that last zoom features are not clustered.
       */
      clusterMaxZoom: {
        type: PropType<number | undefined>
        default: undefined
      }
      /**
       * Defines custom properties that are calculated using expressions against all the points within each cluster and added to the properties of each cluster point.
       */
      clusterProperties: {
        type: PropType<Record<string, atlas.AggregateExpression> | undefined>
        default: undefined
      }
      /**
       * Specifies whether to calculate line distance metrics.
       * This is required for line layers that specify `lineGradient` values.
       * default `false`
       * @default false
       */
      lineMetrics: {
        type: PropType<boolean | undefined>
        default: undefined
      }
      externalSourceUrl: {
        type: PropType<string | undefined>
        default: undefined
      }
      /**
       * The Douglas-Peucker simplification tolerance that is applied to the data when rendering (higher means simpler geometries and faster performance).
       * default `0.375`
       * @default 0.375
       */
      tolerance: {
        type: PropType<number | undefined>
        default: undefined
      }
    }>
  > & {
    onCreated?: ((...args: any[]) => any) | undefined
  },
  {
    id: string | undefined
    maxZoom: number | undefined
    cluster: boolean | undefined
    clusterRadius: number | undefined
    clusterMaxZoom: number | undefined
    lineMetrics: boolean | undefined
    tolerance: number | undefined
    clusterProperties: Record<string, atlas.AggregateExpression> | undefined
    externalSourceUrl: string | undefined
  }
>
/**
 * `AzureMapDataSource` makes it easy to manage shapes data that will be displayed on the map.
 *
 * A data source must be added to a layer before it is visible on the map.
 *
 * `AzureMapDataSource` may be used with:
 * `AzureMapSymbolLayer`, `AzureMapLineLayer`, `AzureMapPolygonLayer`, `AzureMapBubbleLayer`, and `AzureMapHeatMapLayer`.
 */
export default _default
