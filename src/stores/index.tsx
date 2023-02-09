/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import reduxLogger from "redux-logger";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import thunk from "redux-thunk";
import { configuration } from "./configuration";
import { navigation } from "./navigation";
import { transaction } from "./transaction";
import { transactionEpics } from "./transaction/epics";
export * from "./AppRootState";

const initializeStore = () => {
  const rootReducer = combineReducers({
    configuration,
    navigation,
    transaction,
  });
  const epicMiddleware = createEpicMiddleware();
  const rootEpic = combineEpics(...transactionEpics);

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(thunk)
        .concat(epicMiddleware)
        .concat(reduxLogger),
  });

  epicMiddleware.run(rootEpic);
  return store;
};

export const store = initializeStore();

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;

export const getStore = () => store;
export const getStateType = () => typeof store.getState();

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
