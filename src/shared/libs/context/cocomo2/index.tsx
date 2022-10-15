import { createContext, useEffect, useState } from "react";
import { ContextMultiplierValuesType } from "../types";

import { calculateLaborIntensive, calculateProjectDuration } from "./libs";
import { Cocomo2ContextType, Cocomo2ModelResultType, Cocomo2ProviderProps, Cocomo2StageType } from "./types";

export const Cocomo2Context = createContext({} as Cocomo2ContextType);

export const Cocomo2Provider = ({ children }: Cocomo2ProviderProps) => {
    const [postArchitectureValues, setPostArchitectureValues] = useState<ContextMultiplierValuesType>({
        "ACAP": 1,
        "AEXP": 1,
        "PCAP": 1,
        "PCON": 1,
        "PEXP": 1,
        "LTEX": 1,
        "RELY": 1,
        "DATA": 1,
        "CPLX": 1,
        "RUSE": 1,
        "DOCU": 1,
        "TIME": 1,
        "STOR": 1,
        "PVOL": 1,
        "TOOL": 1,
        "SITE": 1,
        "SCED": 1
    });

    const [earlyDesignValues, setEarlyDesignValues] = useState<ContextMultiplierValuesType>({
        "PERS": 1,
        "PREX": 1,
        "RCPX": 1,
        "RUSE": 1,
        "PDIF": 1,
        "FCIL": 1,
        "SCED": 1
    })

    const [scaleFactorValues, setScaleFactorValues] = useState<ContextMultiplierValuesType>({
        "PREC": 3.72,
        "FLEX": 3.04,
        "RESL": 4.24,
        "TEAM": 3.29,
        "PMAT": 4.68
    })

    const [projectStage, setProjectStage] = useState<Cocomo2StageType>("early_design");
    const [thousandsLinesOfCode, setThousandsLinesOfCode] = useState(0)

    const [modelResults, setModelResult] = useState<Cocomo2ModelResultType>({
        laborIntensive: 0,
        projectDuration: 0,
        personnelCount: 0
    })

    useEffect(() => {
        const laborIntensive = calculateLaborIntensive({
            projectStage,
            earlyDesignValues,
            postArchitectureValues,
            scaleFactorValues,
            thousandsLinesOfCode
        });

        const projectDuration = calculateProjectDuration({
            projectStage,
            earlyDesignValues,
            postArchitectureValues,
            scaleFactorValues,
            thousandsLinesOfCode
        });

        const personnelCount = laborIntensive / projectDuration;

        setModelResult({
            laborIntensive,
            projectDuration,
            personnelCount
        })

    }, [earlyDesignValues, postArchitectureValues, scaleFactorValues, projectStage, thousandsLinesOfCode])

    return (
        <Cocomo2Context.Provider value={{
            projectStage,
            setProjectStage,
            thousandsLinesOfCode,
            setThousandsLinesOfCode,
            postArchitectureValues,
            setPostArchitectureValues,
            scaleFactorValues,
            setScaleFactorValues,
            earlyDesignValues,
            setEarlyDesignValues,
            modelResults
        }}>
            {children}
        </Cocomo2Context.Provider>
    )
}