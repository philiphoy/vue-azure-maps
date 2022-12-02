import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    control: {
      type: PropType<atlas.Control>
      default: null
      required: true
    }
    options: {
      type: PropType<atlas.ControlOptions>
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
      control: {
        type: PropType<atlas.Control>
        default: null
        required: true
      }
      options: {
        type: PropType<atlas.ControlOptions>
        default: null
      }
    }>
  >,
  {
    options: atlas.ControlOptions
    control: atlas.Control
  }
>
/**
 * Adds a control to the `atlas.Map`.
 */
export default _default
