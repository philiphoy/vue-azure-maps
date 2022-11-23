import VueAzureMaps from './plugin/vue-azure-maps'

declare module 'vue' {
  // import { CompatVue } from '@vue/runtime-dom'
  ////  const Vue: CompatVue
  //  export default Vue
  //  export * from '@vue/runtime-dom'
  ///  const { configureCompat } = Vue
  //  export { configureCompat }

  interface ComponentCustomProperties {
    $_azureMaps: VueAzureMaps
  }
}
