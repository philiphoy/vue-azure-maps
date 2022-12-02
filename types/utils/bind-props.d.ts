import * as atlas from 'azure-maps-control'
import { WatchOptions } from 'vue'
export declare function bindProp(
  vm: Record<string, any>,
  map: atlas.Map,
  {
    propName,
    targetPropName,
    target,
    targetEventName,
    targetMethodName,
    getter,
    setter,
    isSetAsObject,
    watcher,
    watchOptions,
    identity,
    applier,
    retriever,
    emittedEventName,
  }: PropBindingConfig
): () => void
export declare function bindProps({
  vm,
  map,
  props,
}: BindPropsConfig): () => void
export interface BindPropsConfig {
  vm: Record<string, any>
  map: atlas.Map
  props: PropBindingConfig[]
}
export interface PropBindingConfig {
  propName: string
  targetPropName?: string
  target?: any
  targetEventName?: string
  targetMethodName?: string
  getter?: () => any
  setter?: (value: any) => void
  isSetAsObject?: boolean
  watcher?: (value: any) => any
  watchOptions?: WatchOptions
  applier?: (newVal: any, oldVal: any, set: (newVal: any) => void) => void
  identity?: (newVal: any, oldVal: any) => boolean
  retriever?: (value: any) => any
  emittedEventName?: string
}
export default bindProps
