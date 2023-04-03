import data from "../../data/data.json";

const { orders } = data;

const ordersReducerInitialState = {
  orders,
};

export const ordersReducer = (
  state = ordersReducerInitialState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case "DELETE_ORDER":
      return {
        ...state,
        orders: [
          ...state.orders.filter((order) => order.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};
