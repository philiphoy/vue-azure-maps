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
     * The angle that the map will rotate with each click of the control.
     * Default `15`.
     * @default 15
     */
    rotationDegreesDelta: {
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
       * The angle that the map will rotate with each click of the control.
       * Default `15`.
       * @default 15
       */
      rotationDegreesDelta: {
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
    rotationDegreesDelta: number
    controlStyle: atlas.ControlStyle
  }
>
/**
 * Compass control adds the ability to change the rotation of the `atlas.Map`.
 */
export default _default
