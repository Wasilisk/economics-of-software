import {
    SetLevelsFactors,
    SetEnvironmentalFactors,
    SetProgrammingLanguage,
    FunctionalPontResult
} from "features/functional-point";

import { Divider } from "shared/ui/divider";
import { Stack } from "shared/ui/stack";

export const FunctionalPoint = () => (
    <Stack
        my={4}
        spacing={4}
        divider={<Divider />}
    >
        <FunctionalPontResult />
        <SetLevelsFactors />
        <SetEnvironmentalFactors />
        <SetProgrammingLanguage />
    </Stack>
)