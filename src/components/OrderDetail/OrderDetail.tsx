import css from "./OrderDetail.module.css";
import cssPosition from "../../style/position.module.css";
import { useNavigate } from "react-router-dom";
import { RiCloseCircleFill } from "react-icons/ri";
import ProductsListByOrder from "../ProductsListByOrder";

const { orderDetailWrap, orderDetailList, orderDetailClose } = css;
const { positionLeft } = cssPosition;

function OrderDetail() {
  const navigate = useNavigate();

  return (
    <div className={orderDetailWrap}>
      <RiCloseCircleFill
        className={orderDetailClose}
        size={30}
        onClick={() => {
          navigate("/orders");
        }}
      ></RiCloseCircleFill>
      <div className={`${orderDetailList} ${positionLeft}`}>
        <ProductsListByOrder></ProductsListByOrder>
      </div>
    </div>
  );
}

export default OrderDetail;
