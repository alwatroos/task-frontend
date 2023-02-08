/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "stores";
import { currentPathSelector, navigateTo } from "stores/navigation";

export const useNavigation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentScreen = useAppSelector(currentPathSelector);
  const goTo = (path: string) => {
    navigate(path);
    dispatch(navigateTo(path));
  };
  const goBack = () => {
    navigate(-1);
    setTimeout(() => {
      dispatch(navigateTo(location.pathname));
    }, 300);
  };

  return { goTo, goBack, location, currentScreen };
};
