import { useContext } from "react";

import { Cocomo2Context } from "shared/libs/context/cocomo2";

import { TextField } from "shared/ui/textfield";

export const ChangeLinesOfCode = () => {
    const { thousandsLinesOfCode, setThousandsLinesOfCode } = useContext(Cocomo2Context)

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