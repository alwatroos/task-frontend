/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import cx from "classnames";
import React, { ForwardedRef } from "react";
import "./AppScreen.scss";

interface IAppScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  showBackButton?: boolean;
}

export const AppScreen = React.forwardRef(
  (
    { className, children, ...divProps }: IAppScreenProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div {...divProps} ref={ref} className={cx("AppScreen", className)}>
        {children}
      </div>
    );
  },
);
