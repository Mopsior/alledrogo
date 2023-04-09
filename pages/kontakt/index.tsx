import { HamburgerContext } from "@/components/Navbar/Hamburger/HamburgerContext";
import { ContactContent } from "@/features/Contact/ContactContent/ContactContent";
import Head from "next/head";
import { useContext } from "react";

export default function ContactPage() {
    const { isOpen } = useContext(HamburgerContext);
    return (
        <div className={isOpen ? 'blur' : ''}>
            <Head>
                <title>Alledrogo - kontakt</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/branding/logo-transparent.svg" />
                <meta name="description" content="Skontaktuj się z nami" />
            </Head>
            <ContactContent />
        </div>
    )
}