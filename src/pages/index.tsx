import { Navigate, Route, Routes } from "react-router-dom";

import { CocomoCalculator } from "./cocomo-calculator";

export const Routing = () => (
    <Routes>
        <Route path="/cocomo-calculator" element={<CocomoCalculator />} />
        <Route
            path="*"
            element={<Navigate to="/cocomo-calculator" replace />}
        />
    </Routes>
)