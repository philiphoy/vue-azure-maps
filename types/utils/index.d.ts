/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export declare function isObject(obj: unknown): obj is Record<string, any>
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
export declare function looseEqual(a: any, b: any): boolean
export declare function capitalize(str: string): string
