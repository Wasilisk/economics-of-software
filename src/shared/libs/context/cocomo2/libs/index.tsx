import { cocomo2Coefficients } from "shared/config/cocomo2-coefficient";
import { getProductOfMultipliers, getSumOfTheFactors } from "shared/libs/context/libs";
import { ContextMultiplierValuesType } from "shared/libs/context/types";

import { CalculateCocomo2FunctionsType } from "./types";

export const calculateLaborIntensive = ({ projectStage, earlyDesignValues, postArchitectureValues, scaleFactorValues, thousandsLinesOfCode }: CalculateCocomo2FunctionsType) => {
    const { a, b } = cocomo2Coefficients[projectStage]
    let effortMultipliers = 0;

    if (projectStage === "early_design") {
        effortMultipliers = getProductOfMultipliers(earlyDesignValues)
    } else if (projectStage === "post_architecture") {
        effortMultipliers = getProductOfMultipliers(postArchitectureValues)
    }

    const e = b + (0.01 * getSumOfTheFactors(scaleFactorValues));
    const laborIntensive = effortMultipliers * a * (thousandsLinesOfCode ** e);

    return laborIntensive;
}

export const calculateProjectDuration = ({projectStage, earlyDesignValues, postArchitectureValues, scaleFactorValues, thousandsLinesOfCode}: CalculateCocomo2FunctionsType) => {
    const { a, b, c, d } = cocomo2Coefficients[projectStage]
        let effortMultipliers = 0;
        let developmentSchedule = 0;

        if (projectStage === "early_design") {
            effortMultipliers = getProductOfMultipliers(getMultipliersWithoutSCED(earlyDesignValues));
            developmentSchedule = earlyDesignValues["SCED"];
        } else if (projectStage === "post_architecture") {
            effortMultipliers = getProductOfMultipliers(getMultipliersWithoutSCED(postArchitectureValues));
            developmentSchedule = postArchitectureValues["SCED"];
        }

        const e = b + (0.01 * getSumOfTheFactors(scaleFactorValues));
        const laborIntensive = effortMultipliers * a * (thousandsLinesOfCode ** e);
        const projectDuration = effortMultipliers * c * (laborIntensive ** (d + 0.2 * (e - b)));

        return projectDuration;
}

export const getMultipliersWithoutSCED = (multiplierValues: ContextMultiplierValuesType) => {
    const multiplierValuesCopy = structuredClone(multiplierValues);
    delete multiplierValuesCopy["SCED"];
  
    return multiplierValuesCopy;
  }