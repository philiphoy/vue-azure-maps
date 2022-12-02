import { createApp } from 'vue'
import App from './App.vue'
import VueAzureMapsPlugin from '@/plugin'

const app = createApp(App)
app.use(VueAzureMapsPlugin, {
  // Get an Azure Maps key at https://azure.com/maps
  key: 'M25GAPje7RDBbTJjFQWY1ts6OoBnDE8BIW4-0b-5dCo',
})
app.mount('#app')
