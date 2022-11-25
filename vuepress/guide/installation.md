# Installation

## NPM

```sh
npm install vue-azure-maps
```

## Yarn

```sh
yarn add vue-azure-maps
```

## Setup

:::tip

Get an Azure Maps key at <https://azure.com/maps>

:::

When using with a module system, you must explicitly install `vue-azure-maps` via `app.use()`:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import './setup'
import VueAzureMapsPlugin from '@/plugin'

const app = createApp(App)
app.use(VueAzureMapsPlugin, {
  // Get an Azure Maps key at https://azure.com/maps
  key: '<Your Azure Maps key>',
})
app.mount('#app')
```

You don't need to do this when using global script tags.
