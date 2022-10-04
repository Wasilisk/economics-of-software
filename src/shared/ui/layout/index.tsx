import { Box } from "shared/ui/box";
import { Container } from "shared/ui/container";

import { LayoutContentProps, LayoutProps } from "./types";


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
