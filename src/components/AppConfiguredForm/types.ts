/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Rule } from "antd/es/form";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { HTMLInputTypeAttribute } from "react";

interface IAppFormFieldDef {
  name: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  multiline?: boolean;
  validator?: (val: any) => boolean;
  customElement?: JSX.Element;
  rules?: Rule[];
}

export interface IAppFormConfiguration<T> {
  fields: IAppFormFieldDef[];
  formName: string;
  onSubmit: (event: T) => void;
  onSubmitFailed?: (errorInfo: ValidateErrorEntity<T>) => void;
  buttonText: string;
  buttonId?: string;
  title?: string;
}

export interface IAppFormValues {
  [key: string]: any;
}

export interface IAppConfiguredFormProps<T> {
  config: IAppFormConfiguration<T>;
  title?: string;
  fieldsDirection?: "row" | "column";
}
