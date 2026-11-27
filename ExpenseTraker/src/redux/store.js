import { configureStore } from "@reduxjs/toolkit";

import expencesReducer from "./expencesSlice";

export const store = configureStore({
  reducer: {
    expences: expencesReducer,
  },
});
