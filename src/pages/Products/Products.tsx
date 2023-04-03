import css from "./Products.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/selectors/selectProducts";
import { selectFilterValue } from "../../redux/selectors/selectFilterValue";
import ProductsListByFilter from "../../components/ProductsListByFilter";
import FilterProducts from "../../components/FilterProducts";

const { title } = css;

function Products() {
  const filterValue = useSelector(selectFilterValue);
  const products = useSelector(selectProducts);

  return (
    <Container>
      <Row className={title}>
        <Col xl={2}>Продукты</Col>
        <Col>
          <FilterProducts />
        </Col>
      </Row>
      <ProductsListByFilter
        products={products}
        filterValue={filterValue}
      ></ProductsListByFilter>
    </Container>
  );
}

export default Products;
