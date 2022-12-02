import * as atlas from 'azure-maps-control'

export declare class VueAzureMaps {
  constructor(lib: typeof atlas, options?: VueAzureMapsPluginOptions)

  public readonly key: string
  public readonly atlas: typeof atlas

  public setSubscriptionKey: (key: string) => void
}

export interface VueAzureMapsPluginOptions {
  key: string
}
