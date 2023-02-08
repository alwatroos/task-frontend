/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import cx from "classnames";
import React, { useEffect } from "react";

import { AppScreen } from "components/AppScreen";
import { BalanceAndFiltersCard } from "components/BalanceAndFiltersCard";
import { Flex } from "components/Flex";
import { TransactionForm } from "components/TransactionForm";
import { TransactionsTable } from "components/TransactionsTable";
import { useResolution } from "hooks";
import { isMobile } from "react-device-detect";
import { useSelector } from "react-redux";
import { navbarRectSelector } from "stores/navigation";
import "./HomeScreen.scss";

export default ({
  className,
  ...divProps
}: React.HTMLAttributes<HTMLDivElement>) => {
  const navbarRect = useSelector(navbarRectSelector);
  const resolution = useResolution();
  return (
    <AppScreen {...divProps} className={cx("HomeScreen", className)}>
      <Flex mode="column" className="HomeScreen__content">
        <Flex
          className="HomeScreen__container"
          mode={resolution === "high" ? "row" : "column"}>
          <BalanceAndFiltersCard />
          <TransactionForm />
        </Flex>
        <TransactionsTable />
      </Flex>
    </AppScreen>
  );
};
