/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { notification } from "antd";
import { ArgsProps } from "antd/es/notification/interface";
import { translate } from "translations";

const defaultToastConfig: ArgsProps = {
  message: "",
  placement: "topRight",
  style: { zIndex: 1000000, top: "3vh" },
};

type TToastType = "info" | "error" | "warn" | "success";

const prepareConfig = (msg: string | ArgsProps, type?: TToastType) => {
  let config: ArgsProps;
  if (typeof msg === "string") {
    config = { ...defaultToastConfig, description: translate(msg) };
  } else {
    const { description, message, ...restConfig } = msg;
    config = {
      ...defaultToastConfig,
      ...restConfig,
      description:
        typeof description === "string" ? translate(description) : description,
      message: typeof message === "string" ? translate(message) : message,
    };
  }
  if (
    type &&
    typeof config.message === "string" &&
    String.isBlank(config.message)
  ) {
    config.message = translate(`Common.${type}`);
  }
  config.duration = 2;
  return config;
};

export const showInfo = (msg: string | ArgsProps) => {
  notification.destroy();
  notification.info(prepareConfig(msg, "info"));
};

export const showError = (msg: string | ArgsProps) => {
  notification.destroy();
  notification.error(prepareConfig(msg, "error"));
};

export const showSuccess = (msg: string | ArgsProps) => {
  notification.destroy();
  notification.success(prepareConfig(msg, "success"));
};

export const showWarn = (msg: string | ArgsProps) => {
  notification.destroy();
  notification.warning(prepareConfig(msg, "warn"));
};
