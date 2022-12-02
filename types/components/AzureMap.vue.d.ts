import * as atlas from 'azure-maps-control'
import { PropType, CSSProperties } from 'vue'
declare enum AzureMapEvent {
  Ready = 'ready',
}
declare const _default: import('vue').DefineComponent<
  {
    /**
     * The `atlas.Map` container width
     *
     * Note this property is optional because it could be specified using CSS
     */
    width: {
      type: PropType<string | null>
      default: null
    }
    /**
     * The `atlas.Map` container height
     *
     * Note this property is optional because it could be specified using CSS
     */
    height: {
      type: PropType<string | null>
      default: null
    }
    /**
     * The authentication options used to customize how the map control authenticates with Azure Maps services.
     * If these authentication options are specified then ServiceOptions.subscriptionKey should not be.
     * Recommend using the atlas.setAuthenticationOptions function instead.
     */
    authOptions: {
      type: PropType<atlas.AuthenticationOptions | null>
      default: null
    }
    /**
     * The customer subscription key used to authorize requests.
     * This option may only be set when initializing the map.
     * Recommend using the atlas.setSubscriptionKey function instead
     */
    subscriptionKey: {
      type: PropType<string | null>
      default: null
    }
    /**
     * The session id to pass with requests.
     * Recommend using atlas.setSessionId instead.
     * @default Random UUID generated at runtime
     */
    sessionId: {
      type: PropType<string | null>
      default: null
    }
    /**
     * Disable telemetry collection
     * This option may only be set when initializing the map.
     * default: false
     * @default false
     */
    disableTelemetry: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * Enable accessibility
     * default: false
     * @default false
     */
    enableAccessibility: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * A boolean that specifies if vector and raster tiles should be reloaded when they expire (based on expires header).
     * This is useful for data sets that update frequently. When set to false, each tile will be loaded once, when needed, and not reloaded when they expire.
     * default: true
     * @default true
     */
    refreshExpiredTiles: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * If defined transformRequest will be called to provide custom request parameters for loading a tile.
     * `(url: string, resourceType: string) => RequestParameters`
     */
    transformRequest: {
      type: PropType<() => void | null>
      default: null
    }
    /**
     * The zoom level of the map view.
     * `default 1`
     * @default 1
     */
    zoom: {
      type: PropType<number | null>
      default: null
    }
    /**
     * The position to align the center of the map view with.
     * `default [0, 0]`
     * @default [0, 0]
     */
    center: {
      type: PropType<atlas.data.Position | null>
      default: null
    }
    /**
     * A pixel offset to apply to the center of the map.
     * This is useful if you want to programmatically pan the map to another location or if you want to center the map over a shape, then offset the maps view to make room for a popup.
     * Default `[0, 0]`.
     * @default [0, 0]
     */
    centerOffset: {
      type: PropType<atlas.Pixel | null>
      default: null
    }
    /**
     * The bearing of the map (rotation) in degrees.
     * When the bearing is 0, 90, 180, or 270 the top of the map container will be north, east, south or west respectively.
     * `default 0`
     * @default 0
     */
    bearing: {
      type: PropType<number | null>
      default: null
    }
    /**
     * The pitch (tilt) of the map in degrees between 0 and 60, where 0 is looking straight down on the map.
     * `default 0`
     * @default 0
     */
    pitch: {
      type: PropType<number | null>
      default: null
    }
    /**
     * The minimum zoom level that the map can be zoomed out to during the animation. Must be between 0 and 24, and less than or equal to `maxZoom`.
     * `default 1`
     * @default 1
     */
    minZoom: {
      type: PropType<number | null>
      default: null
    }
    /**
     * The maximum zoom level that the map can be zoomed into during the animation. Must be between 0 and 24, and greater than or equal to `minZoom`.
     * `default 20`
     * @default 20
     */
    maxZoom: {
      type: PropType<number | null>
      default: null
    }
    /**
     * The bounds of the map control's camera.
     * `default [-180, -89, 180, 90]`
     * @default [-180, -89, 180, 90]
     */
    bounds: {
      type: PropType<atlas.data.BoundingBox | null>
      default: null
    }
    /**
     * An offset of the center of the given bounds relative to the map's center, measured in pixels.
     * `default [0, 0]`
     * @default [0, 0]
     */
    offset: {
      type: PropType<atlas.Pixel | null>
      default: null
    }
    /**
     * The amount of padding in pixels to add to the given bounds.
     * `default {top: 0, bottom: 0, left: 0, right: 0}`
     * @default {top: 0, bottom: 0, left: 0, right: 0}
     */
    padding: {
      type: PropType<number | atlas.Padding | null>
      default: null
    }
    /**
     * If true the map will automatically resize whenever the window's size changes.
     * Otherwise map.resize() must be called.
     * Default `true`.
     * @default true
     */
    autoResize: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * If true, the map's canvas can be exported to a PNG using map.getCanvas().toDataURL().
     * This option may only be set when initializing the map.
     * Default `false`
     * @default false
     */
    preserveDrawingBuffer: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * Specfies if multiple copies of the world should be rendered when zoomed out.
     * Default `true`
     * @default true
     */
    renderWorldCopies: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * Specifies if the feedback link should be displayed on the map or not.
     * Default `true`
     * @default true
     */
    showFeedbackLink: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * Specifies if the Microsoft logo should be hidden or not.
     * If set to true a Microsoft copyright string will be added to the map.
     * Default `true`
     * @default true
     */
    showLogo: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * The name of the style to use when rendering the map. Available styles can be found in the
     * [supported styles]{@link https://docs.microsoft.com/en-us/azure/azure-maps/supported-map-styles} article. The
     * default style is "road".
     */
    mapStyle: {
      type: PropType<string | null>
      default: null
    }
    /**
     * The language of the map labels.
     * [Supported language]{@link https://docs.microsoft.com/en-us/azure/azure-maps/supported-languages}.
     * Default `atlas.getLanguage()`.
     * @default atlas.getLanguage()
     */
    language: {
      type: PropType<string | null>
      default: null
    }
    /**
     * Specifies which set of geopolitically disputed borders and labels are displayed on the map. The View parameter (also referred to as “user region parameter”) is a 2-letter ISO-3166 Country Code that will show the correct maps for that country/region. Country/Regions that are not on the View list or if unspecified will default to the “Unified” View.
     * Please see the supported [Views]{@link https://aka.ms/AzureMapsLocalizationViews}
     * It is your responsibility to determine the location of your users, and then set the View parameter correctly for that location. The View parameter in Azure Maps must be used in compliance with applicable laws, including those regarding mapping, of the country where maps, images and other data and third party content that You are authorized to access via Azure Maps is made available.
     * default: `undefined`
     * @default undefined
     */
    view: {
      type: PropType<string | null>
      default: null
    }
    /**
     * Whether the map is interactive or static. If false, all user interaction is disabled.  If true, only selected
     * user interactions will enabled.
     * default `true`
     * @default true
     */
    interactive: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * Whether the map should zoom on scroll input.
     * default `true`
     * @default true
     */
    scrollZoomInteraction: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * Whether the Shift + left click and drag will draw a zoom box.
     * default `true`
     * @default true
     */
    boxZoomInteraction: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * Whether right click and drag will rotate and pitch the map.
     * default `true`
     * @default true
     */
    dragRotateInteraction: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * Whether left click and drag will pan the map.
     * default `true`
     * @default true
     */
    dragPanInteraction: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * Whether the keyboard interactions are enabled.
     * <style> .k-key { border: 1px solid grey; border-radius: 6px; background-color: #ccc; line-height: 14px;
     * font-size: 14px; padding: 2px; } </style>
     * <p><span class="k-key">+/=</span>: Increase zoom level by 1.</p>
     * <p><span class="k-key">Shift</span> + <span class="k-key">+/=</span>: Increase the zoom level by 2.</p>
     * <p><span class="k-key">-</span>: Decrease zoom level by 1.</p>
     * <p><span class="k-key">Shift</span> + <span class="k-key">-</span>: Decrease zoom level by 2.</p>
     * <p><span class="k-key">⇢</span>: Pan right 100 pixels.</p>
     * <p><span class="k-key">⇠</span>: Pan left 100 pixels.</p>
     * <p><span class="k-key">⇡</span>: Pan up 100 pixels.</p>
     * <p><span class="k-key">⇣</span>: Pan down 100 pixels.</p>
     * <p><span class="k-key">Shift</span> + <span class="k-key">⇢</span>: Rotate 15 degrees clockwise.</p>
     * <p><span class="k-key">Shift</span> + <span class="k-key">⇠</span>: Rotate 15 degrees counter-clockwise.</p>
     * <p><span class="k-key">Shift</span> + <span class="k-key">⇡</span>: Increase pitch by 10 degrees.</p>
     * <p><span class="k-key">Shift</span> + <span class="k-key">⇣</span>: Decrease pitch by 10 degrees.</p>
     * default `true`
     * @default true
     */
    keyboardInteraction: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * Whether double left click will zoom the map inwards.
     * default `true`
     * @default true
     */
    dblClickZoomInteraction: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * Whether touch interactions are enabled for touch devices.
     * default `true`
     * @default true
     */
    touchInteraction: {
      type: PropType<boolean | null>
      default: null
    }
  },
  unknown,
  {
    /**
     * The `atlas.Map` container id
     */
    mapId: string
    /**
     * The `atlas.Map` instance
     */
    map: atlas.Map | null
    /**
     * Flag that indicates that the `atlas.Map` instance is ready
     */
    isMapReady: boolean
    removeEventListeners: () => void
    unbindProps: () => void
    removeMapReadyListener: () => void
  },
  {
    divStyle(): CSSProperties
  },
  {
    initializeMap(): void
    mapReadyCallback(mapEvent: atlas.MapEvent): void
    getMap(): atlas.Map | null
  },
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  (
    | AzureMapEvent.Ready
    | 'update:language'
    | 'update:renderWorldCopies'
    | 'update:showFeedbackLink'
    | 'update:showLogo'
    | 'update:mapStyle'
    | 'update:zoom'
    | 'update:minZoom'
    | 'update:maxZoom'
    | 'update:center'
    | 'update:bearing'
    | 'update:pitch'
  )[],
  | AzureMapEvent
  | 'update:language'
  | 'update:renderWorldCopies'
  | 'update:showFeedbackLink'
  | 'update:showLogo'
  | 'update:mapStyle'
  | 'update:zoom'
  | 'update:minZoom'
  | 'update:maxZoom'
  | 'update:center'
  | 'update:bearing'
  | 'update:pitch',
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      /**
       * The `atlas.Map` container width
       *
       * Note this property is optional because it could be specified using CSS
       */
      width: {
        type: PropType<string | null>
        default: null
      }
      /**
       * The `atlas.Map` container height
       *
       * Note this property is optional because it could be specified using CSS
       */
      height: {
        type: PropType<string | null>
        default: null
      }
      /**
       * The authentication options used to customize how the map control authenticates with Azure Maps services.
       * If these authentication options are specified then ServiceOptions.subscriptionKey should not be.
       * Recommend using the atlas.setAuthenticationOptions function instead.
       */
      authOptions: {
        type: PropType<atlas.AuthenticationOptions | null>
        default: null
      }
      /**
       * The customer subscription key used to authorize requests.
       * This option may only be set when initializing the map.
       * Recommend using the atlas.setSubscriptionKey function instead
       */
      subscriptionKey: {
        type: PropType<string | null>
        default: null
      }
      /**
       * The session id to pass with requests.
       * Recommend using atlas.setSessionId instead.
       * @default Random UUID generated at runtime
       */
      sessionId: {
        type: PropType<string | null>
        default: null
      }
      /**
       * Disable telemetry collection
       * This option may only be set when initializing the map.
       * default: false
       * @default false
       */
      disableTelemetry: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * Enable accessibility
       * default: false
       * @default false
       */
      enableAccessibility: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * A boolean that specifies if vector and raster tiles should be reloaded when they expire (based on expires header).
       * This is useful for data sets that update frequently. When set to false, each tile will be loaded once, when needed, and not reloaded when they expire.
       * default: true
       * @default true
       */
      refreshExpiredTiles: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * If defined transformRequest will be called to provide custom request parameters for loading a tile.
       * `(url: string, resourceType: string) => RequestParameters`
       */
      transformRequest: {
        type: PropType<() => void | null>
        default: null
      }
      /**
       * The zoom level of the map view.
       * `default 1`
       * @default 1
       */
      zoom: {
        type: PropType<number | null>
        default: null
      }
      /**
       * The position to align the center of the map view with.
       * `default [0, 0]`
       * @default [0, 0]
       */
      center: {
        type: PropType<atlas.data.Position | null>
        default: null
      }
      /**
       * A pixel offset to apply to the center of the map.
       * This is useful if you want to programmatically pan the map to another location or if you want to center the map over a shape, then offset the maps view to make room for a popup.
       * Default `[0, 0]`.
       * @default [0, 0]
       */
      centerOffset: {
        type: PropType<atlas.Pixel | null>
        default: null
      }
      /**
       * The bearing of the map (rotation) in degrees.
       * When the bearing is 0, 90, 180, or 270 the top of the map container will be north, east, south or west respectively.
       * `default 0`
       * @default 0
       */
      bearing: {
        type: PropType<number | null>
        default: null
      }
      /**
       * The pitch (tilt) of the map in degrees between 0 and 60, where 0 is looking straight down on the map.
       * `default 0`
       * @default 0
       */
      pitch: {
        type: PropType<number | null>
        default: null
      }
      /**
       * The minimum zoom level that the map can be zoomed out to during the animation. Must be between 0 and 24, and less than or equal to `maxZoom`.
       * `default 1`
       * @default 1
       */
      minZoom: {
        type: PropType<number | null>
        default: null
      }
      /**
       * The maximum zoom level that the map can be zoomed into during the animation. Must be between 0 and 24, and greater than or equal to `minZoom`.
       * `default 20`
       * @default 20
       */
      maxZoom: {
        type: PropType<number | null>
        default: null
      }
      /**
       * The bounds of the map control's camera.
       * `default [-180, -89, 180, 90]`
       * @default [-180, -89, 180, 90]
       */
      bounds: {
        type: PropType<atlas.data.BoundingBox | null>
        default: null
      }
      /**
       * An offset of the center of the given bounds relative to the map's center, measured in pixels.
       * `default [0, 0]`
       * @default [0, 0]
       */
      offset: {
        type: PropType<atlas.Pixel | null>
        default: null
      }
      /**
       * The amount of padding in pixels to add to the given bounds.
       * `default {top: 0, bottom: 0, left: 0, right: 0}`
       * @default {top: 0, bottom: 0, left: 0, right: 0}
       */
      padding: {
        type: PropType<number | atlas.Padding | null>
        default: null
      }
      /**
       * If true the map will automatically resize whenever the window's size changes.
       * Otherwise map.resize() must be called.
       * Default `true`.
       * @default true
       */
      autoResize: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * If true, the map's canvas can be exported to a PNG using map.getCanvas().toDataURL().
       * This option may only be set when initializing the map.
       * Default `false`
       * @default false
       */
      preserveDrawingBuffer: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * Specfies if multiple copies of the world should be rendered when zoomed out.
       * Default `true`
       * @default true
       */
      renderWorldCopies: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * Specifies if the feedback link should be displayed on the map or not.
       * Default `true`
       * @default true
       */
      showFeedbackLink: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * Specifies if the Microsoft logo should be hidden or not.
       * If set to true a Microsoft copyright string will be added to the map.
       * Default `true`
       * @default true
       */
      showLogo: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * The name of the style to use when rendering the map. Available styles can be found in the
       * [supported styles]{@link https://docs.microsoft.com/en-us/azure/azure-maps/supported-map-styles} article. The
       * default style is "road".
       */
      mapStyle: {
        type: PropType<string | null>
        default: null
      }
      /**
       * The language of the map labels.
       * [Supported language]{@link https://docs.microsoft.com/en-us/azure/azure-maps/supported-languages}.
       * Default `atlas.getLanguage()`.
       * @default atlas.getLanguage()
       */
      language: {
        type: PropType<string | null>
        default: null
      }
      /**
       * Specifies which set of geopolitically disputed borders and labels are displayed on the map. The View parameter (also referred to as “user region parameter”) is a 2-letter ISO-3166 Country Code that will show the correct maps for that country/region. Country/Regions that are not on the View list or if unspecified will default to the “Unified” View.
       * Please see the supported [Views]{@link https://aka.ms/AzureMapsLocalizationViews}
       * It is your responsibility to determine the location of your users, and then set the View parameter correctly for that location. The View parameter in Azure Maps must be used in compliance with applicable laws, including those regarding mapping, of the country where maps, images and other data and third party content that You are authorized to access via Azure Maps is made available.
       * default: `undefined`
       * @default undefined
       */
      view: {
        type: PropType<string | null>
        default: null
      }
      /**
       * Whether the map is interactive or static. If false, all user interaction is disabled.  If true, only selected
       * user interactions will enabled.
       * default `true`
       * @default true
       */
      interactive: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * Whether the map should zoom on scroll input.
       * default `true`
       * @default true
       */
      scrollZoomInteraction: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * Whether the Shift + left click and drag will draw a zoom box.
       * default `true`
       * @default true
       */
      boxZoomInteraction: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * Whether right click and drag will rotate and pitch the map.
       * default `true`
       * @default true
       */
      dragRotateInteraction: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * Whether left click and drag will pan the map.
       * default `true`
       * @default true
       */
      dragPanInteraction: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * Whether the keyboard interactions are enabled.
       * <style> .k-key { border: 1px solid grey; border-radius: 6px; background-color: #ccc; line-height: 14px;
       * font-size: 14px; padding: 2px; } </style>
       * <p><span class="k-key">+/=</span>: Increase zoom level by 1.</p>
       * <p><span class="k-key">Shift</span> + <span class="k-key">+/=</span>: Increase the zoom level by 2.</p>
       * <p><span class="k-key">-</span>: Decrease zoom level by 1.</p>
       * <p><span class="k-key">Shift</span> + <span class="k-key">-</span>: Decrease zoom level by 2.</p>
       * <p><span class="k-key">⇢</span>: Pan right 100 pixels.</p>
       * <p><span class="k-key">⇠</span>: Pan left 100 pixels.</p>
       * <p><span class="k-key">⇡</span>: Pan up 100 pixels.</p>
       * <p><span class="k-key">⇣</span>: Pan down 100 pixels.</p>
       * <p><span class="k-key">Shift</span> + <span class="k-key">⇢</span>: Rotate 15 degrees clockwise.</p>
       * <p><span class="k-key">Shift</span> + <span class="k-key">⇠</span>: Rotate 15 degrees counter-clockwise.</p>
       * <p><span class="k-key">Shift</span> + <span class="k-key">⇡</span>: Increase pitch by 10 degrees.</p>
       * <p><span class="k-key">Shift</span> + <span class="k-key">⇣</span>: Decrease pitch by 10 degrees.</p>
       * default `true`
       * @default true
       */
      keyboardInteraction: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * Whether double left click will zoom the map inwards.
       * default `true`
       * @default true
       */
      dblClickZoomInteraction: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * Whether touch interactions are enabled for touch devices.
       * default `true`
       * @default true
       */
      touchInteraction: {
        type: PropType<boolean | null>
        default: null
      }
    }>
  > & {
    onReady?: ((...args: any[]) => any) | undefined
    'onUpdate:language'?: ((...args: any[]) => any) | undefined
    'onUpdate:renderWorldCopies'?: ((...args: any[]) => any) | undefined
    'onUpdate:showFeedbackLink'?: ((...args: any[]) => any) | undefined
    'onUpdate:showLogo'?: ((...args: any[]) => any) | undefined
    'onUpdate:mapStyle'?: ((...args: any[]) => any) | undefined
    'onUpdate:zoom'?: ((...args: any[]) => any) | undefined
    'onUpdate:minZoom'?: ((...args: any[]) => any) | undefined
    'onUpdate:maxZoom'?: ((...args: any[]) => any) | undefined
    'onUpdate:center'?: ((...args: any[]) => any) | undefined
    'onUpdate:bearing'?: ((...args: any[]) => any) | undefined
    'onUpdate:pitch'?: ((...args: any[]) => any) | undefined
  },
  {
    interactive: boolean | null
    offset: atlas.Pixel | null
    height: string | null
    width: string | null
    center: atlas.data.Position | null
    view: string | null
    padding: number | atlas.Padding | null
    language: string | null
    minZoom: number | null
    maxZoom: number | null
    bounds: atlas.data.BoundingBox | null
    zoom: number | null
    centerOffset: atlas.Pixel | null
    bearing: number | null
    pitch: number | null
    autoResize: boolean | null
    preserveDrawingBuffer: boolean | null
    renderWorldCopies: boolean | null
    showFeedbackLink: boolean | null
    showLogo: boolean | null
    scrollZoomInteraction: boolean | null
    boxZoomInteraction: boolean | null
    dragRotateInteraction: boolean | null
    dragPanInteraction: boolean | null
    keyboardInteraction: boolean | null
    dblClickZoomInteraction: boolean | null
    touchInteraction: boolean | null
    subscriptionKey: string | null
    authOptions: atlas.AuthenticationOptions | null
    disableTelemetry: boolean | null
    enableAccessibility: boolean | null
    refreshExpiredTiles: boolean | null
    sessionId: string | null
    transformRequest: () => void | null
    mapStyle: string | null
  }
>
export default _default
