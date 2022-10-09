
import { CostDriversTable } from "widgets/tables/cost-drivers/ui";

import { Result, ChangeCommand, ChangeLinesOfCode, EquestionResult } from "features/cocomo"

import { Box } from "shared/ui/box";
import { Typography } from "shared/ui/typography";
import { Divider } from "shared/ui/divider";
import { Stack } from "shared/ui/stack";
import { BasicCoefficientTable } from "widgets/tables/basic-coefficient";
import { IntermediateCoefficientTable } from "widgets/tables/intermediate-coefficient";

export const CocomoCalculator = () => (
    <Stack
        my={4}
        spacing={4}
        divider={<Divider />}
    >
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
        <EquestionResult />
        <Stack spacing={2}>
            <BasicCoefficientTable />
            <IntermediateCoefficientTable />
        </Stack>
        <Result />
        <CostDriversTable />
    </Stack>
)