import { configureStore, combineReducers } from "@reduxjs/toolkit";

import retailerReducer from "../store/features/retailerSlice";
import { retailerApi } from "./services/retailerApi";

const rootReducer = combineReducers({
  retailer: retailerReducer,
  [retailerApi.reducerPath]: retailerApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([retailerApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
