import { PropType } from 'vue'
declare enum AzureMapImageSpriteIconEvent {
  Error = 'error',
  Added = 'added',
  Removed = 'removed',
}
declare const _default: import('vue').DefineComponent<
  {
    /**
     * The image's id.
     */
    id: {
      type: StringConstructor
      default: null
      required: true
    }
    /**
     * The image to add to the map's sprite. Can be a data URI, inline SVG, or image URL.
     */
    icon: {
      type: PropType<string | HTMLImageElement | ImageData>
      default: null
      required: true
    }
  },
  unknown,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AzureMapImageSpriteIconEvent[],
  AzureMapImageSpriteIconEvent,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      /**
       * The image's id.
       */
      id: {
        type: StringConstructor
        default: null
        required: true
      }
      /**
       * The image to add to the map's sprite. Can be a data URI, inline SVG, or image URL.
       */
      icon: {
        type: PropType<string | HTMLImageElement | ImageData>
        default: null
        required: true
      }
    }>
  > & {
    onError?: ((...args: any[]) => any) | undefined
    onAdded?: ((...args: any[]) => any) | undefined
    onRemoved?: ((...args: any[]) => any) | undefined
  },
  {
    id: string
    icon: string | HTMLImageElement | ImageData
  }
>
/**
 * Adds an icon image to the map's image sprite for use with symbols and patterns.
 */
export default _default
