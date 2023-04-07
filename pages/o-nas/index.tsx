import { HamburgerContext } from "@/components/Navbar/Hamburger/HamburgerContext";
import { AboutContent } from "@/features/About/AboutContent/AboutContent";
import Head from "next/head";
import { useContext } from "react";

export default function ProductsPage() {
    const { isOpen } = useContext(HamburgerContext);
    return (
        <div className={isOpen ? 'blur' : ''}>
            <Head>
                <title>Alledrogo - O nas</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/branding/logo-transparent.svg" />
                <meta name="description" content="Poznaj naszą historię" />
            </Head>
            <AboutContent />
        </div>
    )
}