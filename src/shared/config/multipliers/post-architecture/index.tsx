import { MultipliyerType } from "../types";

export const postArchitectureMultipliers: MultipliyerType[] = [
    {
        id: "ACAP",
        name: "Analyst Capability",
        values: {
            very_low: 1.42,
            low: 1.29,
            average: 1.00,
            high: 0.85,
            very_high: 0.71,
            critical: null
        }
    },
    {
        id: "AEXP",
        name: "Applications Experience",
        values: {
            very_low: 1.22,
            low: 1.10,
            average: 1.00,
            high: 0.88,
            very_high: 0.81,
            critical: null
        }
    },
    {
        id: "PCAP",
        name: "Programmer Capability",
        values: {
            very_low: 1.34,
            low: 1.15,
            average: 1.00,
            high: 0.88,
            very_high: 0.76,
            critical: null
        }
    },
    {
        id: "PCON",
        name: "Personnel Continuity",
        values: {
            very_low: 1.29,
            low: 1.12,
            average: 1.00,
            high: 0.90,
            very_high: 0.81,
            critical: null
        }
    },
    {
        id: "PEXP",
        name: "Platform Experience",
        values: {
            very_low: 1.19,
            low: 1.09,
            average: 1.00,
            high: 0.91,
            very_high: 0.85,
            critical: null
        }
    },
    {
        id: "LTEX",
        name: "Language and Tool Experience",
        values: {
            very_low: 1.20,
            low: 1.09,
            average: 1.00,
            high: 0.91,
            very_high: 0.84,
            critical: null
        }
    },
    {
        id: "RELY",
        name: "Required Software Reliability",
        values: {
            very_low: 0.84,
            low: 0.92,
            average: 1.00,
            high: 1.10,
            very_high: 1.26,
            critical: null
        }
    },
    {
        id: "DATA",
        name: "Database Size",
        values: {
            very_low: null,
            low: 0.23,
            average: 1.00,
            high: 1.14,
            very_high: 1.28,
            critical: null
        }
    },
    {
        id: "CPLX",
        name: "Software Product Complexity",
        values: {
            very_low: 0.73,
            low: 0.87,
            average: 1.00,
            high: 1.17,
            very_high: 1.34,
            critical: 1.74
        }
    },
    {
        id: "RUSE",
        name: "Required Reusability",
        values: {
            very_low: null,
            low: 0.95,
            average: 1.00,
            high: 1.07,
            very_high: 1.15,
            critical: 1.24
        }
    },
    {
        id: "DOCU",
        name: "Documentation Match to Life-Cycle Needs",
        values: {
            very_low: 0.81,
            low: 0.91,
            average: 1.00,
            high: 1.11,
            very_high: 1.23,
            critical: null
        }
    },
    {
        id: "TIME",
        name: "Execution Time Constraint",
        values: {
            very_low: null,
            low: null,
            average: 1.00,
            high: 1.11,
            very_high: 1.29,
            critical: 1.63
        }
    },
    {
        id: "STOR",
        name: "Main Storage Constraint",
        values: {
            very_low: null,
            low: null,
            average: 1.00,
            high: 1.05,
            very_high: 1.17,
            critical: 1.46
        }
    },
    {
        id: "PVOL",
        name: "Platform Volatility",
        values: {
            very_low: null,
            low: 0.87,
            average: 1.00,
            high: 1.15,
            very_high: 1.30,
            critical: null
        }
    },
    {
        id: "TOOL",
        name: "Use of Software Tools",
        values: {
            very_low: 1.17,
            low: 1.09,
            average: 1.00,
            high: 0.90,
            very_high: 0.78,
            critical: null
        }
    },
    {
        id: "SITE",
        name: "Multisite Development",
        values: {
            very_low: 1.22,
            low: 1.09,
            average: 1.00,
            high: 0.93,
            very_high: 0.86,
            critical: 0.80
        }
    },
    {
        id: "SCED",
        name: "Required Development Schedule",
        values: {
            very_low: 1.43,
            low: 1.14,
            average: 1.00,
            high: 0.9999999,
            very_high: 0.9999998,
            critical: null
        }
    }
]
