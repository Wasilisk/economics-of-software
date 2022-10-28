import { TextField } from "shared/ui/textfield";

import { FactorFieldProps } from "./types";

export const FactorField = ({id, value, onChange}: FactorFieldProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(id, parseFloat(event.target.value));
    };

    return (
        <TextField
            sx={{ml: 6, display: "flex", justifyContent: "center"}}
            type="number"
            value={value}
            onChange={handleChange}
            InputProps={{
                inputProps: {
                    max: 1000000, min: 0
                }
            }}
        />
    );
}