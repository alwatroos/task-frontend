/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { AboutScreen } from "screens/AboutScreen";
import { HomeScreen } from "screens/HomeScreen";
import { TRouteDef } from "types";

export const routes: TRouteDef[] = [
  {
    type: "both",
    children: <HomeScreen />,
    label: "Home",
    path: "/",
  },
  {
    type: "both",
    children: <AboutScreen />,
    label: "About",
    path: "/about",
  },
];
