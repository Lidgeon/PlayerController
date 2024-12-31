import { configureStore } from "@reduxjs/toolkit";
import { persistMiddleware, loadState } from "./persistMiddleware";

import playerSlice from "./slices/playerSlice";

const preloadedState = loadState();
const store = configureStore({
  reducer: {
    playerReducer: playerSlice,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistMiddleware),
});

export default store;
