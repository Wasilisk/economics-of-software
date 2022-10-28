import { useContext } from "react";

import { FunctionalPointContext } from "shared/libs/context/functional-point";

import { Box } from "shared/ui/box";
import { Typography } from "shared/ui/typography";

export const FunctionalPontResult = () => {
    const { modelResults } = useContext(FunctionalPointContext);
    const { adjustingComplexityFactor, adjustedFunctionalPoints, convertToLOC } = modelResults;

    return (
        <Box display="flex">
            <Box flex={1} pl={3} borderRight="1px solid #ced6e0">
                <Typography variant="h3">{adjustingComplexityFactor.toPrecision(3)}</Typography>
                <Typography>Adjusting complexity factor</Typography>
            </Box>
            <Box flex={1} pl={3} borderRight="1px solid #ced6e0">
                <Typography variant="h3">{Boolean(convertToLOC) ? adjustedFunctionalPoints.toPrecision(4) : 0}</Typography>
                <Typography>Adjusted functional points</Typography>
            </Box>
            <Box flex={1} pl={3}>
            <Typography variant="h3">{Boolean(convertToLOC) ? convertToLOC.toPrecision(5) : 0}</Typography>
                <Typography>LOC string conversion</Typography>
            </Box>
        </Box>
    )
}