import { useState } from "react";
import { Link } from "react-router-dom";

import { Tab } from "shared/ui/tab";
import { Tabs } from "shared/ui/tabs";

export const Navigation = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
        >
            <Tab component={Link} label="COCOMO" to="/cocomo-calculator" />
            <Tab component={Link} label="COCOMO II" to="/cocomo2-calculator" />
            <Tab component={Link} label="Functional Point" to="/functional-point" />
        </Tabs>
    )
}