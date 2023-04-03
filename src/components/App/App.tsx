import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "../../layouts/SharedLayout";
import Home from "../../pages/Home";
import Loader from "../../layouts/Loader";

const NotFound = lazy(() => import("../../pages/NotFound"));
const Orders = lazy(() => import("../../pages/Orders"));
const Products = lazy(() => import("../../pages/Products"));
const OrderDetail = lazy(() => import("../../components/OrderDetail"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />}>
            <Route path=":orderId" element={<OrderDetail />}></Route>
          </Route>
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
