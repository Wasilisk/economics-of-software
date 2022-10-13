import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    position: "static"
                }
            }
        },
        MuiAccordion: {
            defaultProps: {
                disableGutters: true,
            },
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    border: "1px solid #d9d9d9",
                    backgroundColor: "#fafafa",
                    borderRadius: "4px",

                    ":before": {
                        content: "none"
                    }
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    borderTop: "1px solid #d9d9d9"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    minWidth: "120px"
                }
            }
        }
    }
})