import React from "react";

import { Box } from "shared/ui/box";
import { Container } from "shared/ui/container";
import { AppBar } from "shared/ui/app-bar";
import { Toolbar } from "shared/ui/toolbar";
import { Typography } from "shared/ui/typography";

import { LayoutContentProps, LayoutProps } from "./types";



export const Header = ({leftSide, title}: {leftSide: React.ReactElement, title: string}) => {
    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar disableGutters variant="dense">
                    {leftSide}
                    <Typography color="black" flex={1} textAlign="right">{title}</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
};


export const Layout = ({ children }: LayoutProps) => (
    <Box>
        {children}
    </Box>
)

const Content = ({ children }: LayoutContentProps) => (
    <Container maxWidth="md">
        {children}
    </Container>
)

Layout.Content = Content;
Layout.Header = Header;
