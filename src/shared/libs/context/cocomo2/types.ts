import { Dispatch, ReactNode, SetStateAction } from "react"

import { ContextMultiplierValuesType } from "../types"

export type Cocomo2ContextType = {
    projectStage: Cocomo2StageType,
    setProjectStage: Dispatch<SetStateAction<Cocomo2StageType>>,
    thousandsLinesOfCode: number,
    setThousandsLinesOfCode: Dispatch<SetStateAction<number>>,
    postArchitectureValues: ContextMultiplierValuesType,
    setPostArchitectureValues: Dispatch<SetStateAction<ContextMultiplierValuesType>>,
    scaleFactorValues: ContextMultiplierValuesType,
    setScaleFactorValues: Dispatch<SetStateAction<ContextMultiplierValuesType>>,
    earlyDesignValues: ContextMultiplierValuesType,
    setEarlyDesignValues: Dispatch<SetStateAction<ContextMultiplierValuesType>>,
    modelResults: Cocomo2ModelResultType
}

export type Cocomo2ModelResultType = {
    laborIntensive: number,
    projectDuration: number,
    personnelCount: number
}

export type Cocomo2StageType = "early_design" | "post_architecture";

export type Cocomo2ProviderProps = {
    children: ReactNode
}