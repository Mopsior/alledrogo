import { HamburgerContext } from '@/components/Navbar/Hamburger/HamburgerContext';
import { HomeContent } from '@/features/Home/HomeContent/HomeContent'
import Head from 'next/head'
import { useContext } from 'react';

export default function Home() {
    const { isOpen } = useContext(HamburgerContext);
    return (
        <div className={isOpen ? 'blur' : ''}>
            <Head>
                <title>Alledrogo</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/branding/logo-transparent.svg" />
                <meta name="description" content="Najmniejszy sklep z największym dropshipem!" />
            </Head>
            <HomeContent />
        </div>
    )
}
