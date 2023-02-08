/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
export interface IUIDefinition {
  screens: IScreenDefinition[];
}

export interface IScreenDefinition {
  name: string;
  authenticated?: boolean;
  visible?: boolean;
  icon?: string;
  dbCollection?: string;
  content?: IComponentDefinition[];
}

export interface IComponentDefinition {
  referenceName: string;
  content?: IComponentDefinition[];
}
