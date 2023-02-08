/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICommonState } from "../ICommonState";

export interface IConfigurationState extends ICommonState {
  initialized: boolean;
}

const initialState: IConfigurationState = {
  loading: false,
  initialized: false,
};

export const fetchConfiguration = createAsyncThunk(
  "configuration/fetchConfiguration",
  async () => {
    await new Promise<void>((resolve) => {
      console.log("Some Long Task Simulating Loading App.");
      setTimeout(() => {
        resolve();
      }, 1500);
    });
    return;
  },
);

export const configurationSlice = createSlice({
  name: "configuration",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConfiguration.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchConfiguration.fulfilled, (state) => {
        state.loading = false;
        state.initialized = true;
      })
      .addCase(fetchConfiguration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const {} = configurationSlice.actions;

export const configuration = configurationSlice.reducer;
