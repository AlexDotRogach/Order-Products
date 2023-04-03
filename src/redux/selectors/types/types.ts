export type typeObjOrder = {
  id: number;
  title: string;
  date: string;
  description: string;
};
export type typeStateOrders = {
  order: { orders: typeObjOrder[] };
};

// ----------
export type typeObjQuarantee = {
  start: string;
  end: string;
};

export type typeObjProduct = {
  title: string;
  type: string;
  guarantee: typeObjQuarantee;
  price: typePrice[];
  order: number;
};

export type typePrice = {
  value: number;
  symbol: string;
};

export type typeStateProducts = {
  product: typeProducts;
};

export type typeProducts = {
  products: typeObjProduct[];
};

// -----------

export type typeFilter = {
  value: filterValues.all;
};

export type typeStateFilter = {
  filter: typeFilter;
};

export enum filterValues {
  all = "Все",
  monitors = "Мониторы",
  laptop = "Ноутбуки",
}
