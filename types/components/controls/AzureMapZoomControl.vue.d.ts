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
     * The extent to which the map will zoom with each click of the control.
     * Default `1`.
     * @default 1
     */
    zoomDelta: {
      type: NumberConstructor
      default: number
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
       * The extent to which the map will zoom with each click of the control.
       * Default `1`.
       * @default 1
       */
      zoomDelta: {
        type: NumberConstructor
        default: number
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
    }>
  >,
  {
    position: atlas.ControlPosition
    zoomDelta: number
    controlStyle: atlas.ControlStyle
  }
>
/**
 * Zoom control adds the ability to zoom in and out of the `atlas.Map`.
 */
export default _default
