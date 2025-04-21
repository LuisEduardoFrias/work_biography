
export function arrayToObject<T>(arr: T[], key: string): { [key: string]: T } {
  return arr.reduce((_object, item) => {
    _object[item[key]] = item.value;
    return _object;
  }, {});
}