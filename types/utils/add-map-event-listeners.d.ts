import * as atlas from 'azure-maps-control'
declare function addMapEventListeners({
  map,
  listeners,
  target,
  reservedEventTypes,
}: MapEventListenersConfig): () => void
export interface MapEventListenersConfig {
  map: atlas.Map
  listeners: Record<string, unknown>
  target?: any
  reservedEventTypes?: string[]
}
export default addMapEventListeners
