import { MultipliyerType } from "../types";

export const levelsFactors: MultipliyerType[] = [
    {
        id: "ILF",
        name: "Internal Logical File",
        values: {
            low: 7,
            average: 10,
            high: 15
        }
    },
    {
        id: "EIF",
        name: "External Interface File",
        values: {
            low: 5,
            average: 7,
            high: 10
        }
    },
    {
        id: "EI",
        name: "External Input",
        values: {
            low: 3,
            average: 4,
            high: 6
        }
    },
    {
        id: "EO",
        name: "External Output",
        values: {
            low: 4,
            average: 5,
            high: 7
        }
    },
    {
        id: "EQ",
        name: "External Inquiry",
        values: {
            low: 3,
            average: 4,
            high: 6
        }
    }
]