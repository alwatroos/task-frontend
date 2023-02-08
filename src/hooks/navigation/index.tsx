/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { navigateTo } from "stores/navigation";

export const useNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
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

  return { goTo, goBack, location };
};
