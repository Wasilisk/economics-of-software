import { useContext } from "react";

import { earlyDesignMultipliers, MultipliyerType } from "shared/config/multipliers";

import { Cocomo2Context } from "shared/libs/context/cocomo2";

import { Box } from "shared/ui/box";
import { Grid } from "shared/ui/grid";
import { MultiplierRadio } from "shared/ui/multiplier-radio";
import { Stack } from "shared/ui/stack";
import { Typography } from "shared/ui/typography";

export const EarlyDesignMultipliers = () => {
    const { earlyDesignValues, setEarlyDesignValues } = useContext(Cocomo2Context);

    const handleChange = (id: string, value: number) => {
        setEarlyDesignValues({ ...earlyDesignValues, [id]: value });
    };

    const columnNames = ["Extra Low", "Very low", "Low", "Average", "High", "Very High", "Critical"]

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
                    earlyDesignMultipliers.map((multiplier: MultipliyerType) => <MultiplierRadio
                        key={multiplier.id}
                        onChange={handleChange}
                        roundFloat={3}
                        defaultValue={earlyDesignValues[multiplier.id]}
                        {...multiplier}
                    />)
                }
            </Stack>
        </Box>
    )
}