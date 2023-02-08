/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { ReactNode, Suspense, useEffect } from "react";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import { IAppRootState, store, useAppDispatch } from "../../stores";
import { fetchConfiguration } from "../../stores/configuration";
import { StaticAppSplash } from "../AppSplash";
import "./PreconfiguredApp.scss";

interface IPreconfiguredAppProps {
  logo?: JSX.Element;
  children?: ReactNode;
}

export const LANG_PROPERTY_NAME = "saved-language";

const lang = localStorage.getItem(LANG_PROPERTY_NAME) || "pl";
localStorage.setItem(LANG_PROPERTY_NAME, lang);

export const PreconfiguredAppContent = ({
  children,
  logo,
}: IPreconfiguredAppProps) => {
  const dispatch = useAppDispatch();
  const isReady = useSelector(
    ({ configuration }: IAppRootState) => configuration.initialized,
  );

  useEffect(() => {
    dispatch(fetchConfiguration());
  }, []);

  if (!isReady) {
    return <StaticAppSplash logo={logo} />;
  }
  return (
    <Suspense fallback={<StaticAppSplash logo={logo} />}>
      <div className="PreconfiguredApp">{children}</div>
    </Suspense>
  );
};

export const PreconfiguredApp = (props: IPreconfiguredAppProps) => {
  return (
    <ReduxProvider store={store}>
      <PreconfiguredAppContent {...props} />
    </ReduxProvider>
  );
};
