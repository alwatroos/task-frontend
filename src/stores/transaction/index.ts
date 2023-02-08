/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITransaction, ITransactionFilters } from "models";
import { showError, showSuccess } from "utilities";
import { IAppRootState } from "../AppRootState";
import { ICommonState } from "../ICommonState";

export interface IGetTransactionPaginationPayload {
  page: number;
  size: number;
}

export interface ITransactions {
  transactions: ITransaction[];
  totalCount: number;
  filter: IGetTransactionPaginationPayload;
}
export interface ITransactionState extends ICommonState {
  initialized: boolean;
  filter: ITransactionFilters;
  hasMore: boolean;
  totalCount: number;
  transactions: ITransaction[];
  balance: number;
}

const stateName = "transaction";

const initialState: ITransactionState = {
  initialized: false,
  loading: false,
  filter: { page: 0, size: 20 },
  hasMore: true,
  totalCount: 0,
  transactions: [],
  balance: 200000,
};

export const fetchTransactions = createAsyncThunk(
  `${stateName}/fetchTransactions`,
  async ({ size, page, beneficiary, description }: ITransactionFilters) => {
    const filters = [
      `_page=${page}`,
      `_limit=${size}`,
      "_sort=date",
      "_order=desc",
    ];
    if (!String.isBlank(beneficiary)) {
      filters.push(`beneficiary_like=${beneficiary}`);
    }
    if (!String.isBlank(description)) {
      filters.push(`description_like=${description}`);
    }
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/transactions?${filters.join("&")}`,
    );
    const result: ITransactions = {
      filter: { size, page },
      transactions: await response.json(),
      totalCount: +(response.headers.get("X-Total-Count") || "0"),
    };
    return result;
  },
);

export const sendMoney = createAsyncThunk(
  `${stateName}/sendMoney`,
  async (transaction: ITransaction) => {
    await fetch(`${process.env.REACT_APP_API_URL}/transactions`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
      method: "POST",
    });
  },
);

const transactionSlice = createSlice({
  initialState,
  name: stateName,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state, action) => {
        state.filter = action.meta.arg;
        state.loading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = [...new Set([...action.payload.transactions])];
        state.totalCount = action.payload.totalCount;
        state.hasMore =
          action.payload.transactions.length >= action.meta.arg.size;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.hasMore = false;
        showError("Cannot fetch transactions!");
      })
      .addCase(sendMoney.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMoney.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = state.balance - action.meta.arg.amount;
        showSuccess("Successfully sent money!");
      })
      .addCase(sendMoney.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        showError("Cannot send money right now!");
      });
  },
});

export const transactionFilterSelector = ({
  transaction: { filter },
}: IAppRootState) => filter;

export const hasMoreTransactionsSelector = ({
  transaction: { hasMore },
}: IAppRootState) => hasMore;

export const transactionsSelector = ({
  transaction: { transactions },
}: IAppRootState) => transactions;

export const areTransactionsLoadingSelector = ({
  transaction: { loading },
}: IAppRootState) => loading;

export const isTransactionStoreInitializedSelector = ({
  transaction: { initialized },
}: IAppRootState) => initialized;

export const transactionStateSelector = ({ transaction }: IAppRootState) =>
  transaction;

export const balanceSelector = ({ transaction: { balance } }: IAppRootState) =>
  balance;

export const transaction = transactionSlice.reducer;
