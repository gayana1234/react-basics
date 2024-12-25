import { INCREMENT, DECREMENT } from "./Actions";

const initialState = {
  count: 0,
  name: "Gayana",
  age: 27,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      //Spread operator
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case "GAYANA":
      return { ...state, name: "GAYANA PANDA" };

    default:
      return state;
  }
};

export default Reducer;
