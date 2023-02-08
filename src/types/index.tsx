/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
export type TColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "danger"
  | "medium"
  | "light"
  | "transparent";

export type TIconType =
  | "Home"
  | "Login"
  | "AppRegistration"
  | "Person"
  | "Google"
  | "Star"
  | "Add";

export type TNavigationTabDef = {
  label: string;
  path: string;
};

// export type TNavigationTab = TNavigationTabDef & { icon?: string };
export type TRouteType = "private" | "public" | "both";
export type TRouteDef = {
  path: string;
  label: string;
  icon?: TIconType;
  type?: TRouteType;
  children?: JSX.Element;
};

export type TResolutionMode = "low" | "medium" | "high";
