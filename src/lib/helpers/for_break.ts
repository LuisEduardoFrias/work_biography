/////
export function forBreak<T>(
  array: T[],
  condition: (iValue: T, index: number) => boolean,
  execution: (iValue: T, index: number) => void
) {
  for (let i = 0; i < array.length; i++) {
    if (condition(array[i], i)) {
      execution(array[i], i);
      break;
    }
  }
}