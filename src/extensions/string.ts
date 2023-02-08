/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface StringConstructor {
    isBlank(s?: string | null): boolean;
  }
}

String.isBlank = (s?: string | null) => {
  return (
    s === null ||
    s === undefined ||
    typeof s === "undefined" ||
    s.trim().length < 1
  );
};

export {};
