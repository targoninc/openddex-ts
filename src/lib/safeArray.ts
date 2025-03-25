export function safeArray<T>(maybeArray: T[] | T): T[] {
    return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
}