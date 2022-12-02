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
     * The style of the control.
     * Default `ControlStyle.light`
     * @default ControlStyle.light
     */
    controlStyle: {
      type: PropType<atlas.ControlStyle>
      default: atlas.ControlStyle
    }
    /**
     * The map styles to show in the control.
     * Style names are case sensitive.
     * If an included style isn't supported by the map it will be ignored.
     * Available styles can be found in the
     * [supported styles]{@link https://docs.microsoft.com/en-us/azure/azure-maps/supported-map-styles} article.
     * If "all" is specified, all map styles will be shown.
     * Styles: `["road", "blank", "blank_accessible", "satellite", "satellite_road_labels", "grayscale_light", "grayscale_dark", "night", "road_shaded_relief"]`
     */
    mapStyles: {
      type: PropType<string[] | 'all'>
      default: string
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
       * The style of the control.
       * Default `ControlStyle.light`
       * @default ControlStyle.light
       */
      controlStyle: {
        type: PropType<atlas.ControlStyle>
        default: atlas.ControlStyle
      }
      /**
       * The map styles to show in the control.
       * Style names are case sensitive.
       * If an included style isn't supported by the map it will be ignored.
       * Available styles can be found in the
       * [supported styles]{@link https://docs.microsoft.com/en-us/azure/azure-maps/supported-map-styles} article.
       * If "all" is specified, all map styles will be shown.
       * Styles: `["road", "blank", "blank_accessible", "satellite", "satellite_road_labels", "grayscale_light", "grayscale_dark", "night", "road_shaded_relief"]`
       */
      mapStyles: {
        type: PropType<string[] | 'all'>
        default: string
      }
    }>
  >,
  {
    position: atlas.ControlPosition
    mapStyles: string[] | 'all'
    controlStyle: atlas.ControlStyle
  }
>
/**
 * Style control adds the ability to change the style of the `atlas.Map`.
 */
export default _default
