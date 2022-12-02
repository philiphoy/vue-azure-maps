import * as atlas from 'azure-maps-control'
import { ControlPosition } from 'azure-maps-control'
import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    /**
     * The position where the control will be placed on the map.
     */
    position: {
      type: PropType<atlas.ControlPosition>
      default: atlas.ControlPosition
      validator: (value: atlas.ControlPosition) => boolean
    }
    /**
     * The style of the control. Can be; light, dark, auto, or any CSS3 color. When set to auto, the style will change based on the map style.
     * Default `ControlStyle.light'.
     * @default ControlStyle.light
     */
    controlStyle: {
      type: PropType<string>
      default: atlas.ControlStyle
    }
    /**
     * A Geolocation API PositionOptions object.
     * Default: {enableHighAccuracy:false,timeout:6000}
     */
    positionOptions: {
      type: PropType<PositionOptions | null>
      default: null
    }
    /**
     * Shows the users location on the map using a marker.
     * Default: true
     * */
    showUserLocation: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * If true the Geolocation Control becomes a toggle button and when active the map will receive updates to the user's location as it changes.
     * Default: false
     * */
    trackUserLocation: {
      type: PropType<boolean | null>
      default: null
    }
    /** The color of the user location marker.
     * Default: DodgerBlue
     * */
    markerColor: {
      type: PropType<string | null>
      default: null
    }
  },
  unknown,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      /**
       * The position where the control will be placed on the map.
       */
      position: {
        type: PropType<atlas.ControlPosition>
        default: atlas.ControlPosition
        validator: (value: atlas.ControlPosition) => boolean
      }
      /**
       * The style of the control. Can be; light, dark, auto, or any CSS3 color. When set to auto, the style will change based on the map style.
       * Default `ControlStyle.light'.
       * @default ControlStyle.light
       */
      controlStyle: {
        type: PropType<string>
        default: atlas.ControlStyle
      }
      /**
       * A Geolocation API PositionOptions object.
       * Default: {enableHighAccuracy:false,timeout:6000}
       */
      positionOptions: {
        type: PropType<PositionOptions | null>
        default: null
      }
      /**
       * Shows the users location on the map using a marker.
       * Default: true
       * */
      showUserLocation: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * If true the Geolocation Control becomes a toggle button and when active the map will receive updates to the user's location as it changes.
       * Default: false
       * */
      trackUserLocation: {
        type: PropType<boolean | null>
        default: null
      }
      /** The color of the user location marker.
       * Default: DodgerBlue
       * */
      markerColor: {
        type: PropType<string | null>
        default: null
      }
    }>
  >,
  {
    position: atlas.ControlPosition
    controlStyle: string
    positionOptions: PositionOptions | null
    markerColor: string | null
    showUserLocation: boolean | null
    trackUserLocation: boolean | null
  }
>
/**
 * A control that uses the browser's geolocation API to locate the user on the map.
 */
export default _default
