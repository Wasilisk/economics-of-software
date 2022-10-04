import { ThemeProvider } from "@mui/material/styles";

import { ReactNode } from "react";

import { theme } from "shared/config/theme";

export const withTheme = (component: () => ReactNode) => () => (
    <ThemeProvider theme={theme}>
        {component()}
    </ThemeProvider>
)