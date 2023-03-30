import { useState } from "react";
import css from "./TopMenu.module.css";
import cssPosition from "../../style/position.module.css";
import { Button } from "react-bootstrap";
import { HiMenu } from "react-icons/hi";
import NavigationMenu from "../NavigationMenu";
import Time from "./Time";

const { positionTopCenter } = cssPosition;
const { btnMenu, header } = css;

function TopMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className={header}>
      <Button
        className={`${btnMenu} ${positionTopCenter}`}
        variant="white"
        onClick={handleShow}
      >
        <HiMenu size={32} />
      </Button>
      <Time></Time>
      <NavigationMenu handleClose={handleClose} show={show} />
    </header>
  );
}

export default TopMenu;
