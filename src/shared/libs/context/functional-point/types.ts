import { Dispatch, ReactNode, SetStateAction } from "react"

import { ContextMultiplierValuesType } from "../types"

export type FPContextType = {
    levelsFactorsValues: LevelsFactorsValuesType,
    setLevelsFactorsValues: Dispatch<SetStateAction<LevelsFactorsValuesType>>,
    environmentalFactorsValue: ContextMultiplierValuesType,
    setEnvironmentalFactorsValue: Dispatch<SetStateAction<ContextMultiplierValuesType>>,
    programmingLanguage: number,
    setProgrammingLanguage: Dispatch<SetStateAction<number>>,
    modelResults: FPModelResultType
}

export type LevelsFactorsValuesType = {
    [key: string]: {
        factor: number,
        value: number
    }
}

export type FPModelResultType = {
    adjustingComplexityFactor: number,
    adjustedFunctionalPoints: number,
    convertToLOC: number
}

export type FPProviderProps = {
    children: ReactNode
}