import { useContext } from "react";

import {
    ChangeLinesOfCode,
    ChangeStage,
    Cocomo2Result,
    EarlyDesignMultipliers,
    PostArchitectureMultipliers,
    ScaleFactors
} from "features/cocomo2";

import { Cocomo2Context } from "shared/libs/context/cocomo2";

import { Typography } from "shared/ui/typography";
import { Divider } from "shared/ui/divider";
import { Stack } from "shared/ui/stack";
import { Cocomo2CoefficientTable } from "shared/ui/tables/cocomo2-coefficient";

export const Cocomo2Calculator = () => {
    const { projectStage } = useContext(Cocomo2Context)

    return (
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
                    <Typography mr={1}>Stage of project</Typography>
                    <ChangeStage />
                </Stack>
                <Stack direction="row" alignItems="center">
                    <Typography mr={1}>We need to write</Typography>
                    <ChangeLinesOfCode />
                    <Typography ml={1}>thousands of lines of code</Typography>
                </Stack>
            </Stack>
            <Cocomo2Result />
            <Cocomo2CoefficientTable />
            <ScaleFactors />
            {projectStage === "early_design" && <EarlyDesignMultipliers />}
            {projectStage === "post_architecture" && <PostArchitectureMultipliers />}
        </Stack>
    )
}