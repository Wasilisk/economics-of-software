export type CostDriveValuesVariants= "very_low" | "low" | "average" | "high" | "very_high" | "critical"

export type CostDriveValues = {
    [key: string]: number | null
}

export type CostDriveType = {
    id: string,
    name: string,
    values: CostDriveValues
}