import { CocomoProjectSetting } from "widgets/cocomo/project-setting/ui";
import { CocomoEquestionResults } from "widgets/cocomo/equestion-results/ui";
import { CocomoFinalResult } from "widgets/cocomo/final-result/ui";
import { CoefficientTable } from "widgets/tables/coefficient/ui";
import { CostDriversTable } from "widgets/tables/cost-drivers/ui";

import { Divider } from "shared/ui/divider";
import { Stack } from "shared/ui/stack";

export const CocomoCalculator = () => (
    <Stack
        my={4}
        spacing={4}
        divider={<Divider />}
    >
        <CocomoProjectSetting />
        <CocomoEquestionResults />
        <CoefficientTable />
        <CocomoFinalResult />
        <CostDriversTable />
    </Stack>
)