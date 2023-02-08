/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import cx from "classnames";
import React, { memo } from "react";
import "./AppBackground.scss";

export const AppBackground = memo(
  ({ className, ...divProps }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
      <div {...divProps} className={cx("AppBackground", className)}>
        {/* <div className="AppBackground__circle AppBackground__circle--xxlarge AppBackground__shade1"></div>
        <div className="AppBackground__circle AppBackground__circle--xlarge AppBackground__shade2"></div>
        <div className="AppBackground__circle AppBackground__circle--large AppBackground__shade3"></div>
        <div className="AppBackground__circle AppBackground__circle--medium AppBackground__shade4"></div>
        <div className="AppBackground__circle AppBackground__circle--small AppBackground__shade5"></div> */}
      </div>
    );
  },
);
