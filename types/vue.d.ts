/**
 * Augment the typings of Vue.js
 */

import { VueAzureMaps } from './vue-azure-plugin-options'

declare module 'vue/types/vue' {
  interface Vue {
    $_azureMaps: VueAzureMaps
  }
}
