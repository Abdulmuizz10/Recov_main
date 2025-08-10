export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "ACCESS_START":
      return {
        user: null,
      };
    case "ACCESS_SUCCESS":
      return {
        user: action.payload,
      };
    case "ACCESS_FAILURE":
      return {
        user: null,
      };
    case "LOG_OUT":
      return {
        user: null,
      };
    default:
      return {
        ...state,
      };
  }
};
