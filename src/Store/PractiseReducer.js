import { DECREMENT, INCREMENT } from "./ActionPractise";

const initialState = { count: 7, Name: "Gayana", Agre: 27 };

const PractiseReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case "India":
      return { ...state, Name: "India" };
    default:
      return state;
  }
};
export default PractiseReducer;
