import * as atlas from 'azure-maps-control'

function addMapEventListeners({
  map,
  listeners,
  target,
  reservedEventTypes = [],
}: MapEventListenersConfig): () => void {
  const mapListeners: (() => void)[] = []
  const listenersEntries = Object.entries(listeners)

  for (const [eventType, callback] of listenersEntries) {
    // Omit component's emitted events.
    // `.sync` modifier pattern for 'two-way binding': `update:`.
    if (
      reservedEventTypes.includes(eventType) ||
      eventType.startsWith('onUpdate:')
    ) {
      continue
    }

    if (typeof callback !== 'function') {
      continue
    }

    //remove onEvent prefix
    let trimmedEventType = eventType.toLowerCase()
    if (trimmedEventType.startsWith('on')) {
      trimmedEventType = trimmedEventType.substring(2)
    }

    if (target) {
      map.events.add(trimmedEventType as any, target, callback as any)
      mapListeners.push(() =>
        map.events.remove(trimmedEventType as any, target, callback as any)
      )
    } else {
      map.events.add(trimmedEventType as any, callback as any)
      mapListeners.push(() =>
        map.events.remove(trimmedEventType as any, callback as any)
      )
    }
  }

  return () => mapListeners.forEach((removeListener) => removeListener())
}

export interface MapEventListenersConfig {
  map: atlas.Map
  listeners: Record<string, unknown>
  target?: any
  reservedEventTypes?: string[]
}

export default addMapEventListeners
