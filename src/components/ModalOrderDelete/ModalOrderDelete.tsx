import css from "./ModalOrderDelete.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createPortal } from "react-dom";
import NotFound from "../../pages/NotFound";
import { typeSettingModalProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder } from "../../redux/actions/orderAction";
import { deleteProductByOrder } from "../../redux/actions/productAction";
import { selectProducts } from "../../redux/selectors/selectProducts";
import { useNavigate } from "react-router-dom";

const modalRoot = document.querySelector("#modal-root");

const { productWrapper } = css;

function ModalOrderDelete({ settingModal, closeModal }: typeSettingModalProps) {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const navigate = useNavigate();

  if (!modalRoot) return <NotFound />;

  const { show, id } = settingModal;

  const deleteOrderByConfirm = () => {
    dispatch(deleteOrder(id));
    dispatch(deleteProductByOrder(id));
    closeModal();
    navigate("/orders");
  };

  const productByOrder = () => {
    return products
      .filter(({ order }) => order === id)
      .map(({ title, type }, index) => {
        return (
          <div className={productWrapper} key={index}>
            <span>{title}</span>
            <span>{type}</span>
          </div>
        );
      });
  };

  return createPortal(
    <Modal animation={true} show={show}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Вы уверены, что хотите удалить этот приход?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>{productByOrder()}</div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Отменить
          </Button>
          <Button variant="primary" onClick={deleteOrderByConfirm}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>,
    modalRoot
  );
}

export default ModalOrderDelete;
