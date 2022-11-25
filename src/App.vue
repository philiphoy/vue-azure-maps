<template>
  <div id="app">
    <AzureMapExample />
    <!-- <AzureMapSpiderClusterManagerExample/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AzureMapExample from './components/vue-azure-maps/AzureMapSpiderClusterManagerExample.vue'
// import AzureMapSpiderClusterManagerExample from './components/vue-azure-maps/AzureMapSpiderClusterManagerExample.vue'

export default defineComponent({
  name: 'App',

  components: {
    AzureMapExample,
    // AzureMapSpiderClusterManagerExample,
  },
})
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  height: 100%;
}

p {
  margin: 0;
}
</style>
