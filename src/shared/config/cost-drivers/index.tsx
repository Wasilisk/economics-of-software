import { CostDriveType } from "./types";

export const costDrivers: CostDriveType[] = [
    {
        id: "RELY",
        name: "Required Software Reliability",
        values: {
            very_low: 0.75,
            low: 0.88,
            average: 1,
            high: 1.15,
            very_high: 1.4,
            critical: 0
        }
    },
    {
        id: "DATA",
        name: "Size of Application Database",
        values: {
            very_low: 0,
            low: 0.94,
            average: 1,
            high: 1.08,
            very_high: 1.16,
            critical: 0
        }
    },
    {
        id: "CPLX",
        name: "Complexity of the Product",
        values: {
            very_low: 0.7,
            low: 0.85,
            average: 1,
            high: 1.15,
            very_high: 1.3,
            critical: 1.65
        }
    },
    {
        id: "TIME",
        name: "Run-Time Performance Constraints",
        values: {
            very_low: 0,
            low: 0,
            average: 1,
            high: 1.11,
            very_high: 1.3,
            critical: 1.65
        }
    },
    {
        id: "STOR",
        name: "Memory Constraints",
        values: {
            very_low: 0,
            low: 0,
            average: 1,
            high: 1.06,
            very_high: 1.21,
            critical: 1.56
        }
    },
    {
        id: "VIRT",
        name: "Volatility of the Virtual Machine Environment",
        values: {
            very_low: 0,
            low: 0.87,
            average: 1,
            high: 1.15,
            very_high: 1.3,
            critical: 0
        }
    },
    {
        id: "TURN",
        name: "Required Turnabout Time",
        values: {
            very_low: 0,
            low: 0.87,
            average: 1,
            high: 1.07,
            very_high: 1.15,
            critical: 0
        }
    },
    {
        id: "ACAP",
        name: "Analyst Capability",
        values: {
            very_low: 1.46,
            low: 1.19,
            average: 1,
            high: 0.86,
            very_high: 0.71,
            critical: 0
        }
    },
    {
        id: "AEXP",
        name: "Applications Experience",
        values: {
            very_low: 1.42,
            low: 1.17,
            average: 1,
            high: 0.86,
            very_high: 0.7,
            critical: 0
        }
    },
    {
        id: "PCAP",
        name: "Software Engineer Capability",
        values: {
            very_low: 1.29,
            low: 1.13,
            average: 1,
            high: 0.91,
            very_high: 0.82,
            critical: 0
        }
    },
    {
        id: "VEXP",
        name: "Virtual Machine Experience",
        values: {
            very_low: 1.21,
            low: 1.1,
            average: 1,
            high: 0.9,
            very_high: 0,
            critical: 0
        }
    },
    {
        id: "LEXP",
        name: "Programming Language Experience",
        values: {
            very_low: 1.14,
            low: 1.07,
            average: 1,
            high: 0.95,
            very_high: 0,
            critical: 0
        }
    },
    {
        id: "MODP",
        name: "Application of Software Engineering Methods",
        values: {
            very_low: 1.24,
            low: 1.1,
            average: 1,
            high: 0.91,
            very_high: 0.83,
            critical: 0
        }
    },
    {
        id: "TOOL",
        name: "Use of Software Tools",
        values: {
            very_low: 1.24,
            low: 1.1,
            average: 1,
            high: 0.91,
            very_high: 0.82,
            critical: 0
        }
    },
    {
        id: "SCED",
        name: "Required Development Schedule",
        values: {
            very_low: 1.23,
            low: 1.08,
            average: 1,
            high: 1.04,
            very_high: 1.1,
            critical: 0
        }
    },
]