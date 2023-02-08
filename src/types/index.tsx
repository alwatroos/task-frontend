/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
export type TNavigationTabDef = {
  label: string;
  path: string;
};

export type TRouteType = "private" | "public" | "both";
export type TRouteDef = {
  path: string;
  label: string;
  type?: TRouteType;
  children?: JSX.Element;
};

export type TResolutionMode = "low" | "medium" | "high";
