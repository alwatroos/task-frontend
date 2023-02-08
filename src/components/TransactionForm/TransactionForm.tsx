/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Card } from "antd";
import {
  AppConfiguredForm,
  IAppFormConfiguration,
} from "components/AppConfiguredForm";
import { LoadingIndicator } from "components/LoadingIndicator";
import { ITransaction } from "models";
import { memo, useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "stores";
import {
  areTransactionsLoadingSelector,
  balanceSelector,
  sendMoney,
} from "stores/transaction";
import { showError } from "utilities";
import { AOS_FADE_LEFT } from "variables";
import "./TransactionForm.scss";

export const TransactionForm = memo(() => {
  const dispatch = useAppDispatch();
  const balance = useAppSelector(balanceSelector);
  const loading = useAppSelector(areTransactionsLoadingSelector);

  const onSubmit = useCallback(
    (transaction: ITransaction) => {
      transaction.date = new Date();
      dispatch(sendMoney(transaction));
    },
    [dispatch],
  );

  const onSubmitFailed = useCallback(() => {
    showError("Please check values in transaction form!");
  }, []);

  const formConfig: IAppFormConfiguration<ITransaction> = useMemo(() => {
    return {
      fields: [
        {
          name: "account",
          type: "number",
          placeholder: "Account Number",
          rules: [
            {
              required: true,
              message: `Account cannot be empty!`,
            },
            {
              pattern: /^\d{26}$/,
              message:
                "Account number should be 26 characters long and numbers only",
            },
          ],
        },
        {
          name: "beneficiary",
          type: "text",
          placeholder: "Beneficiary",
          rules: [
            {
              required: true,
              message: `Beneficiary cannot be empty!`,
            },
          ],
        },
        {
          name: "address",
          type: "text",
          placeholder: "Address",
          rules: [
            {
              required: true,
              message: `Address cannot be empty!`,
            },
          ],
        },
        {
          name: "amount",
          type: "number",
          placeholder: "Amount",
          rules: [
            {
              type: "number",
              min: 0.1,
              max: balance,
              validator: (rule, value, callback) => {
                let toTest: number | undefined = undefined;
                if (typeof value === "string") {
                  if (/^\d+[.]{0,1}[0-9]*$/.test(value)) {
                    toTest = +value;
                  } else {
                    callback("Value has wrong format or is empty!");
                    return;
                  }
                } else if (typeof value === "number") {
                  toTest = value;
                }

                if (toTest === undefined) {
                  callback("Value is empty!");
                  return;
                }

                if (
                  (rule.min !== undefined && rule.min > toTest) ||
                  (rule.max !== undefined && rule.max < toTest)
                ) {
                  callback(
                    `Value should be higher than 0.1 and lower than ${balance}!`,
                  );
                  return;
                } else {
                  callback();
                }
              },
            },
          ],
        },
        {
          name: "description",
          type: "text",
          placeholder: "Description",
          rules: [
            {
              required: true,
              message: `Description cannot be empty!`,
            },
          ],
        },
      ],
      formName: "TransactionForm",
      buttonText: "Send Money",
      onSubmit,
      onSubmitFailed,
    };
  }, [balance, onSubmit, onSubmitFailed]);

  return (
    <Card className="TransactionForm" {...AOS_FADE_LEFT}>
      <LoadingIndicator loading={loading} />
      <AppConfiguredForm title="New Transaction" config={formConfig} />
    </Card>
  );
});
