import css from "./Orders.module.css";
import cssDisplay from "../../style/display.module.css";
import { Suspense, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { Col, Container, Row } from "react-bootstrap";
import { typePrice } from "../../redux/selectors/types/types";
import { typeTotalPrice } from "./types";
import { typeSettingModal } from "../../components/ModalOrderDelete/types";
import { Link, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOrders } from "../../redux/selectors/selectOrders";
import { selectProducts } from "../../redux/selectors/selectProducts";
import {
  getDayMonth,
  getDayMonthStringYear,
} from "../../tools/date/getDateTemplate";
import Loader from "../../layouts/Loader";
import ModalOrderDelete from "../../components/ModalOrderDelete";

const {
  title,
  item,
  shortGrey,
  dateFull,
  price,
  priceMain,
  outlet,
  showOutlet,
  lessFontSize,
  orderDate,
} = css;
const { displayFlexColumnCenter, displayFlexRowCenter } = cssDisplay;

function Orders() {
  const orders = useSelector(selectOrders);
  const products = useSelector(selectProducts);
  const { orderId } = useParams();
  const [settingModal, setSettingModal] = useState<typeSettingModal>({
    show: false,
    id: 0,
  });

  const amountProductsInOrder = (id: number) => {
    return products.filter((product) => product.order === id).length;
  };

  const sumProductInOrder = (id: number) => {
    const totalPrice = products
      .filter((product) => product.order === id)
      .reduce((total: any, product) => {
        product.price.forEach(({ symbol, value }: typePrice) => {
          total[symbol] = total[symbol] ? total[symbol] + value : value;
        });

        return total;
      }, {});

    return totalPrice;
  };

  const renderSumProductInOrder = (objSum: typeTotalPrice) => {
    const arrSum = Object.entries(objSum);

    if (!arrSum.length) return <span className={displayFlexRowCenter}>0</span>;

    return Object.entries(objSum).map(([cur, sum], index) => {
      return (
        <div
          key={index}
          className={`${price} ${
            cur === "UAH" && priceMain
          } ${displayFlexRowCenter}`}
        >
          <span>{cur}</span>
          <span>{sum}</span>
        </div>
      );
    });
  };

  const clickOrderDelete = (id: number) => {
    setSettingModal({
      show: !settingModal.show,
      id,
    });
  };

  const closeModal = () => {
    setSettingModal({
      show: false,
      id: 0,
    });
  };

  return (
    <>
      <Container>
        <Row className={title}>
          <Col xl={2}>Приходы</Col>
        </Row>
        <Row>
          <Col className={`${orderId && lessFontSize}`}>
            {orders.map(({ id, title, date, description }, index) => {
              return (
                <Link key={index} to={`${id}`}>
                  <Row className={`${displayFlexRowCenter} ${item}`}>
                    <Col>{title}</Col>
                    <Col xl={1}>{amountProductsInOrder(id)}</Col>
                    <Col
                      xl={3}
                      className={`${displayFlexColumnCenter} ${orderDate}`}
                    >
                      <span className={shortGrey}>{getDayMonth(date)}</span>
                      <span className={dateFull}>
                        {getDayMonthStringYear(date)}
                      </span>
                    </Col>
                    <Col>{renderSumProductInOrder(sumProductInOrder(id))}</Col>
                    <Col>{description}</Col>
                    <Col>
                      <MdOutlineDelete onClick={() => clickOrderDelete(id)} />
                    </Col>
                  </Row>
                </Link>
              );
            })}
          </Col>
          <Col className={`${outlet} ${orderId && showOutlet}`}>
            <Suspense fallback={<Loader />}>
              <Outlet></Outlet>
            </Suspense>
          </Col>
        </Row>
        <ModalOrderDelete
          settingModal={settingModal}
          closeModal={closeModal}
        ></ModalOrderDelete>
      </Container>
    </>
  );
}

export default Orders;
