/**
 * Augment the typings of Vue.js
 */

import { VueAzureMaps } from './vue-azure-maps'

declare module 'vue/types/vue' {
  interface Vue {
    $_azureMaps: VueAzureMaps
  }
}
