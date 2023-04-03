export const deleteOrder = (id: number) => {
  return { type: "DELETE_ORDER", payload: id };
};
