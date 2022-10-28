import { MultipliyerType } from "../types";

export const environmentalFactors: Omit<MultipliyerType, "values">[] = [
    {
        id: "DC",
        name: "Data Communications"
    },
    {
        id: "DF",
        name: "Distributed Functions"
    },
    {
        id: "PER",
        name: "Performance"
    },
    {
        id: "HUC",
        name: "Heavily Used Configuration"
    },
    {
        id: "TR",
        name: "Transaction Rate"
    },
    {
        id: "ODE",
        name: "Online Data Entry"
    },
    {
        id: "EUE",
        name: "End User Efficiency"
    },
    {
        id: "CP",
        name: "Complex Processing"
    },
    {
        id: "OU",
        name: "Online Update"
    },
    {
        id: "RES",
        name: "Reusability"
    },
    {
        id: "IE",
        name: "Installation Ease"
    },
    {
        id: "OE",
        name: "Operational Ease"
    },
    {
        id: "MS",
        name: "Multiple Sites"
    },
    {
        id: "FC",
        name: "Facilitate Change"
    }
]