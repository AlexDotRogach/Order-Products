import { typeObjProduct } from "../../redux/selectors/types/types";

export type typeObjFields = {
  isTitle: boolean;
  isType: boolean;
  isGuarantee: boolean;
  isPrice: boolean;
  isOrder: boolean;
};

export type ProductsListProps = {
  products: typeObjProduct[];
  permissionFields: typeObjFields;
};
