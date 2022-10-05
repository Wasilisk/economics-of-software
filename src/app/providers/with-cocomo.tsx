import { ReactNode } from "react";

import { CocomoProvider } from "shared/libs/context/cocomo";

export const withCocomo = (component: () => ReactNode) => () => (
    <CocomoProvider>
        {component()}
    </CocomoProvider>
)