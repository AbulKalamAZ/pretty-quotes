const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login Failed!"
      };

    case "LOGIN_SUCCESS":
      console.log("Login success!");
      return {
        ...state,
        authError: null
      };

    case "SIGNOUT_SUCCESS":
      return state;

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.payload.message
      };

    default:
      return state;
  }
};

export default authReducer;
