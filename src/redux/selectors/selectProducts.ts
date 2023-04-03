import { typeStateProducts } from "./types/types";

export const selectProducts = (state: typeStateProducts) =>
  state.product.products;
