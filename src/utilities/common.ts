/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */

export function isBlank<T>(obj: T) {
  return obj === null || obj === undefined;
}

export function isNotBlank<T>(obj: T) {
  return !isBlank(obj);
}

export async function withDelay<T>(func: () => T, delay: number) {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(func());
    }, delay);
  });
}

export const formatDate = (date: Date) => date.toJSON().slice(0, 10);
