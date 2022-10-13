import {
    CocomoResult,
    ChangeCommand,
    ChangeLinesOfCode,
    EquestionResult,
    CostDrivers
} from "features/cocomo"

import { Typography } from "shared/ui/typography";
import { Divider } from "shared/ui/divider";
import { Stack } from "shared/ui/stack";
import { IntermediateCoefficientTable, BasicCoefficientTable } from "shared/ui/tables";

export const CocomoCalculator = () => (
    <Stack
        my={4}
        spacing={4}
        divider={<Divider />}
    >
        <Stack
            direction="row"
            justifyContent="space-around"
        >
            <Stack direction="row" alignItems="center">
                <Typography mr={1}>We have a</Typography>
                <ChangeCommand />
                <Typography ml={1}>team</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
                <Typography mr={1}>and we need to write</Typography>
                <ChangeLinesOfCode />
                <Typography ml={1}>thousands of lines of code</Typography>
            </Stack>
        </Stack>
        <EquestionResult />
        <Stack spacing={2}>
            <BasicCoefficientTable />
            <IntermediateCoefficientTable />
        </Stack>
        <CocomoResult />
        <CostDrivers />
    </Stack>
)