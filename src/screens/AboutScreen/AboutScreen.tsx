/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Card } from "antd";
import { AppScreen } from "components/AppScreen";
import { AppTitle } from "components/AppTitle";

import "./AboutScreen.scss";

export const AboutScreen = () => {
  return (
    <AppScreen className={"AboutScreen"}>
      <Card>
        <AppTitle>About</AppTitle>
      </Card>
    </AppScreen>
  );
};
