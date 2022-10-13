import { createContext, useEffect, useState } from "react";

import { cocomoBasicCoefficients } from "shared/config/cocomo-coefficient/basic";
import { cocomoIntermediateCoefficients } from "shared/config/cocomo-coefficient/intermediate";

import { getProductOfMultipliers } from "../libs";
import { ContextMultiplierValuesType } from "../types";
import {
    CocomoCommandType,
    CocomoContextType,
    CocomoModelResultType,
    CocomoProviderProps,
} from "./types";

export const CocomoContext = createContext({} as CocomoContextType);

export const CocomoProvider = ({ children }: CocomoProviderProps) => {
    const [costDriversValues, setCostDriversValues] = useState<ContextMultiplierValuesType>({
        "RELY": 1,
        "DATA": 1,
        "CPLX": 1,
        "TIME": 1,
        "STOR": 1,
        "VIRT": 1,
        "TURN": 1,
        "ACAP": 1,
        "AEXP": 1,
        "PCAP": 1,
        "VEXP": 1,
        "LEXP": 1,
        "MODP": 1,
        "TOOL": 1,
        "SCED": 1
    });

    const [command, setCommand] = useState<CocomoCommandType>("organic");
    const [thousandsLinesOfCode, setThousandsLinesOfCode] = useState(0)

    const [modelResults, setModelResult] = useState<CocomoModelResultType>({
        laborIntensive: 0,
        averageNumberOfPersonnel: 0,
        developmentTime: 0,
        laborIntensityInManMonths: 0
    })

    useEffect(() => {
        const { a, b, c, d } = cocomoBasicCoefficients[command]
        const { a: a1, b: b1 } = cocomoIntermediateCoefficients[command]

        const laborIntensive = a * (thousandsLinesOfCode ** b);
        const developmentTime = c * (laborIntensive ** d);
        const averageNumberOfPersonnel = laborIntensive / developmentTime;

        const laborIntensityInManMonths = getProductOfMultipliers(costDriversValues) * a1 * (thousandsLinesOfCode ** b1);

        setModelResult({
            laborIntensive,
            developmentTime,
            averageNumberOfPersonnel,
            laborIntensityInManMonths
        })

    }, [costDriversValues, command, thousandsLinesOfCode])

    return (
        <CocomoContext.Provider value={{
            command,
            setCommand,
            thousandsLinesOfCode,
            setThousandsLinesOfCode,
            costDriversValues,
            setCostDriversValues,
            modelResults
        }}>
            {children}
        </CocomoContext.Provider>
    )
}