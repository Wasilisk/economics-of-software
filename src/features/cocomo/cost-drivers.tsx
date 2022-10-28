import { useContext } from "react";

import { costDrivers, MultipliyerType } from "shared/config/multipliers";
import { CocomoContext } from "shared/libs/context/cocomo";
import { Box } from "shared/ui/box";
import { Grid } from "shared/ui/grid";
import { Stack } from "shared/ui/stack";
import { Typography } from "shared/ui/typography";
import { MultiplierRadio } from "shared/ui/multiplier-radio";

export const CostDrivers = () => {
    const { costDriversValues, setCostDriversValues } = useContext(CocomoContext);

    const handleChange = (id: string, value: number) => {
        setCostDriversValues({ ...costDriversValues, [id]: value });
    };

    const columnNames = ["Very low", "Low", "Average", "High", "Very High", "Critical"]

    return (
        <Box>
            <Grid pl={15} py={2}
                justifyContent="space-around"
                position="sticky"
                top={0}
                bgcolor="#ffffff"
                borderBottom="1px solid rgb(232, 232, 232)"
                zIndex={2}
                container
            >
                {
                    columnNames.map(name => <Grid key={name} flex={1} item>
                        <Typography align="center">{name}</Typography>
                    </Grid>)
                }
            </Grid>
            <Stack spacing={1}>
                {
                    costDrivers.map((costDriver: MultipliyerType) => <MultiplierRadio
                        key={costDriver.id}
                        onChange={handleChange}
                        roundFloat={3}
                        defaultValue={costDriversValues[costDriver.id]}
                        {...costDriver}
                    />)
                }
            </Stack>
        </Box>
    )
}