import { HamburgerProvider } from '@/components/Navbar/Hamburger/HamburgerContext'
import { Navbar } from '@/components/Navbar/Navbar'
import '@/styles/globals.css' // Globalny plik css
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'

// Korzystamy z biblioteki next/font/google, aby łatwo zaimportować czcionki z Google Fonts
const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'], 
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <HamburgerProvider>
        {/* Pakujemy całą zawartość strony w Provider stanu */}
        {/* dla Hamburger menu, aby wszędzie mieć dostępny status */}
            <main className={`${lato.className} main-container`}>
                {/* Dodajemy klasę z czcionką, oraz */}
                {/* globalną klasę main-container (bez użycia css-modules) */}
                <Navbar />
                <Component {...pageProps} /> {/* Renderujemy komponent strony */}
            </main>
        </HamburgerProvider>
    )
}