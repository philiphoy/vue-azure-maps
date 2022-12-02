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
     * Specifies if the control should be hidden if fullscreen is not supported by the browser.
     * @default true
     */
    hideIfUnsupported: {
      type: BooleanConstructor
      default: boolean
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
       * Specifies if the control should be hidden if fullscreen is not supported by the browser.
       * @default true
       */
      hideIfUnsupported: {
        type: BooleanConstructor
        default: boolean
      }
    }>
  >,
  {
    position: atlas.ControlPosition
    controlStyle: string
    hideIfUnsupported: boolean
  }
>
/**
 * Fullscreen control adds the ability to toggle the map from its defined size to a fullscreen size.
 */
export default _default
