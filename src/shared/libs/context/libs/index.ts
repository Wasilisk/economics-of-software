import { ContextMultiplierValuesType } from "../types";

export const getProductOfMultipliers = (multiplierValues: ContextMultiplierValuesType) => {
    const costDriversValues = Object.values(multiplierValues);

    return costDriversValues.reduce((accumulator, value) => {
        return accumulator * value;
      }, 1);
}

export const getSumOfTheFactors = (multiplierValues: ContextMultiplierValuesType) => {
  const costDriversValues = Object.values(multiplierValues);

  return costDriversValues.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
}