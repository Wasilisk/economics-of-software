import { Dispatch, ReactNode, SetStateAction } from "react"
import { ContextMultiplierValuesType } from "../types";

export type CocomoContextType = {
    command: CocomoCommandType,
    thousandsLinesOfCode: number,
    costDriversValues: ContextMultiplierValuesType,
    modelResults: CocomoModelResultType,
    setCommand: Dispatch<SetStateAction<CocomoCommandType>>,
    setThousandsLinesOfCode: Dispatch<SetStateAction<number>>,
    setCostDriversValues: Dispatch<SetStateAction<ContextMultiplierValuesType>>,
}

export type CocomoModelResultType = {
    laborIntensive: number,
    averageNumberOfPersonnel: number,
    developmentTime: number,
    laborIntensityInManMonths: number
}

export type CocomoCommandType = "organic" | "semidetach" | "embedded";

export type CocomoProviderProps = {
    children: ReactNode
}