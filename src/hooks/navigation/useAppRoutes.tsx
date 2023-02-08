/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TRouteDef } from "types";
import { routes } from "variables";

export const useAppRoutes = () => {
  const [appRoutes, setAppRoutes] = useState<TRouteDef[]>([]);
  const loggedIn = useSelector(() => true); //let's check it in store => for now it is true always

  useEffect(() => {
    if (loggedIn) {
      setAppRoutes(
        routes.filter(
          ({ type = "both" }) => ["private", "both"].indexOf(type) > -1,
        ),
      );
    } else {
      setAppRoutes(
        routes.filter(
          ({ type = "both" }) => ["public", "both"].indexOf(type) > -1,
        ),
      );
    }
  }, [loggedIn]);
  return { routes: appRoutes };
};
