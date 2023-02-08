/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "variables";

export const AppNavigation = () => {
  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        {routes.map((it) => (
          <Route
            key={`route-def--${it.path}`}
            element={it.children}
            path={it.path}
          />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
