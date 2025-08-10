// Action for login start
export const AccessStart = () => ({
  type: "ACCESS_START",
});

// Action for login success with a typed user parameter
export const AccessSuccess = (user) => ({
  type: "ACCESS_SUCCESS",
  payload: user,
});

// Action for login failure
export const AccessFailure = () => ({
  type: "ACCESS_FAILURE",
});

// Action for logout
export const Logout = () => ({
  type: "LOG_OUT",
});
