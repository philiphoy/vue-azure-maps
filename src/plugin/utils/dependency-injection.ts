import { atlas } from 'types'

export function getInjection<T>({
  vm,
  injectionName,
  injectedPropertyLabel,
  sourceComponentName,
}: GetInjectionConfig): T | undefined {
  const injection = vm[injectionName]
  return injection as T
}

export function getMapInjection(
  vm: Record<string, any>
): (() => atlas.Map) | undefined {
  return getInjection<() => atlas.Map>({
    vm: vm,
    injectionName: 'getMap',
    injectedPropertyLabel: 'map instance',
    sourceComponentName: 'AzureMap',
  })
}

export function getDataSourceInjection(
  vm: Record<string, any>
): (() => atlas.source.DataSource) | undefined {
  return getInjection<() => atlas.source.DataSource>({
    vm: vm,
    injectionName: 'getDataSource',
    injectedPropertyLabel: 'data source',
    sourceComponentName: 'AzureMapDataSource',
  })
}

export interface GetInjectionConfig {
  vm: Record<string, any>
  injectionName: string
  injectedPropertyLabel: string
  sourceComponentName: string
}
