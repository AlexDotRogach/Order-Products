import Spinner from "react-bootstrap/Spinner";
import position from "../../style/position.module.css";
import css from "./Loader.module.css";

const { loader } = css;
const { positionLeft } = position;

function Loader() {
  return <Spinner animation="grow" className={`${loader} ${positionLeft}`} />;
}

export default Loader;
