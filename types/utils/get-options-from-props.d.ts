declare function getOptionsFromProps<T>({
  props,
  excludedPropKeys,
  reservedAttributes,
}: OptionsFromPropsConfig): T
export interface OptionsFromPropsConfig {
  props: Record<string, any>
  excludedPropKeys?: string[]
  reservedAttributes?: Record<string, string>
}
export default getOptionsFromProps
