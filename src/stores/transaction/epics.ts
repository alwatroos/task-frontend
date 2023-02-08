/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Epic } from "redux-observable";
import { filter, switchMap } from "rxjs";
import { store } from "stores";
import { fetchTransactions, removeTransaction, sendMoney } from "./index";

const refreshTransactionsEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter((action) =>
      [removeTransaction.fulfilled.type, sendMoney.fulfilled.type].includes(
        action.type,
      ),
    ),
    switchMap(async () => {
      return fetchTransactions(store.getState().transaction.filter);
    }),
  );

export const transactionEpics = [refreshTransactionsEpic];
