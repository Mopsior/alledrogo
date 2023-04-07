import { HamburgerContext } from "@/components/Navbar/Hamburger/HamburgerContext";
import { LoginContent } from "@/features/Login/LoginContent/LoginContent";
import Head from "next/head";
import { useContext } from "react";

export default function LoginPage() {
    const { isOpen } = useContext(HamburgerContext);
    return (
        <div className={isOpen ? 'blur' : ''}>
            <Head>
                <title>Alledrogo - Login</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/branding/logo-transparent.svg" />
                <meta name="description" content="Logowanie do naszych usług" />
            </Head>
            <LoginContent />
        </div>
    )
}