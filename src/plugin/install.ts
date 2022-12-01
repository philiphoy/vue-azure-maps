import { VueAzureMapsPluginOptions } from 'types'
import { App, Plugin } from 'vue'
import VueAzureMaps from './vue-azure-maps'

export const VueAzureMapsPlugin: Plugin = {
  install(app: App<any>, options: VueAzureMapsPluginOptions) {
    if (app.config.globalProperties.$_azureMaps !== undefined) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          '[vue-azure-maps] already installed. Vue.use(VueAzureMaps) should be called only once.'
        )
      }
      return
    }
    app.config.globalProperties.$_azureMaps = new VueAzureMaps(options)
  },
}
