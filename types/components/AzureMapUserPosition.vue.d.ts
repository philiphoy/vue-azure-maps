import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare enum AzureMapUserPositionEvent {
  Success = 'success',
  Error = 'error',
  PermissionDenied = 'permission-denied',
  PositionUnavailable = 'permission-unavailable',
  Timeout = 'timeout',
  UnknownError = 'unknown-error',
  Ready = 'ready',
}
declare const _default: import('vue').DefineComponent<
  {
    /**
     * Indicates the application would like to receive the best possible results.
     * If true and if the device is able to provide a more accurate position, it will do so.
     */
    enableHighAccuracy: {
      type: BooleanConstructor
      default: boolean
    }
    /**
     * integer (milliseconds]) | infinity - maximum cached position age.
     */
    maximumAge: {
      type: NumberConstructor
      default: null
    }
    /**
     * integer (milliseconds]) - amount of time before the error callback is invoked, if 0 it will never invoke.
     */
    timeout: {
      type: NumberConstructor
      default: null
    }
    /**
     * Flag that controls if an accuracy circle polygon will be shown
     */
    showAccuracy: {
      type: BooleanConstructor
      default: boolean
    }
    /**
     * Override the user position accuracy used for the circle polygon radius
     */
    accuracy: {
      type: NumberConstructor
      default: null
    }
    /**
     * Flag that controls if the map will center on the users position
     */
    centerMapToUserPosition: {
      type: BooleanConstructor
      default: boolean
    }
    /**
     * The symbol layer options for the user position point
     */
    symbolLayerOptions: {
      type: PropType<atlas.SymbolLayerOptions | null>
      default: null
    }
    /**
     * If `centerMapToUserPosition` is true, this options are passed to the `map.setCamera` method
     */
    cameraOptions: {
      type: PropType<
        | (atlas.CameraOptions & atlas.AnimationOptions)
        | (atlas.CameraBoundsOptions & atlas.AnimationOptions)
        | null
      >
      default: null
    }
    /**
     * The polygon layer options for the accuracy circle polygon
     */
    polygonLayerOptions: {
      type: PropType<atlas.PolygonLayerOptions | null>
      default: null
    }
  },
  unknown,
  {
    longitude: number | null
    latitude: number | null
    radius: number | null
    defaultSymbolLayerOptions: {
      filter: (string | (string | string[])[])[]
    }
    hasPosition: boolean
    error: GeolocationPositionError | null
  },
  {
    circleEventName(): string
    userPositionSymbolLayerOptions(): Record<string, unknown>
  },
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AzureMapUserPositionEvent[],
  AzureMapUserPositionEvent,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      /**
       * Indicates the application would like to receive the best possible results.
       * If true and if the device is able to provide a more accurate position, it will do so.
       */
      enableHighAccuracy: {
        type: BooleanConstructor
        default: boolean
      }
      /**
       * integer (milliseconds]) | infinity - maximum cached position age.
       */
      maximumAge: {
        type: NumberConstructor
        default: null
      }
      /**
       * integer (milliseconds]) - amount of time before the error callback is invoked, if 0 it will never invoke.
       */
      timeout: {
        type: NumberConstructor
        default: null
      }
      /**
       * Flag that controls if an accuracy circle polygon will be shown
       */
      showAccuracy: {
        type: BooleanConstructor
        default: boolean
      }
      /**
       * Override the user position accuracy used for the circle polygon radius
       */
      accuracy: {
        type: NumberConstructor
        default: null
      }
      /**
       * Flag that controls if the map will center on the users position
       */
      centerMapToUserPosition: {
        type: BooleanConstructor
        default: boolean
      }
      /**
       * The symbol layer options for the user position point
       */
      symbolLayerOptions: {
        type: PropType<atlas.SymbolLayerOptions | null>
        default: null
      }
      /**
       * If `centerMapToUserPosition` is true, this options are passed to the `map.setCamera` method
       */
      cameraOptions: {
        type: PropType<
          | (atlas.CameraOptions & atlas.AnimationOptions)
          | (atlas.CameraBoundsOptions & atlas.AnimationOptions)
          | null
        >
        default: null
      }
      /**
       * The polygon layer options for the accuracy circle polygon
       */
      polygonLayerOptions: {
        type: PropType<atlas.PolygonLayerOptions | null>
        default: null
      }
    }>
  > & {
    onError?: ((...args: any[]) => any) | undefined
    onReady?: ((...args: any[]) => any) | undefined
    onSuccess?: ((...args: any[]) => any) | undefined
    onTimeout?: ((...args: any[]) => any) | undefined
    'onPermission-denied'?: ((...args: any[]) => any) | undefined
    'onPermission-unavailable'?: ((...args: any[]) => any) | undefined
    'onUnknown-error'?: ((...args: any[]) => any) | undefined
  },
  {
    timeout: number
    enableHighAccuracy: boolean
    maximumAge: number
    showAccuracy: boolean
    accuracy: number
    centerMapToUserPosition: boolean
    symbolLayerOptions: atlas.SymbolLayerOptions | null
    cameraOptions:
      | (atlas.CameraOptions & atlas.AnimationOptions)
      | (atlas.CameraBoundsOptions & atlas.AnimationOptions)
      | null
    polygonLayerOptions: atlas.PolygonLayerOptions | null
  }
>
export default _default
