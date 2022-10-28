import { MultipliyerType } from "../types"

export type NumbersOfLogicalLinesType = Omit<MultipliyerType, "values"> & {
    value: number
}