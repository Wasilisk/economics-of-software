import { createContext, useEffect, useState } from "react";

import { ContextMultiplierValuesType } from "../types";

import { FPProviderProps, LevelsFactorsValuesType, FPContextType } from "./types";


export const FunctionalPointContext = createContext({} as FPContextType);

export const FunctionalPointProvider = ({ children }: FPProviderProps) => {
    const [levelsFactorsValues, setLevelsFactorsValues] = useState<LevelsFactorsValuesType>({
        "ILF": {
            value: 0,
            factor: 7
        },
        "EIF": {
            value: 0,
            factor: 5
        },
        "EI": {
            value: 0,
            factor: 3
        },
        "EO": {
            value: 0,
            factor: 4
        },
        "EQ": {
            value: 0,
            factor: 3
        },
    });

    const [environmentalFactorsValue, setEnvironmentalFactorsValue] = useState<ContextMultiplierValuesType>({
        "DC": 0,
        "DF": 0,
        "PER": 0,
        "HUC": 0,
        "TR": 0,
        "OU": 0,
        "ODE": 0,
        "EUE": 0,
        "CP": 0,
        "RES": 0,
        "IE": 0,
        "OE": 0,
        "MS": 0,
        "FC": 0,
    })

    const [programmingLanguage, setProgrammingLanguage] = useState(53);
    const [modelResults, setModelResults] = useState({
        adjustingComplexityFactor: 0,
        adjustedFunctionalPoints: 0,
        convertToLOC: 0
    })

    useEffect(() => {

        const N = Object.values(environmentalFactorsValue).reduce((sum, factorValue: number) => sum + factorValue, 0)
        const adjustingComplexityFactor = 0.65 + (0.01 * N)

        const FP = Object.values(levelsFactorsValues).reduce((sum: number, level: {factor: number, value: number}) => sum + (level.factor * level.value), 0)
        const adjustedFunctionalPoints = FP * adjustingComplexityFactor

        const convertToLOC = adjustedFunctionalPoints * programmingLanguage;

        setModelResults({
            adjustingComplexityFactor,
            adjustedFunctionalPoints,
            convertToLOC
        })
    }, [levelsFactorsValues, environmentalFactorsValue, programmingLanguage])

    return (
        <FunctionalPointContext.Provider value={{
            levelsFactorsValues,
            setLevelsFactorsValues,
            environmentalFactorsValue,
            setEnvironmentalFactorsValue,
            programmingLanguage,
            setProgrammingLanguage,
            modelResults
        }}>
            {children}
        </FunctionalPointContext.Provider>
    )
}