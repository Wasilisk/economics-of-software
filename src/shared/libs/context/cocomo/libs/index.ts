import { CostDriversInitialValueType } from "../types";

export const getMultiplyOfCostDrivers = (costDrivers: CostDriversInitialValueType) => {
    const costDriversValues = Object.values(costDrivers);

    return costDriversValues.reduce((accumulator, value) => {
        return accumulator * value;
      }, 1);
}