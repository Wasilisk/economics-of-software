import { useContext } from "react"

import { CocomoContext } from "shared/libs/context/cocomo"
import { Box } from "shared/ui/box"
import { Typography } from "shared/ui/typography";

export const EquestionResult = () => {
    const { modelResults } = useContext(CocomoContext);
    const { laborIntensive, developmentTime, averageNumberOfPersonnel } = modelResults;

    return (
        <Box display="flex">
            <Box flex={1} pl={3} borderRight="1px solid #ced6e0">
                <Typography variant="h3">{laborIntensive.toPrecision(3)}</Typography>
                <Typography>Person-months</Typography>
            </Box>
            <Box flex={1} pl={3} borderRight="1px solid #ced6e0">
                <Typography variant="h3">{developmentTime.toPrecision(3)}</Typography>
                <Typography>Months</Typography>
            </Box>
            <Box flex={1} pl={3}>
                <Typography variant="h3">{
                    isNaN(averageNumberOfPersonnel)
                        ? (0).toPrecision(3) :
                        averageNumberOfPersonnel.toPrecision(3)
                }</Typography>
                <Typography>Personnel</Typography>
            </Box>
        </Box>
    )
}