import { useContext } from "react";

import { CocomoContext } from "shared/libs/context/cocomo";
import { TextField } from "shared/ui/textfield";

export const ChangeLinesOfCode = () => {
    const { thousandsLinesOfCode, setThousandsLinesOfCode } = useContext(CocomoContext)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setThousandsLinesOfCode(parseFloat(event.target.value));
    };

    return (
        <TextField
            type="number"
            value={thousandsLinesOfCode}
            onChange={handleChange}
            InputProps={{
                inputProps: {
                    max: 1000000, min: 0
                }
            }}
        />
    );
}