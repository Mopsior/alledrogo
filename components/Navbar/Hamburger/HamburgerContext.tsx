import React, { createContext, useState } from "react";

export interface HamburgerContextData {
    isOpen: boolean;
    toggle: () => void;
}

export const HamburgerContext = createContext<HamburgerContextData>({
    isOpen: false,
    toggle: () => {},
});

export const HamburgerProvider = ({ children }: React.PropsWithChildren) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HamburgerContext.Provider value={{ isOpen, toggle }}>
        {children}
        </HamburgerContext.Provider>
    );
};