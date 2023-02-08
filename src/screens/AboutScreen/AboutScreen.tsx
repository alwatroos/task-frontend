/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Card } from "antd";
import { AppLabel } from "components/AppLabel";
import { AppScreen } from "components/AppScreen";
import { AppTitle } from "components/AppTitle";
import { Flex } from "components/Flex";
import { memo } from "react";
import { AOS_FADE_DOWN } from "variables";

import "./AboutScreen.scss";

export const AboutScreen = memo(() => {
  return (
    <AppScreen className={"AboutScreen"}>
      <Card className="AboutScreen__card" {...AOS_FADE_DOWN}>
        <Flex mode="column">
          <AppTitle>About</AppTitle>
          <Flex mode="row">
            <AppLabel className="AboutScreen__label">
              Author:{" "}
              <strong>{process.env.REACT_APP_AUTHOR || "alwatroos"}</strong>
            </AppLabel>
          </Flex>
          <Flex mode="row">
            <AppLabel className="AboutScreen__label">
              App name: <strong>{process.env.REACT_APP_NAME}</strong>
            </AppLabel>
          </Flex>
          <Flex mode="row">
            <AppLabel className="AboutScreen__label">
              Version: <strong>{process.env.REACT_APP_VERSION}</strong>
            </AppLabel>
          </Flex>
        </Flex>
      </Card>
    </AppScreen>
  );
});
