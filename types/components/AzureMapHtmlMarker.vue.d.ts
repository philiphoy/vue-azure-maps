import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    /**
     * Indicates the marker's location relative to its position on the map.
     * Optional values: `"center"`, `"top"`, `"bottom"`, `"left"`, `"right"`,
     * `"top-left"`, `"top-right"`, `"bottom-left"`, `"bottom-right"`.
     * Default `"center"`
     * @default "center"
     */
    anchor: {
      type: PropType<string | null>
      default: null
    }
    /**
     * A color value that replaces any {color} placeholder property that has been included in a string htmlContent.
     * default `"#1A73AA"`
     * @default "#1A73AA"
     */
    color: {
      type: PropType<string | null>
      default: null
    }
    /**
     * Indicates if the user can drag the position of the marker using the mouse or touch controls.
     * default `false`
     * @default false
     */
    draggable: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * The HTML content of the marker. Can be an HTMLElement or HTML string.
     * Add {text} and {color} to HTML strings as placeholders to make it easy to update
     * these values in your marker by using the setOptions function of the HtmlMarker class.
     * This allows you to create a single HTML marker string that can be used as a template for multiple markers.
     */
    htmlContent: {
      type: PropType<string | HTMLElement | null>
      default: null
    }
    /**
     * An offset in pixels to move the popup relative to the markers center.
     * Negatives indicate left and up.
     * default `[0, -18]`
     * @default [0, -18]
     */
    pixelOffset: {
      type: PropType<atlas.Pixel | null>
      default: null
    }
    /**
     * The position of the marker.
     * default `[0, 0]`
     * @default [0, 0]
     */
    position: {
      type: PropType<atlas.data.Position | null>
      default: null
    }
    /**
     * A popup that is attached to the marker.
     */
    popup: {
      type: PropType<atlas.Popup | null>
      default: null
    }
    /**
     * A string of text that replaces any {text} placeholder property that has been included in a string htmlContent.
     */
    text: {
      type: PropType<string | null>
      default: null
    }
    /**
     * Specifies if the marker is visible or not.
     * default `true`
     * @default true
     */
    visible: {
      type: PropType<boolean | null>
      default: null
    }
  },
  unknown,
  {
    marker: atlas.HtmlMarker | null
  },
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
       * Indicates the marker's location relative to its position on the map.
       * Optional values: `"center"`, `"top"`, `"bottom"`, `"left"`, `"right"`,
       * `"top-left"`, `"top-right"`, `"bottom-left"`, `"bottom-right"`.
       * Default `"center"`
       * @default "center"
       */
      anchor: {
        type: PropType<string | null>
        default: null
      }
      /**
       * A color value that replaces any {color} placeholder property that has been included in a string htmlContent.
       * default `"#1A73AA"`
       * @default "#1A73AA"
       */
      color: {
        type: PropType<string | null>
        default: null
      }
      /**
       * Indicates if the user can drag the position of the marker using the mouse or touch controls.
       * default `false`
       * @default false
       */
      draggable: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * The HTML content of the marker. Can be an HTMLElement or HTML string.
       * Add {text} and {color} to HTML strings as placeholders to make it easy to update
       * these values in your marker by using the setOptions function of the HtmlMarker class.
       * This allows you to create a single HTML marker string that can be used as a template for multiple markers.
       */
      htmlContent: {
        type: PropType<string | HTMLElement | null>
        default: null
      }
      /**
       * An offset in pixels to move the popup relative to the markers center.
       * Negatives indicate left and up.
       * default `[0, -18]`
       * @default [0, -18]
       */
      pixelOffset: {
        type: PropType<atlas.Pixel | null>
        default: null
      }
      /**
       * The position of the marker.
       * default `[0, 0]`
       * @default [0, 0]
       */
      position: {
        type: PropType<atlas.data.Position | null>
        default: null
      }
      /**
       * A popup that is attached to the marker.
       */
      popup: {
        type: PropType<atlas.Popup | null>
        default: null
      }
      /**
       * A string of text that replaces any {text} placeholder property that has been included in a string htmlContent.
       */
      text: {
        type: PropType<string | null>
        default: null
      }
      /**
       * Specifies if the marker is visible or not.
       * default `true`
       * @default true
       */
      visible: {
        type: PropType<boolean | null>
        default: null
      }
    }>
  >,
  {
    anchor: string | null
    color: string | null
    position: atlas.data.Position | null
    visible: boolean | null
    text: string | null
    draggable: boolean | null
    pixelOffset: atlas.Pixel | null
    htmlContent: string | HTMLElement | null
    popup: atlas.Popup | null
  }
>
/**
 * Adds a custom HTML such as an image file to the map as an HTML Marker.
 */
export default _default
