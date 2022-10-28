import React, { useContext } from "react";

import { levelsFactors, MultipliyerType } from "shared/config/multipliers";

import { FunctionalPointContext } from "shared/libs/context/functional-point";

import { Box } from "shared/ui/box";
import { Divider } from "shared/ui/divider";
import { FactorField } from "shared/ui/factor-field";
import { Grid } from "shared/ui/grid";
import { MultiplierRadio } from "shared/ui/multiplier-radio";
import { Stack } from "shared/ui/stack";
import { Typography } from "shared/ui/typography";

export const SetLevelsFactors = () => {

    const { levelsFactorsValues, setLevelsFactorsValues } = useContext(FunctionalPointContext);

    const handleFactorChange = (id: string, factor: number) => {
        setLevelsFactorsValues({
            ...levelsFactorsValues, [id]: {
                ...levelsFactorsValues[id],
                factor: factor
            }
        });
    };

    const handleValueChange = (id: string, value: number) => {
        setLevelsFactorsValues({
            ...levelsFactorsValues, [id]: {
                ...levelsFactorsValues[id],
                value: value
            }
        });
    }

    const columnNames = ["Value", "Low", "Average", "High"]

    return (
        <Box>
            <Typography mb={2} variant="h6" align="center">Difficulty levels</Typography>
            <Divider/>
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
                    levelsFactors.map((multiplier: MultipliyerType) => <React.Fragment key={multiplier.id}>
                        <MultiplierRadio
                            additionalComponent={
                                <FactorField
                                    onChange={handleValueChange}
                                    value={levelsFactorsValues[multiplier.id].value}
                                    {...multiplier}
                                />
                            }
                            onChange={handleFactorChange}
                            defaultValue={levelsFactorsValues[multiplier.id].factor}
                            {...multiplier}
                        />
                    </React.Fragment>)
                }
            </Stack>
        </Box>
    )
}