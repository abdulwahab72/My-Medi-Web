const Filter_Reducer = (state, action) => {
  switch (action.type) {
    case "Filter_Sort":
      return {
        ...state,
        sort: action.payload,
      };
      break;
    case "Filter_Rating":
      return {
        ...state,
        rate: action.payload,
      };
      break;
    case "Filter_Clear":
      return {
        ...state,
        rate: null,
        sort: null,
        price_range: [0, 1000],
      };
      break;
    case "Price_Range":
      return {
        ...state,
        price_range: action.payload,
      };
      break;
    case "Category_Filter":
      return {
        ...state,
        category: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};

export default Filter_Reducer;
