import styles from './DesktopNavbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
// Importujemy ikony z Material UI

export const DesktopNavbar = () => {
    return (
        <nav className={styles.navbar}>
            {/* Banner odnosi do home page (/) */}
            <Link href="/">
                <Image src={'branding/banner-transparent.svg'} alt="Alledrogo" width={256} height={64} />
            </Link>
            <ul className={styles.list}>
                <li><Link href={'/o-nas'}>O nas</Link></li>
                <li><Link href={'/produkty'} className={styles.margins}>Produkty</Link></li>
                <li><Link href={'/kontakt'}>Kontakt</Link></li>
            </ul>
            {/* Przycisk zaloguj odnosi do login page (/login) */}
            <Link href="/login">
                <div className={styles.login}>
                    <p>Zaloguj się</p>
                    <LoginRoundedIcon fontSize='large' sx={{ color: '#FF5A00', marginLeft: '10px' }}/>
                </div>
            </Link>
        </nav>
    )
}