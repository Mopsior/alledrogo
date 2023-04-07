import Link from 'next/link'
import styles from './Banner.module.css'

interface BannerProps {
    special?: boolean,
    href: string,
    children: React.ReactNode
}

export const Banner = ({ special, href, children }: BannerProps) => {
    return (
        <Link href={href}>
            <div className={`${styles.banner} ${special && `${styles.special}`}`}>
                <h1>{children}</h1>
            </div>
        </Link>
    )
}