import { Navigation } from "features/navigation/ui";

import { AppBar } from "shared/ui/app-bar";
import { Container } from "shared/ui/container";
import { Toolbar } from "shared/ui/toolbar";
import { Typography } from "shared/ui/typography";

export const Header = () => {
    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar disableGutters variant="dense">
                    <Navigation/>
                    <Typography color="black" flex={1} textAlign="right">Created by Vasyl Petryna</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
};