/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Card } from "antd";
import cx from "classnames";
import {
  AppConfiguredForm,
  IAppFormConfiguration,
} from "components/AppConfiguredForm";
import { AppLabel } from "components/AppLabel";
import { Flex } from "components/Flex";
import { LoadingIndicator } from "components/LoadingIndicator";
import { ITransactionFilters } from "models";
import { memo, useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "stores";
import {
  areTransactionsLoadingSelector,
  balanceSelector,
  fetchTransactions,
  transactionFilterSelector,
} from "stores/transaction";
import { showError } from "utilities";
import { AOS_FADE_RIGHT } from "variables";
import "./BalanceAndFiltersCard.scss";

export const BalanceAndFiltersCard = memo(() => {
  const dispatch = useAppDispatch();
  const balance = useAppSelector(balanceSelector);
  const loading = useAppSelector(areTransactionsLoadingSelector);
  const { size } = useAppSelector(transactionFilterSelector);
  const onSubmit = useCallback(
    (filters: ITransactionFilters) => {
      dispatch(fetchTransactions({ ...filters, size, page: 1 }));
    },
    [dispatch],
  );

  const onSubmitFailed = useCallback(() => {
    showError("Please check values in transaction form!");
  }, []);

  const formConfig: IAppFormConfiguration<ITransactionFilters> = useMemo(() => {
    return {
      fields: [
        {
          name: "description",
          type: "text",
          placeholder: "Description",
        },
        {
          name: "beneficiary",
          type: "text",
          placeholder: "Beneficiary",
        },
      ],
      formName: "FiltersForm",
      buttonText: "Search",
      onSubmit,
      onSubmitFailed,
    };
  }, [balance, onSubmit, onSubmitFailed]);
  return (
    <Card className={"BalanceAndFiltersCard"} {...AOS_FADE_RIGHT}>
      <LoadingIndicator loading={loading} />
      <Card
        className={cx(
          "BalanceAndFiltersCard__container",
          "BalanceAndFiltersCard__container--top",
        )}>
        <AppLabel>
          <strong>Your balance:&nbsp;</strong>
          {balance}
        </AppLabel>
      </Card>
      <Card
        className={cx(
          "BalanceAndFiltersCard__container",
          "BalanceAndFiltersCard__container--bottom",
        )}>
        <Flex mode="column">
          <AppLabel>
            <strong>Filters</strong>
          </AppLabel>
          <Flex mode="row">
            <AppConfiguredForm config={formConfig} fieldsDirection="row" />
          </Flex>
        </Flex>
      </Card>
    </Card>
  );
});
