import { INCREMENT, DECREMENT } from "./CounterActions";

const initialState = {
  count: 0,
  name: "Gayana",
  age: 27,
};
const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      //Spread operator
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case "GAYANA":
      return { ...state, name: "GAYANA PANDA" };
    case "OPPO":
      return { ...state, name: "TYTYT", count: 1000 };

    default:
      return state;
  }
};

export default CounterReducer;
