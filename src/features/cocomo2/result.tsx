import { useContext } from "react";

import { Cocomo2Context } from "shared/libs/context/cocomo2";
import { Box } from "shared/ui/box";
import { Typography } from "shared/ui/typography";

export const Cocomo2Result = () => {
    const { modelResults } = useContext(Cocomo2Context);
    const { laborIntensive, projectDuration, personnelCount } = modelResults;

    return (
        <Box display="flex">
            <Box flex={1} pl={3} borderRight="1px solid #ced6e0">
                <Typography variant="h3">{laborIntensive.toPrecision(3)}</Typography>
                <Typography>Labor intensity in man-months</Typography>
            </Box>
            <Box flex={1} pl={3} borderRight="1px solid #ced6e0">
                <Typography variant="h3">{projectDuration.toPrecision(3)}</Typography>
                <Typography>Duration of the project</Typography>
            </Box>
            <Box flex={1} pl={3}>
                <Typography variant="h3">
                    {
                        isNaN(personnelCount)
                            ? (0).toPrecision(3) :
                            personnelCount.toPrecision(3)
                    }</Typography>
                <Typography>The number of personnel</Typography>
            </Box>
        </Box>
    )
}