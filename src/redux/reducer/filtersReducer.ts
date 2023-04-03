const filtersInitialState = {
  value: "all",
};

export const filtersReducer = (
  state = filtersInitialState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "CHANGE_FILTER":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
