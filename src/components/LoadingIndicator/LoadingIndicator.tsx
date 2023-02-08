/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import cx from "classnames";
import { AppLoadingAnimation } from "components/AppLoadingAnimation";
import React, { memo } from "react";
import "./LoadingIndicator.scss";

interface ILoadingIndicatorProps {
  loading?: boolean;
}

export const LoadingIndicator = memo(({ loading }: ILoadingIndicatorProps) => {
  if (loading) {
    return (
      <div className={"LoadingIndicator"}>
        <AppLoadingAnimation />
      </div>
    );
  }
  return null;
});
