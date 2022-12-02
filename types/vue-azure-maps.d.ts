import { VueAzureMapsPluginOptions } from 'types/vue-azure-plugin-options'
import * as atlas from 'azure-maps-control'
export default class VueAzureMaps {
  options: VueAzureMapsPluginOptions
  constructor(options?: VueAzureMapsPluginOptions)
  readonly key: string
  readonly atlas: typeof atlas
  setSubscriptionKey(key: string): void
  static version: any
}
