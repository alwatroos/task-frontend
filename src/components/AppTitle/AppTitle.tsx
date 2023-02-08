/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import cx from "classnames";
import React from "react";
import "./AppTitle.scss";

export const AppTitle = ({
  className,
  children,
  ...labelProps
}: React.HTMLAttributes<HTMLLabelElement>) => {
  return (
    <label {...labelProps} className={cx("AppTitle", className)}>
      {children}
    </label>
  );
};
