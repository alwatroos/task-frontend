/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import AOS from "aos";
import "aos/dist/aos.css";
import { AppBackground } from "components/AppBackground";
import { AppLogo } from "components/AppLogo";
import { AppNavigation } from "components/AppNavigation";
import { PreconfiguredApp } from "components/PreconfiguredApp";
import { useEffect } from "react";
import "./theme/theme.scss";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <PreconfiguredApp logo={<AppLogo />}>
      <AppBackground />
      <AppNavigation />
    </PreconfiguredApp>
  );
};

export default App;
