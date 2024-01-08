import { configureStore } from "@reduxjs/toolkit";
import birthdayReducer from "./slices/birthdaySlice";
import zataReducer from "./slices/zataSlice";

export const store = configureStore({
  reducer: {
    birthday: birthdayReducer,
    zata: zataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
