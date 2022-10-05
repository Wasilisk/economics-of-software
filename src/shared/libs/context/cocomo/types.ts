import { Dispatch, ReactNode, SetStateAction } from "react"

export type CocomoContextType = {
    command: CocomoCommandType,
    thousandsLinesOfCode: number,
    costDrivers: CostDriversInitialValueType,
    modelResults: CocomoModelResultType,
    setCommand: Dispatch<SetStateAction<CocomoCommandType>>,
    setThousandsLinesOfCode: Dispatch<SetStateAction<number>>,
    setCostDrivers: Dispatch<SetStateAction<CostDriversInitialValueType>>,
}

export type CostDriversInitialValueType = {
    [key: string]: number
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