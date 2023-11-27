import { SET_RANDOM_GREETING } from "../actions/greetingActions";

const initialState = {
  randomGreeting: "Loading...",
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOM_GREETING:
      return {
        ...state,
        randomGreeting: action.message,
      };
    default:
      return state;
  }
};

export default greetingReducer;
