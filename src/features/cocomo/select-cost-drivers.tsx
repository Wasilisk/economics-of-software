import { useContext } from "react"

import { MultipliyerType } from "shared/config/multipliers";

import { CocomoContext } from "shared/libs/context/cocomo"

import { Box } from "shared/ui/box";
import { FormControlLabel } from "shared/ui/form-control-label";
import { Radio } from "shared/ui/radio";
import { RadioGroup } from "shared/ui/radio-group";
import { Typography } from "shared/ui/typography";

export const SelectCostDrivers = ({ id, name, values }: MultipliyerType) => {
    const { costDriversValues, setCostDriversValues } = useContext(CocomoContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCostDriversValues({ ...costDriversValues, [id]: parseFloat(event.target.value) });
    };

    return (
        <Box display="flex" alignItems="center" width="100%">
            <Box width="130px" mr={1}>
                <Typography textAlign="center">{name}</Typography>
            </Box>
            <Box display="flex" width="100%">
                <RadioGroup
                    row
                    defaultValue={1}
                    onChange={handleChange}
                    sx={{ flex: 1, justifyContent: "space-around" }}
                >
                    {
                        Object.keys(values).map(key => <FormControlLabel
                            labelPlacement="bottom"
                            value={values[key]}
                            control={<Radio />}
                            disabled={!Boolean(values[key])}
                            label={values[key] ? values[key] : "-"}
                        />)
                    }
                </RadioGroup>
            </Box>
        </Box>
    )
}