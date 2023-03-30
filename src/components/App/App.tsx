import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const SharedLayout = lazy(() => import("../../layouts/SharedLayout"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const Home = lazy(() => import("../../pages/Home"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
