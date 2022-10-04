import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff"
                }
            }
        }
    }
})