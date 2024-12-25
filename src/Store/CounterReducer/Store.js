import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";

// Create Redux store
const store = configureStore({
  reducer: {
    counterGayu: Reducer,
  },
});

export default store;
