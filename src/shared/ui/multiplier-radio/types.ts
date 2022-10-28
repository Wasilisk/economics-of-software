import { ReactNode } from "react";

import { MultipliyerType } from "shared/config/multipliers";

export type MultiplierRadioProps = MultipliyerType & {
    onChange: (id: string, value: number) => void,
    defaultValue?: number,
    roundFloat?: number,
    additionalComponent?: ReactNode
}