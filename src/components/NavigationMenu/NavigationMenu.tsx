import { NavLink } from "react-router-dom";
import cssDisplay from "../../style/display.module.css";
import css from "./NavigationMenu.module.css";
import {
  INavigationMenuProps,
  changeActiveParam,
  changeActiveFn,
} from "./types";
import { Offcanvas, Image, Nav } from "react-bootstrap";

const { profileImg, headerOffcanvas, bodyOffcanvas, nav, navActive, navItem } =
  css;
const { displayFlexColumnCenter } = cssDisplay;
const imageProfileSrc =
  "https://w7.pngwing.com/pngs/244/76/png-transparent-avatar-male-man-person-profile-user-website-website-internet-icon.png";
function NavigationMenu({ handleClose, show }: INavigationMenuProps) {
  const changeActive: changeActiveFn = ({ isActive }: changeActiveParam) =>
    isActive ? navActive : navItem;

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          closeButton
          className={headerOffcanvas}
        ></Offcanvas.Header>
        <Offcanvas.Body
          className={`${displayFlexColumnCenter} ${bodyOffcanvas}`}
        >
          <Image
            className={profileImg}
            src={imageProfileSrc}
            alt="profile"
            roundedCircle={true}
          ></Image>{" "}
          <Nav defaultActiveKey="/" className={`flex-column ${nav}`}>
            <NavLink
              to="/products"
              className={changeActive}
              onClick={handleClose}
            >
              <span>Продукты</span>
            </NavLink>
            <NavLink
              to="/orders"
              className={changeActive}
              onClick={handleClose}
            >
              <span>Группы</span>
            </NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavigationMenu;
