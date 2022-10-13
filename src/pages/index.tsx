import { Navigate, Route, Routes } from "react-router-dom";

import { CocomoCalculator } from "./cocomo-calculator";
import { Cocomo2Calculator } from "./cocomo2-calculator";

export const Routing = () => (
    <Routes>
        <Route path="/cocomo-calculator" element={<CocomoCalculator />} />
        <Route path="/cocomo2-calculator" element={<Cocomo2Calculator />} />
        <Route
            path="*"
            element={<Navigate to="/cocomo-calculator" replace />}
        />
    </Routes>
)