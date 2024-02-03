import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import BatchAndSlot from "../components/BatchAndSlot";
import SuccessMessage from "../components/SuccessMessage";
import ContactForm from "../components/ContactForm";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/message" element={<ContactForm />} />
        <Route
          path="/trial"
          element={
            <BatchAndSlot
              actualPrice={299}
              discountedPrice={0}
              componentType={"Free"}
            />
          }
        />
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
                  componentType={"buy"}
                />
              }
            />
            <Route path="success" element={<SuccessMessage timePeriod={6} />} />
          </Route>
          <Route path="2999">
            <Route
              index={true}
              element={
                <BatchAndSlot
                  actualPrice={5999}
                  discountedPrice={2999}
                  monthPlan={3}
                  componentType={"buy"}
                />
              }
            />
            <Route path="success" element={<SuccessMessage timePeriod={3} />} />
          </Route>
          <Route path="1199">
            <Route
              index={true}
              element={
                <BatchAndSlot
                  actualPrice={1999}
                  discountedPrice={1199}
                  monthPlan={1}
                  componentType={"buy"}
                />
              }
            />
            <Route path="success" element={<SuccessMessage timePeriod={1} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
