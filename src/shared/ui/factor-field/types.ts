import { MultipliyerType } from "shared/config/multipliers"

export type FactorFieldProps = MultipliyerType & {
    value: number,
    onChange: (id: string, value: number) => void
}