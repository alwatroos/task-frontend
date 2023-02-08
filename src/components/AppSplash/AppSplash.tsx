/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import cx from "classnames";
import React from "react";
import { AppLoadingAnimation } from "../AppLoadingAnimation";
import { Flex } from "../Flex";
import "./AppSplash.scss";

interface IAppSplashProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: JSX.Element;
}

export const StaticAppSplash = ({
  logo,
  className,
  ...divProps
}: IAppSplashProps) => (
  <div {...divProps} className={cx("AppSplash", className)}>
    <Flex mode="column">
      <h2 className="AppSplash__label">{logo}</h2>
      <AppLoadingAnimation />
    </Flex>
  </div>
);
