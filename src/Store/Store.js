import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterStore/CounterReducer";
import SpaceReducer from "./SpaceStore/SpaceReducer";
import PractiseReducer from "./PractiseReducer";
import Reduce from "./Reduce";

// Create Redux store
const store = configureStore({
  reducer: {
    //This can be of any name
    counterData: CounterReducer,
    spaceData: SpaceReducer,
    practiceData: PractiseReducer,
    Good: Reduce,
  },
});

export default store;
