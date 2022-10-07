import { createContext, useEffect, useState } from "react";

import { cocomoCoefficients } from "shared/config/cocomo-coefficient";

import { getMultiplyOfCostDrivers } from "./libs";
import {
    CocomoCommandType,
    CocomoContextType,
    CocomoModelResultType,
    CocomoProviderProps,
    CostDriversInitialValueType
} from "./types";

export const CocomoContext = createContext<CocomoContextType | null>(null);

export const CocomoProvider = ({ children }: CocomoProviderProps) => {
    const [costDrivers, setCostDrivers] = useState<CostDriversInitialValueType>({
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
        const { a, b, c, d } = cocomoCoefficients[command]

        const laborIntensive = a * (thousandsLinesOfCode ** b);
        const developmentTime = c * (laborIntensive ** d);
        const averageNumberOfPersonnel = laborIntensive / developmentTime;

        const laborIntensityInManMonths = getMultiplyOfCostDrivers(costDrivers) * a * (thousandsLinesOfCode ** b);

        setModelResult({
            laborIntensive,
            developmentTime,
            averageNumberOfPersonnel,
            laborIntensityInManMonths
        })

    }, [costDrivers, command, thousandsLinesOfCode])

    return (
        <CocomoContext.Provider value={{
            command,
            setCommand,
            thousandsLinesOfCode,
            setThousandsLinesOfCode,
            costDrivers,
            setCostDrivers,
            modelResults
        }}>
            {children}
        </CocomoContext.Provider>
    )
}