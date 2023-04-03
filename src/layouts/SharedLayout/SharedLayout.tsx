import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import TopMenu from "../../components/TopMenu";
import Loader from "../Loader";
function SharedLayout() {
  return (
    <>
      <TopMenu />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default SharedLayout;
