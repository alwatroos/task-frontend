/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Header } from "components/Header";
import { useNavigation } from "hooks";
import { useAppRoutes } from "hooks/navigation/useAppRoutes";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setNavBarRect } from "stores/navigation";
import { withDelay } from "utilities";
import "./AppTopBar.scss";

export const AppTopBar = () => {
  const dispatch = useDispatch();
  const { goTo } = useNavigation();
  const { routes } = useAppRoutes();
  const ref = useRef<any>();

  // useEffect(() => {
  //   if (ref) {
  //     withDelay(
  //       () => dispatch(setNavBarRect(ref.current.getBoundingClientRect())),
  //       200
  //     );
  //   }
  // }, [ref]);

  return <Header></Header>;
};
