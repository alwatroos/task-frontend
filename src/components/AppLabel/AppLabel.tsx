/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import cx from "classnames";
import React from "react";
import "./AppLabel.scss";

export const AppLabel = ({
  className,
  children,
  ...labelProps
}: React.HTMLAttributes<HTMLLabelElement>) => {
  return (
    <label {...labelProps} className={cx("AppLabel", className)}>
      {children}
    </label>
  );
};
