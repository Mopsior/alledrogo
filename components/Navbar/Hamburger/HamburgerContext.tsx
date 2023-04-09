import { PropsWithChildren, createContext, useState } from "react";

// Tworzymy interfejs dla kontekstu
export interface HamburgerContextData {
    isOpen: boolean;
    toggle: () => void;
}

// Tworzymy kontekst dla komponentu Hamburger
export const HamburgerContext = createContext<HamburgerContextData>({
    isOpen: false,
    toggle: () => {},
});

export const HamburgerProvider = ({ children }: PropsWithChildren) => {
    // Tworzymy stan dla Hamburger menu
    const [isOpen, setIsOpen] = useState(false);

    // Tworzymy funkcję, która zmienia stan Hamburger menu
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        // Tworzymy provider dla kontekstu
        <HamburgerContext.Provider value={{ isOpen, toggle }}>
        {children}
        </HamburgerContext.Provider>
    );
};