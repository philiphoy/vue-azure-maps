import { ComponentPublicInstance } from 'vue'
/**
 * @name findParentComponentByName
 * @summary Find the Vue instance of the first parent component that matches the provided component name.
 *
 * @description The `findParentComponentByName()` method returns the Vue instance of the first parent component
 * that has a `name` component option that matches the provided component name.
 *
 * @param {Vue} vm - The children component Vue instance that is looking for the parent component Vue instance
 * @param {string} componentName - The parent component name
 * @returns {Vue|undefined} The parent component instance that matches the provided component name,
 * otherwise, undefined is returned
 *
 * @example
 * // Find `<App/>` component from `<Child/>`:
 * <App>
 *   <GrandParent>
 *     <Parent>
 *       <Child/>
 *     </Parent>
 *   </GrandParent>
 * </App>
 *
 * // Descendant component Vue instance
 * new Vue({
 *   name: 'Child',
 *
 *   created() {
 *     const app = findParentComponentByName(this, 'App')
 *     // => VueComponent {_uid: 1, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: VueComponent, …}
 *  },
 * })
 */
export declare function findParentComponentByName(
  vm: ComponentPublicInstance,
  componentName: string
): ComponentPublicInstance | undefined
