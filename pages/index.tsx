import { HamburgerContext } from '@/components/Navbar/Hamburger/HamburgerContext';
import { HomeContent } from '@/features/Home/HomeContent/HomeContent'
import Head from 'next/head' // Zaimportowanie Head - odpowiedniku <head> z HTML
import { useContext } from 'react'; 

export default function Home() {
    const { isOpen } = useContext(HamburgerContext); // Odczytujemy status Hamburger menu
    return (
        <div className={isOpen ? 'blur' : ''}> {/* Dodajemy klasę blur, gdy Hamburger menu jest otwarte */}
            <Head>
                <title>Alledrogo</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/branding/logo-transparent.svg" />
                <meta name="description" content="Najmniejszy sklep z największym dropshipem!" />
                {/* Dodajemy metadane do strony */}
            </Head>
            <HomeContent /> {/* Resztę strony robimy w komponencie HomeContent */}
        </div>
    )
}
