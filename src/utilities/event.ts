/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
export const sendEvent = (eventName: string, data?: any) => {
  window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
};

export const onEvent = (eventName: string, f: (ev: Event) => void) => {
  window.addEventListener(eventName, f);
};
