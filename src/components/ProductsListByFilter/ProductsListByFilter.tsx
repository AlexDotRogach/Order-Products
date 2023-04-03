import { ProductsListByFilterProps } from "./types";
import ProductsList from "../ProductsList";

const permissionFields = {
  isTitle: true,
  isType: true,
  isGuarantee: true,
  isPrice: true,
  isOrder: true,
};
function ProductsListByFilter({
  products,
  filterValue,
}: ProductsListByFilterProps) {
  const productByFilter = products.filter((product) => {
    if (filterValue === "all") return product;

    if (product.type.toLowerCase() === filterValue) return product;

    return false;
  });

  return (
    <ProductsList
      products={productByFilter}
      permissionFields={permissionFields}
    ></ProductsList>
  );
}

export default ProductsListByFilter;
