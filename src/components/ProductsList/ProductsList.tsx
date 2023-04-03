import css from "./ProductsList.module.css";
import { Col, Row } from "react-bootstrap";
import { nanoid } from "nanoid";
import cssDisplay from "../../style/display.module.css";
import { typeObjProduct, typePrice } from "../../redux/selectors/types/types";
import { ProductsListProps } from "./types";
import {
  getDayMonth,
  getDayMonthStringYear,
} from "../../tools/date/getDateTemplate";
import { useSelector } from "react-redux";
import { selectOrders } from "../../redux/selectors/selectOrders";

const { shortGrey, dateEnd, item, priceWrapper, additionalPrice } = css;
const { displayFlexColumnCenter, displayFlexRowCenter } = cssDisplay;

const mainPrice = "UAH";

function ProductsList({ products, permissionFields }: ProductsListProps) {
  const orders = useSelector(selectOrders);
  const { isTitle, isType, isGuarantee, isPrice, isOrder } = permissionFields;

  const findOrder = (id: number) =>
    orders[orders?.findIndex((order) => order.id === id)];

  const priceRender = (price: typePrice[], currency: string) => {
    return price.map(({ value, symbol }, index) => {
      const isMain = symbol === currency;

      return (
        <div
          key={index}
          className={`${priceWrapper} ${displayFlexRowCenter} ${
            isMain ? additionalPrice : shortGrey
          }`}
        >
          <span>{value}</span>
          <span>{symbol}</span>
        </div>
      );
    });
  };

  return (
    <>
      {products.map(
        ({
          title,
          type,
          guarantee: { start, end },
          price,
          order,
        }: typeObjProduct) => {
          return (
            <Row key={nanoid()} className={item}>
              {isTitle && <Col>{title}</Col>}
              {isType && <Col>{type}</Col>}
              {isGuarantee && (
                <Col className={displayFlexColumnCenter}>
                  <span className={shortGrey}>{getDayMonth(start)}</span>
                  <span className={dateEnd}>{getDayMonthStringYear(end)}</span>
                </Col>
              )}
              {isPrice && <Col>{priceRender(price, mainPrice)}</Col>}
              {isOrder && <Col>{findOrder(order).title}</Col>}
            </Row>
          );
        }
      )}
    </>
  );
}

export default ProductsList;
