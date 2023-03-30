import css from "./NavigationMenu.module.css";
import { Offcanvas, Image } from "react-bootstrap";

interface INavigationMenuProps {
  handleClose: () => void;
  show: boolean;
}

const { profileImg, headerOffcanvas } = css;
const imageSrc =
  "https://w7.pngwing.com/pngs/244/76/png-transparent-avatar-male-man-person-profile-user-website-website-internet-icon.png";
function NavigationMenu({ handleClose, show }: INavigationMenuProps) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          closeButton
          className={headerOffcanvas}
        ></Offcanvas.Header>
        <Offcanvas.Body>
          <Image
            className={profileImg}
            src={imageSrc}
            alt="profile"
            roundedCircle={true}
          ></Image>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavigationMenu;
