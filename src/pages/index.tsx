import { Route, Routes } from "react-router-dom";

export const Routing = () => (
    <Routes>
        <Route path="/" element={<>Hello</>} />
        <Route path="/cocomo-calculator" element={<>Calculator</>} />
    </Routes>
)