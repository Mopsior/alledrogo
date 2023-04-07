import { ContactContent } from "@/features/Contact/ContactContent/ContactContent";
import Head from "next/head";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Alledrogo - kontakt</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/branding/logo-transparent.svg" />
                <meta name="description" content="Skontaktuj się z nami" />
            </Head>
            <ContactContent />
        </>
    )
}