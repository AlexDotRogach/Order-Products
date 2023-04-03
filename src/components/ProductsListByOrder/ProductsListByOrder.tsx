import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/selectors/selectProducts";
import ProductsList from "../ProductsList";
import NotFound from "../../pages/NotFound";

const permissionFields = {
  isTitle: true,
  isType: true,
  isGuarantee: true,
  isPrice: true,
  isOrder: false,
};

function ProductsListByOrder() {
  const { orderId } = useParams();
  const products = useSelector(selectProducts);

  if (!orderId) return <NotFound></NotFound>;

  const productsByOrderId = () => {
    return products.filter((product) => product.order === +orderId);
  };

  if (!productsByOrderId().length) return <span>No products</span>;

  return (
    <ProductsList
      products={productsByOrderId()}
      permissionFields={permissionFields}
    ></ProductsList>
  );
}

export default ProductsListByOrder;
