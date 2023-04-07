import { HamburgerProvider } from '@/components/Navbar/Hamburger/HamburgerContext'
import { Navbar } from '@/components/Navbar/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <HamburgerProvider>
            <main className={`${lato.className} main-container`}>
                <Navbar />
                <Component {...pageProps} />
            </main>
        </HamburgerProvider>
    )
}
