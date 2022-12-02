import atlas from 'azure-maps-control'
/**
 * An object that represents the full screen control text resources.
 */
export interface FullscreenTranslation {
  /** View Full Screen */
  view: string
  /** Exit Full Screen */
  exit: string
  /** Full Screen Control */
  title: string
}
/**
 * Options that define how the full screen control renders and functions.
 */
export interface FullscreenControlOptions extends atlas.Options {
  /**
   * The style of the control. Can be; light, dark, auto, or any CSS3 color. When set to auto, the style will change based on the map style.
   * Default `light'.
   * @default light
   */
  style: atlas.ControlStyle | string
  /**
   * Specifies if the control should be hidden if fullscreen is not supported by the browser.
   * @default false
   */
  hideIfUnsupported: boolean
}
/**
 * A control that toggles the map from its defined size to a fullscreen size.
 */
export declare class FullscreenControl implements atlas.Control {
  /****************************
   * Private Properties
   ***************************/
  private _container
  private _button
  private _options
  private _darkColor
  private _map
  private _resource
  private _fullscreenCss
  /****************************
   * Constructor
   ***************************/
  /**
   * A control that toggles the map from its defined size to a fullscreen size.
   * @param options Options for defining how the control is rendered and functions.
   */
  constructor(options?: FullscreenControlOptions)
  /****************************
   * Public Methods
   ***************************/
  /**
   * Action to perform when the control is added to the map.
   * @param map The map the control was added to.
   * @param options The control options used when adding the control to the map.
   * @returns The HTML Element that represents the control.
   */
  onAdd(map: atlas.Map, options?: atlas.ControlOptions): HTMLElement
  /**
   * Action to perform when control is removed from the map.
   */
  onRemove(): void
  /**
   * Determines if the map is in full screen mode or not.
   */
  isFullscreen(): boolean
  /**
   * Determines if fullscreen can be requested of not.
   */
  static isSupported(): boolean
  /****************************
   * Private Methods
   ***************************/
  /**
   * An event handler for when the map style changes. Used when control style is set to auto.
   */
  private _mapStyleChanged
  /**
   * Retrieves the background color for the button based on the map style. This is used when style is set to auto.
   */
  private _getColorFromMapStyle
  /**
   * Toggles the fullscreen state of the button.
   */
  private _updateBtn
  /**
   * Returns the set of translation text resources needed for the fullscreen control for a given language.
   * @param lang The language code to retrieve the text resources for.
   * @returns An object containing text resources in the specified language.
   */
  private static _getTranslations
}
