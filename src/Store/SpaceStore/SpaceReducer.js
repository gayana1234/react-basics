import { UPDATEDATA } from "./SpaceActions";

const initialState = {
  data: [],
};

const SpaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATEDATA:
      // top20Data
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default SpaceReducer;
