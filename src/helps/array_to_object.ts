
export function arrayToObject<T>(arr: T[], key: string): { [key: string]: T } {
  return arr.reduce((_object, item) => {
    const prop = Reflect.get(item as object, key);
    const value = Reflect.get(item as object, 'value');
    Reflect.set(_object, prop, value);
    return _object;
  }, {});
}