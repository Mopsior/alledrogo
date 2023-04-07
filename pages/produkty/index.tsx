import { HamburgerContext } from "@/components/Navbar/Hamburger/HamburgerContext";
import { ProductsContent } from "@/features/Products/ProdutcsContent/ProductsContent";
import Head from "next/head";
import { useContext } from "react";

export default function ProductsPage() {
    const { isOpen } = useContext(HamburgerContext);
    return (
        <div className={isOpen ? 'blur' : ''}>
            <Head>
                <title>Alledrogo - produkty</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/branding/logo-transparent.svg" />
            </Head>
            <ProductsContent />
        </div>
    )
}