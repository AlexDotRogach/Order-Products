export const deleteProductByOrder = (id: number) => {
  return { type: "DELETE_PRODUCT_BY_ORDER", payload: id };
};
