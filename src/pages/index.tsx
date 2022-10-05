import { Route, Routes } from "react-router-dom";

import { CocomoCalculator } from "./cocomo-calculator/ui";

export const Routing = () => (
    <Routes>
        <Route path="/cocomo-calculator" element={<CocomoCalculator/>} />
    </Routes>
)