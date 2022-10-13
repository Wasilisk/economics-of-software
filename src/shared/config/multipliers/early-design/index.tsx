import { MultipliyerType } from "../types";

export const earlyDesignMultipliers: MultipliyerType[] = [
    {
        id: "PERS",
        name: "Personnel Capability",
        values: {
            extra_low: 2.12,
            very_low: 1.62,
            low: 1.16,
            average: 1.00,
            high: 0.83,
            very_high: 0.63,
            critical: 0.50
        }
    },
    {
        id: "PREX",
        name: "Personnel Experience",
        values: {
            extra_low: 1.59,
            very_low: 1.33,
            low: 1.22,
            average: 1.00,
            high: 0.87,
            very_high: 0.74,
            critical: 0.62
        }
    },
    {
        id: "RCPX",
        name: "Product Reliability and Complexity",
        values: {
            extra_low: 0.49,
            very_low: 0.60,
            low: 0.83,
            average: 1.00,
            high: 1.33,
            very_high: 1.91,
            critical: 2.72
        }
    },
    {
        id: "RUSE",
        name: "Developed for Reusability",
        values: {
            extra_low: null,
            very_low: null,
            low: 0.95,
            average: 1.00,
            high: 1.07,
            very_high: 1.15,
            critical: 1.24
        }
    },
    {
        id: "PDIF",
        name: "Platform Difficulty",
        values: {
            extra_low: null,
            very_low: null,
            low: 0.87,
            average: 1.00,
            high: 1.29,
            very_high: 1.81,
            critical: 2.61
        }
    },
    {
        id: "FCIL",
        name: "Facilities",
        values: {
            extra_low: 1.43,
            very_low: 1.30,
            low: 1.10,
            average: 1.00,
            high: 0.87,
            very_high: 0.73,
            critical: 0.62
        }
    },
    {
        id: "SCED",
        name: "Required Development Schedule",
        values: {
            extra_low: null,
            very_low: 1.43,
            low: 1.14,
            average: 1,
            high: 1.0000001,
            very_high: null,
            critical: null
        }
    }
]