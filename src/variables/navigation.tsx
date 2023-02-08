/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { AboutScreen } from "screens/AboutScreen";
import { HomeScreen } from "screens/home/HomeScreen";
import { TRouteDef } from "types";

export const routes: TRouteDef[] = [
  {
    type: "both",
    children: <HomeScreen />,
    label: "Navigation.home",
    path: "/",
    icon: "Home",
  },
  {
    type: "both",
    children: <AboutScreen />,
    label: "Navigation.about",
    path: "/about",
    icon: "Person",
  },
];
