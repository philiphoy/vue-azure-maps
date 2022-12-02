import { VueAzureMaps } from './vue-azure-plugin-options'

declare module 'vue' {
  interface ComponentCustomProperties {
    $_azureMaps: VueAzureMaps
  }
}
