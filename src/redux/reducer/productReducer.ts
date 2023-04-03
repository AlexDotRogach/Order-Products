import data from "../../data/data.json";

const { products } = data;

const productReducerInitialState = {
  products,
};

export const productReducer = (
  state = productReducerInitialState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case "DELETE_PRODUCT_BY_ORDER":
      return {
        ...state,
        products: [
          ...products.filter((product) => product.order !== action.payload),
        ],
      };
    default:
      return state;
  }
};
