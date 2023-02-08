/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Button } from "antd";
import { Flex } from "components/Flex";
import { useNavigation } from "hooks";
import { useAppRoutes } from "hooks/navigation/useAppRoutes";
import "./Header.scss";

export const Header = () => {
  const { routes } = useAppRoutes();
  const { goTo, currentScreen } = useNavigation();

  return (
    <Flex className="Header" mode="row">
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
