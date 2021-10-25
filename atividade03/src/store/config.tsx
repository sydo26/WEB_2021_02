import { combineReducers, configureStore } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, Provider } from "react-redux";
import countReducer from "./features/count";

const combinedReducers = combineReducers({
  count: countReducer,
});

export const store = configureStore({
  reducer: combinedReducers,
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const StoreProvider: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
