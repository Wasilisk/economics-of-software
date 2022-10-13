import { MultipliyerType } from "../types";

export const scaleFactors: MultipliyerType[] = [
    {
        id: "PREC",
        name: "Preceden -tedness",
        values: {
            very_low: 6.20,
            low: 4.96,
            average: 3.72,
            high: 2.48,
            very_high: 1.24,
            critical: 0
        }
    },
    {
        id: "FLEX",
        name: "Development Flexibility",
        values: {
            very_low: 5.07,
            low: 4.05,
            average: 3.04,
            high: 2.03,
            very_high: 1.01,
            critical: 0
        }
    },
    {
        id: "RESL",
        name: "Architecture / Risk Resolution",
        values: {
            very_low: 7.07,
            low: 5.65,
            average: 4.24,
            high: 2.83,
            very_high: 1.41,
            critical: 0
        }
    },
    {
        id: "TEAM",
        name: "Team Cohesion",
        values: {
            very_low: 5.48,
            low: 4.38,
            average: 3.29,
            high: 2.19,
            very_high: 1.10,
            critical: 0
        }
    },
    {
        id: "PMAT",
        name: "Process Maturity",
        values: {
            very_low: 7.80,
            low: 6.24,
            average: 4.68,
            high: 3.12,
            very_high: 1.56,
            critical: 0
        }
    },
]