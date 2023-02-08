/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import cx from "classnames";
import { Flex } from "components/Flex";
import React from "react";
import "./Footer.scss";

export const Footer = ({
  className,
  ...divProps
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Flex {...divProps} className={cx("Footer", className)} mode="row">
      <a
        className="Footer__link"
        href="https://github.com/alwatroos"
        target="_blank">
        <strong>&#169;alwatroos</strong>
      </a>
    </Flex>
  );
};
