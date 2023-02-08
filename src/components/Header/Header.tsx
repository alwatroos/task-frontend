/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Button } from "antd";
import cx from "classnames";
import { Flex } from "components/Flex";
import { useNavigation } from "hooks";
import { useAppRoutes } from "hooks/navigation/useAppRoutes";
import React from "react";
import "./Header.scss";

export const Header = ({
  className,
  ...divProps
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { routes } = useAppRoutes();
  const { goTo, currentScreen } = useNavigation();

  return (
    <Flex {...divProps} className={cx("Header", className)} mode="row">
      <Flex className="Header__container" mode="row">
        {routes.map((r) => (
          <Button
            key={r.path}
            type={currentScreen === r.path ? "link" : "text"}
            onClick={() => goTo(r.path)}>
            {r.label}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};
