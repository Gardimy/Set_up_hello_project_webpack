export const SET_RANDOM_GREETING = "SET_RANDOM_GREETING";

export const setRandomGreeting = (message) => {
  return {
    type: SET_RANDOM_GREETING,
    message,
  };
};
