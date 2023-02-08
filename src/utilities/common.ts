/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */

export const isBlank = (obj: any) => obj === null || obj === undefined;

export const isNotBlank = (obj: any) => !isBlank(obj);

export async function withDelay<T>(func: () => T, delay: number) {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(func());
    }, delay);
  });
}

export const formatDate = (date: Date) => date.toJSON().slice(0, 10);
