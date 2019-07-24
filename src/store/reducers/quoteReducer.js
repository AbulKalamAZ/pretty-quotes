const initialState = {};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_QUOTE":
      return state;

    case "CREATE_QUOTE_ERROR":
      return state;

    default:
      return state;
  }
};

export default quoteReducer;
