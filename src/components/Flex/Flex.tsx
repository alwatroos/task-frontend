/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import cx from "classnames";
import React from "react";
import "./Flex.scss";

type TFlexType = "column" | "row";

interface IFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: TFlexType;
}

export const Flex = ({
  className,
  children,
  mode = "column",
  ...divProps
}: IFlexProps) => {
  return (
    <div {...divProps} className={cx("Flex", `Flex--${mode}`, className)}>
      {children}
    </div>
  );
};
