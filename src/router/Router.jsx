import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import BatchAndSlot from "../components/BatchAndSlot";
import SuccessMessage from "../components/SuccessMessage";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products">
          <Route index={true} element={<ProductPage />} />
          <Route path="5499">
            <Route
              index={true}
              element={
                <BatchAndSlot
                  actualPrice={12999}
                  discountedPrice={5499}
                  monthPlan={6}
                />
              }
            />
            <Route path="success" element={<SuccessMessage />} />
          </Route>
          <Route path="2999">
            <Route
              index={true}
              element={
                <BatchAndSlot
                  actualPrice={5999}
                  discountedPrice={2999}
                  monthPlan={3}
                />
              }
            />
            <Route path="success" element={<SuccessMessage />} />
          </Route>
          <Route path="1199">
            <Route
              index={true}
              element={
                <BatchAndSlot
                  actualPrice={1999}
                  discountedPrice={1199}
                  monthPlan={1}
                />
              }
            />
            <Route path="success" element={<SuccessMessage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
