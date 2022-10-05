import { ChangeCommand } from "features/change-command/ui";
import { ChangeLinesOfCode } from "features/change-lines-of-code/ui";

import { Box } from "shared/ui/box";
import { Typography } from "shared/ui/typography";

export const CocomoProjectSetting = () => (
    <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
    >
        <Box display="flex" flexDirection="row" alignItems="center">
            <Typography mr={1}>We have a</Typography>
            <ChangeCommand />
            <Typography ml={1}>team</Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
            <Typography mr={1}>and we need to write</Typography>
            <ChangeLinesOfCode />
            <Typography ml={1}>thousands of lines of code</Typography>
        </Box>
    </Box>
)