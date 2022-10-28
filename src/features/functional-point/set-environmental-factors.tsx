import { useContext } from "react";
import { environmentalFactors, MultipliyerType } from "shared/config/multipliers";

import { FunctionalPointContext } from "shared/libs/context/functional-point";

import { Box } from "shared/ui/box";
import { Grid } from "shared/ui/grid";
import { MenuItem } from "shared/ui/menu-item";
import { Select } from "shared/ui/select";
import { SelectChangeEvent } from "shared/ui/select/types";
import { Stack } from "shared/ui/stack";
import { Typography } from "shared/ui/typography";

export const SetEnvironmentalFactors = () => {

    const { environmentalFactorsValue, setEnvironmentalFactorsValue } = useContext(FunctionalPointContext);

    const handleChange = (event: SelectChangeEvent<number>, id: string) => {
        setEnvironmentalFactorsValue({
            ...environmentalFactorsValue, [id]: parseInt(event.target.value as string)
        })
    };

    return (
        <Box>
            <Typography mb={3} variant="h6" align="center">Environmental Factors</Typography>
            <Grid container spacing={1}>
                {
                    environmentalFactors.map((multiplier: Omit<MultipliyerType, "values">) =>
                        <Grid item xs={6}>
                            <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                                <Typography minWidth="200px" textAlign="center">{multiplier.name}</Typography>
                                <Select sx={{ width: "20%" }}
                                    value={environmentalFactorsValue[multiplier.id]}
                                    onChange={(event) => handleChange(event, multiplier.id)}
                                >
                                    {
                                        Array.from(Array(6).keys()).map(item => <MenuItem value={item}>{item}</MenuItem>)
                                    }
                                </Select>
                            </Stack>
                        </Grid>

                    )
                }
            </Grid>
        </Box>
    )
}