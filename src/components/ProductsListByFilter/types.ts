import { typeObjProduct } from "../../redux/selectors/types/types";

export type ProductsListByFilterProps = {
  products: typeObjProduct[];
  filterValue: string;
};
