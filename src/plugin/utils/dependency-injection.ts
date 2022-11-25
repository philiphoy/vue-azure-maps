import { atlas } from 'types'

export function getInjection<T>({
  vm,
  injectionName,
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
  })
}

export function getDataSourceInjection(
  vm: Record<string, any>
): (() => atlas.source.DataSource) | undefined {
  return getInjection<() => atlas.source.DataSource>({
    vm: vm,
    injectionName: 'getDataSource',
  })
}

export interface GetInjectionConfig {
  vm: Record<string, any>
  injectionName: string
}
