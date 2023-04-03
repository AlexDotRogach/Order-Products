import { typeStateOrders } from "./types/types";

export const selectOrders = (state: typeStateOrders) => state.order.orders;
