import cssPosition from "../../style/position.module.css";
import css from "./Home.module.css";

const { positionLeft } = cssPosition;
const { text } = css;
function Home() {
  return <div className={`${positionLeft} ${text}`}>Стартовая страница</div>;
}

export default Home;
