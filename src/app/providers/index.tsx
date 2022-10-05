import compose from "compose-function";

import { withCocomo } from "./with-cocomo";
import { withRouter } from "./with-router";
import { withTheme } from "./with-theme";

export const withProviders = compose(withRouter, withTheme, withCocomo);