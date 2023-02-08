/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Flex } from "components/Flex";
import { memo } from "react";
import "./Footer.scss";

export const Footer = memo(() => {
  return (
    <Flex className="Footer" mode="row">
      <a
        className="Footer__link"
        href="https://github.com/alwatroos"
        target="_blank">
        <strong>&#169;alwatroos</strong>
      </a>
    </Flex>
  );
});
