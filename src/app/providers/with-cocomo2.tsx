import { ReactNode } from "react";

import { Cocomo2Provider } from "shared/libs/context/cocomo2";

export const withCocomo2 = (component: () => ReactNode) => () => (
    <Cocomo2Provider>
        {component()}
    </Cocomo2Provider>
)