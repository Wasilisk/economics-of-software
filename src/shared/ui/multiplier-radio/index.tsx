import { Box } from "shared/ui/box";
import { FormControlLabel } from "shared/ui/form-control-label";
import { Radio } from "shared/ui/radio";
import { RadioGroup } from "shared/ui/radio-group";
import { Typography } from "shared/ui/typography";

import { MultiplierRadioProps } from "./types";

export const MultiplierRadio = ({ id, name, values, onChange, defaultValue, additionalComponent, roundFloat }: MultiplierRadioProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(id, parseFloat(event.target.value));
    };

    return (
        <Box display="flex" alignItems="center" width="100%">
            <Box width="130px" mr={1}>
                <Typography textAlign="center">{name}</Typography>
            </Box>
            <Box display="flex" width="100%">
                {additionalComponent}
                <RadioGroup
                    row
                    defaultValue={1}
                    onChange={handleChange}
                    sx={{ flex: 1, justifyContent: "space-around" }}
                >
                    {
                        Object.keys(values).map(key => <FormControlLabel
                            key={key}
                            labelPlacement="bottom"
                            value={values[key] === null ? "" : values[key]}
                            control={<Radio />}
                            disabled={values[key] === null}
                            label={values[key] === null ? "-" : values[key]?.toPrecision(roundFloat)}
                            checked={defaultValue === values[key]}
                        />)
                    }
                </RadioGroup>
            </Box>
        </Box>
    )
}