<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script lang="ts">
import { getMapInjection } from '@/plugin/utils/dependency-injection'
import getOptionsFromProps from '@/plugin/utils/get-options-from-props'
import bindProps from '@/plugin/utils/bind-props'
import addMapEventListeners from '@/plugin/utils/add-map-event-listeners'
import { atlas } from 'types'
import { defineComponent, PropType } from 'vue'

enum AzureMapPopupEvent {
  Created = 'created',
  Update = 'update',
  Open = 'open',
  Close = 'close',
}

/**
 * An information window anchored at a specified position on a map.
 */
export default defineComponent({
  name: 'AzureMapPopup',
  emits: {
    created(e: atlas.Popup) { return e },
    update(e: boolean) { return e },
    open(e: atlas.TargetedEvent) { return e },
    close(e: atlas.TargetedEvent) { return e },
  },
  /**
   * Inject the `getMap` function to get the `atlas.Map` instance
   */
  inject: ['getMap'],

  model: {
    prop: 'open',
    event: AzureMapPopupEvent.Update,
  },

  props: {
    /**
     * Specifies the tag used for the popup content
     * default `div`
     * @default "div"
     */
    tag: {
      type: String,
      default: 'div',
    },

    /**
     * Opens or closes the popup,
     * compatible with `v-model` directive
     */
    open: {
      type: Boolean,
      default: false,
    },

    /**
     * Specifies if the close button should be displayed in the popup or not.
     * default `true`
     * @default true
     */
    closeButton: {
      type: Boolean as PropType<boolean | null>,
      default: null,
    },

    /**
     * Specifies the fill color of the popup.
     * default `"#FFFFFF"`
     * @default "#FFFFFF"
     */
    fillColor: {
      type: String as PropType<string | null>,
      default: null,
    },

    /**
     * An array of [pixelsRight, pixelsDown] for how many pixels to the right and down the anchor of the popup should be
     * offset. Negative numbers can be used to offset the popup left and up.
     * default `[0, 0]`
     * @default [0, 0]
     */
    pixelOffset: {
      type: Array as PropType<atlas.Pixel | null>,
      default: null,
    },

    /**
     * The position on the map where the popup should be anchored.
     * default `[0, 0]`
     * @default [0, 0]
     */
    position: {
      type: Array as PropType<atlas.data.Position | null>,
      default: null,
    },

    /**
     * Specifies if the pointer should be displayed in the popup or not.
     * default `true`
     * @default true
     */
    showPointer: {
      type: Boolean as PropType<boolean | null>,
      default: null,
    },
  },
  data() {
    return {
      popup: null as atlas.Popup | null,
      unbindProps: function () { },
      removeEventListeners: function () { },
    }
  },
  created() {
    // Look for the injected function that retreives the map instance
    const getMap = getMapInjection(this)

    if (!getMap) return

    // Retrieve the map instance from the injected function
    const map = getMap()

    // If the content option is passed as an attribute,
    // warn the user that they should use slots instead of a raw html string
    if (this.$attrs.content && process.env.NODE_ENV !== 'production') {
      return console.warn(
        `Invalid <AzureMapPopup> content prop.\nThe content option is not supported, please use the default slot instead to prevent XSS attacks.`
      )
    }

    // Create a popup with selected component props as options
    this.$data.popup = new this.$_azureMaps.atlas.Popup(
      getOptionsFromProps({
        props: this.$props,
        excludedPropKeys: ['tag', 'open'],
      })
    )

    this.$emit(AzureMapPopupEvent.Created, this.$data.popup)

    // Watch the open prop to show and hide the popup
    this.$watch(
      'open',
      (newVal: boolean) => {
        if (this.$data.popup === null) return
        if (newVal) {
          this.$data.popup.open(map)
        } else if (this.$data.popup.isOpen()) {
          this.$data.popup.close()
        }
      },
      {
        immediate: true,
      }
    )

    // Bind component props
    this.$data.unbindProps = bindProps({
      vm: this,
      map,
      props: [
        {
          propName: 'closeButton',
          target: this.$data.popup,
          targetMethodName: 'options',
        },
        {
          propName: 'fillColor',
          target: this.$data.popup,
          targetMethodName: 'options',
        },
        {
          propName: 'pixelOffset',
          target: this.$data.popup,
          targetMethodName: 'options',
        },
        {
          propName: 'position',
          target: this.$data.popup,
          targetMethodName: 'options',
        },
        {
          propName: 'showPointer',
          target: this.$data.popup,
          targetMethodName: 'options',
        },
      ],
    })

    // Add the popup event listeners
    this.$data.removeEventListeners = addMapEventListeners({
      map,
      listeners: {
        // Emit update event when popup opens
        [AzureMapPopupEvent.Open]: (targetedEvent: atlas.TargetedEvent) => {
          this.$emit(AzureMapPopupEvent.Update, true)
          this.$emit(AzureMapPopupEvent.Open, targetedEvent)
        },
        // Emit update event when popup closes
        [AzureMapPopupEvent.Close]: (targetedEvent: atlas.TargetedEvent) => {
          this.$emit(AzureMapPopupEvent.Update, false)
          this.$emit(AzureMapPopupEvent.Close, targetedEvent)
        },
      },
      target: this.$data.popup,
    })
  },
  unmounted() {
    if (this.$data.popup === null) return
    this.$data.popup.remove()

    // Remove the popup events attached to the map
    this.$data.removeEventListeners()
    // Unbind component props
    this.$data.unbindProps()
  },
  mounted() {
    if (this.$data.popup === null) return
    this.$data.popup.setOptions({
      content: this.$el as HTMLElement,
    })
  },
})
</script>
