/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TNavigationTabDef } from "types";
import { IAppRootState } from "../AppRootState";
import { ICommonState } from "../ICommonState";

export interface INavigationState extends ICommonState {
  currentScreen?: TNavigationTabDef | string;
  previousScreen?: TNavigationTabDef | string;
  navbarRect?: DOMRect;
}

const stateName = "navigation";
const initialState: INavigationState = {
  loading: false,
  currentScreen: "/",
};

const navigationSlice = createSlice({
  name: stateName,
  initialState,
  reducers: {
    navigateTo: (state, action: PayloadAction<string>) => {
      state.previousScreen = state.currentScreen;
      state.currentScreen = action.payload;
    },
    setNavBarRect: (state, action: PayloadAction<DOMRect>) => {
      state.navbarRect = action.payload;
    },
  },
});

export const navbarRectSelector = ({
  navigation: { navbarRect },
}: IAppRootState) => navbarRect;

export const currentPathSelector = ({
  navigation: { currentScreen },
}: IAppRootState) => currentScreen;

export const { navigateTo, setNavBarRect } = navigationSlice.actions;

export const navigation = navigationSlice.reducer;
