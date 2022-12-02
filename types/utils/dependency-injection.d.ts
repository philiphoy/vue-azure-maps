import * as atlas from 'azure-maps-control'
export declare function getInjection<T>({
  vm,
  injectionName,
}: GetInjectionConfig): T | undefined
export declare function getMapInjection(
  vm: Record<string, any>
): (() => atlas.Map) | undefined
export declare function getDataSourceInjection(
  vm: Record<string, any>
): (() => atlas.source.DataSource) | undefined
export interface GetInjectionConfig {
  vm: Record<string, any>
  injectionName: string
}
