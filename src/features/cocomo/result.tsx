import { useContext } from "react";

import { CocomoContext } from "shared/libs/context/cocomo";
import { Box } from "shared/ui/box";
import { Typography } from "shared/ui/typography";

export const CocomoResult = () => {
    const { modelResults } = useContext(CocomoContext);
    const { laborIntensityInManMonths } = modelResults;


    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Typography variant="h3">{laborIntensityInManMonths.toPrecision(3)}</Typography>
            <Typography>Labor intensity in man-months</Typography>
        </Box>
    )
}