import atlas from 'azure-maps-control'
/** Options for the GeolocationControl. */
interface GeolocationControlOptions {
  /**
   * The style of the control. Can be; light, dark, auto, or any CSS3 color. When set to auto, the style will change based on the map style.
   * Default `light'.
   * @default light
   */
  style?: atlas.ControlStyle | string
  /** A Geolocation API PositionOptions object. Default: {enableHighAccuracy:false,timeout:6000} */
  positionOptions?: PositionOptions
  /** Shows the users location on the map using a marker. Default: true */
  showUserLocation?: boolean
  /** If true the Geolocation Control becomes a toggle button and when active the map will receive updates to the user's location as it changes. Default: false */
  trackUserLocation?: boolean
  /** The color of the user location marker. Default: DodgerBlue */
  markerColor?: string
}
/** A control that uses the browser's geolocation API to locate the user on the map. */
export declare class GeolocationControl implements atlas.Control {
  /****************************
   * Private Properties
   ***************************/
  private _atlasLib
  private _container
  private _button
  private _options
  private _darkColor
  private _map
  private _resource
  private _gpsMarker
  private _watchId
  private _isActive
  private _updateMapCamera
  private _lastKnownPosition
  private _gpsArrowIcon
  private _gpsDotIcon
  private _iconTemplate
  private _gpsBtnCss
  /****************************
   * Constructor
   ***************************/
  /**
   * A control that uses the browser's geolocation API to locate the user on the map.
   * @param options Options for defining how the control is rendered and functions.
   */
  constructor(lib: typeof atlas, options?: GeolocationControlOptions)
  /****************************
   * Public Methods
   ***************************/
  /** Gets the last known position from the geolocation control. */
  getLastKnownPosition(): GeolocationPosition
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
  /** Gets the options of the geolocation control. */
  getOptions(): GeolocationControlOptions
  /**
   * Sets the options of the geolocation control.
   * @param options The options.
   */
  setOptions(options: GeolocationControlOptions): void
  /**
   * Toggles the state of the GPS button.
   * @param isActive The state to toggle to. If not specified, will toggle to opposite of current state.
   */
  toggle(isActive: boolean): void
  /** Checks to see if the geolocation API is supported in the browser. */
  static isSupported(): Promise<boolean>
  /****************************
   * Private Methods
   ***************************/
  /** Toggles the state of the control. */
  private _toggleBtn
  /**
   * An event handler for when the map style changes. Used when control style is set to auto.
   */
  private _mapStyleChanged
  /**
   * An event handler for when the map starts to move.
   * When this happens, we don't want the map camera to automatically move if tracking.
   */
  private _mapMoveStarted
  /**
   * Retrieves the background color for the button based on the map style. This is used when style is set to auto.
   */
  private _getColorFromMapStyle
  /** Removes the geolocation watcher used for tracking. */
  private _stopTracking
  /**
   * Updates the state of the button.
   */
  private _updateState
  /**
   * Callback for when an error occurs when getting the users location.
   * @param position The GPS position information.
   */
  private _onGpsSuccess
  /**
   * Callback for when an error occurs when getting the users location.
   * @param error The error that occured.
   */
  private _onGpsError
  /** Generates the mark icon HTML */
  private _getMarkerIcon
  /**
   * Returns the set of translation text resources needed for the control for a given language.
   * @param lang The language code to retrieve the text resources for.
   * @returns An object containing text resources in the specified language.
   */
  private static _getTranslations
}
export {}
