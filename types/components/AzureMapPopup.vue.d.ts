import * as atlas from 'azure-maps-control'
import { PropType } from 'vue'
declare enum AzureMapPopupEvent {
  Created = 'created',
  Update = 'update:modelValue',
  Open = 'open',
  Close = 'close',
}
declare const _default: import('vue').DefineComponent<
  {
    /**
     * Specifies the tag used for the popup content
     * default `div`
     * @default "div"
     */
    tag: {
      type: StringConstructor
      default: string
    }
    /**
     * Opens or closes the popup,
     * compatible with `v-model` directive
     */
    modelValue: {
      type: BooleanConstructor
      default: boolean
    }
    /**
     * Specifies if the close button should be displayed in the popup or not.
     * default `true`
     * @default true
     */
    closeButton: {
      type: PropType<boolean | null>
      default: null
    }
    /**
     * Specifies the fill color of the popup.
     * default `"#FFFFFF"`
     * @default "#FFFFFF"
     */
    fillColor: {
      type: PropType<string | null>
      default: null
    }
    /**
     * An array of [pixelsRight, pixelsDown] for how many pixels to the right and down the anchor of the popup should be
     * offset. Negative numbers can be used to offset the popup left and up.
     * default `[0, 0]`
     * @default [0, 0]
     */
    pixelOffset: {
      type: PropType<atlas.Pixel | null>
      default: null
    }
    /**
     * The position on the map where the popup should be anchored.
     * default `[0, 0]`
     * @default [0, 0]
     */
    position: {
      type: PropType<atlas.data.Position | null>
      default: null
    }
    /**
     * Specifies if the pointer should be displayed in the popup or not.
     * default `true`
     * @default true
     */
    showPointer: {
      type: PropType<boolean | null>
      default: null
    }
  },
  unknown,
  {
    popup: atlas.Popup | null
    unbindProps: () => void
    removeEventListeners: () => void
  },
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AzureMapPopupEvent[],
  AzureMapPopupEvent,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      /**
       * Specifies the tag used for the popup content
       * default `div`
       * @default "div"
       */
      tag: {
        type: StringConstructor
        default: string
      }
      /**
       * Opens or closes the popup,
       * compatible with `v-model` directive
       */
      modelValue: {
        type: BooleanConstructor
        default: boolean
      }
      /**
       * Specifies if the close button should be displayed in the popup or not.
       * default `true`
       * @default true
       */
      closeButton: {
        type: PropType<boolean | null>
        default: null
      }
      /**
       * Specifies the fill color of the popup.
       * default `"#FFFFFF"`
       * @default "#FFFFFF"
       */
      fillColor: {
        type: PropType<string | null>
        default: null
      }
      /**
       * An array of [pixelsRight, pixelsDown] for how many pixels to the right and down the anchor of the popup should be
       * offset. Negative numbers can be used to offset the popup left and up.
       * default `[0, 0]`
       * @default [0, 0]
       */
      pixelOffset: {
        type: PropType<atlas.Pixel | null>
        default: null
      }
      /**
       * The position on the map where the popup should be anchored.
       * default `[0, 0]`
       * @default [0, 0]
       */
      position: {
        type: PropType<atlas.data.Position | null>
        default: null
      }
      /**
       * Specifies if the pointer should be displayed in the popup or not.
       * default `true`
       * @default true
       */
      showPointer: {
        type: PropType<boolean | null>
        default: null
      }
    }>
  > & {
    onCreated?: ((...args: any[]) => any) | undefined
    onOpen?: ((...args: any[]) => any) | undefined
    onClose?: ((...args: any[]) => any) | undefined
    'onUpdate:modelValue'?: ((...args: any[]) => any) | undefined
  },
  {
    position: atlas.data.Position | null
    fillColor: string | null
    closeButton: boolean | null
    pixelOffset: atlas.Pixel | null
    showPointer: boolean | null
    tag: string
    modelValue: boolean
  }
>
/**
 * An information window anchored at a specified position on a map.
 */
export default _default
