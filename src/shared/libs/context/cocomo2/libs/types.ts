import { ContextMultiplierValuesType } from "shared/libs/context/types"

import { Cocomo2StageType } from "../types"

export type CalculateCocomo2FunctionsType = {
    projectStage: Cocomo2StageType,
    earlyDesignValues: ContextMultiplierValuesType,
    postArchitectureValues: ContextMultiplierValuesType,
    scaleFactorValues: ContextMultiplierValuesType,
    thousandsLinesOfCode: number
}