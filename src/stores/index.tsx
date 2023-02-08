/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { configureStore } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import reduxLogger from "redux-logger";
import { createEpicMiddleware } from "redux-observable";
import thunk from "redux-thunk";
import { appHistory } from "../utilities/history";
import { configuration } from "./configuration";
import { navigation } from "./navigation";
import { transaction } from "./transaction";
export * from "./AppRootState";

const historyMiddleware = routerMiddleware(appHistory);

const epicMiddleware = createEpicMiddleware();

const router = connectRouter(appHistory);

const initializeStore = () => {
  const rootReducer = combineReducers({
    router,
    configuration,
    navigation,
    transaction,
  });
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(thunk)
        .concat(epicMiddleware)
        .concat(historyMiddleware)
        .concat(reduxLogger),
  });
};

export const store = initializeStore();

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;

export const getStore = () => store;
export const getStateType = () => typeof store.getState();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
