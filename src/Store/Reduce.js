import { DECREMENT, INCREMENT } from "./Action";

const initialState = { count: 8, Name: "Gayana", Age: 22 };
const Reduce = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case "Success":
      return { ...state, Name: "Success" };

    default:
      return state;
  }
};

export default Reduce;
