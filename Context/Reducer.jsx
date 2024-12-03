export const initialState = {
  searchkey: "",
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchkey: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};
