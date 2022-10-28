import compose from "compose-function";

import { withCocomo } from "./with-cocomo";
import { withCocomo2 } from "./with-cocomo2";
import { withFunctionalPoint } from "./with-functional-point";
import { withRouter } from "./with-router";
import { withTheme } from "./with-theme";

export const withProviders = compose(withRouter, withTheme, withCocomo, withCocomo2, withFunctionalPoint);