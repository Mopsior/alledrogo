import Link from 'next/link' // Zaimportowanie Link - odpowiednika <a> z HTML
import styles from './Banner.module.css'

// Definiujemy typy argumentów, które przyjmie komponent
interface BannerProps {
    // Atrybut special jest opcjonalny
    special?: boolean,
    href: string,
    // children to wszystko, co znajduje się wewnątrz komponentu
    children: React.ReactNode
}

export const Banner = ({ special, href, children }: BannerProps) => {
    return (
        <Link href={href}>
            {/* Sprawdzamy czy jest atrybut special i dodajemy klase .special */}
            <div className={`${styles.banner} ${special && `${styles.special}`}`}>
                <h1>{children}</h1>
            </div>
        </Link>
    )
}