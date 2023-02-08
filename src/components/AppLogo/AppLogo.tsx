/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import cx from "classnames";
import { memo } from "react";
import "./AppLogo.scss";
import logo from "./logo.webp";

export const AppLogo = memo(
  ({ className, ...divProps }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
      <div {...divProps} className={cx("AppLogo", className)}>
        <img alt="app-logo" className="AppLogo__image" src={logo} />
      </div>
    );
  },
);
