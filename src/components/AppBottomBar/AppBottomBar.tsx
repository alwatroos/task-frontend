/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import cx from "classnames";
import { Flex } from "components/Flex";
import React from "react";
import "./AppBottomBar.scss";

export const AppBottomBar = ({
  className,
  ...divProps
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Flex
      mode="row"
      {...divProps}
      className={cx("AppBottomBar", className)}></Flex>
  );
};
