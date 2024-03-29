import React from "react";
import { Wrapper } from "./Wrapper";
import { Navbar } from "./Navbar"

interface LayoutProps {
    children: any
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <Wrapper>{children}</Wrapper>
        </>
    );
};