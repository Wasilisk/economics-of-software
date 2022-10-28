import { ReactNode } from "react";

import { FunctionalPointProvider } from "shared/libs/context/functional-point";

export const withFunctionalPoint = (component: () => ReactNode) => () => (
    <FunctionalPointProvider>
        {component()}
    </FunctionalPointProvider>
)