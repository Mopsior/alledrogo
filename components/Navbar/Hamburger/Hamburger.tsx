import styles from './Hamburger.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { useContext } from 'react';
import { List } from '@/components/List/List';
import { HamburgerContext } from './HamburgerContext';
import Link from 'next/link';
import Image from 'next/image';

export const Hamburger = () => {
    // Odczytujemy i zapisujemy stan Hamburger menu
    const { isOpen, toggle } = useContext(HamburgerContext);

    return (
        <>
        {
            isOpen
            ?
            // Jeśli Hamburger menu jest otwarte, renderujemy jego zawartość
            <nav className={styles.menu}>
                <div className={styles.icons}>
                    <Link href="/">
                        <Image alt="home logo" src="/branding/logo-transparent.svg" width={64} height={64} />
                    </Link>
                    <Link href="/login">
                        <LoginRoundedIcon sx={{ color: '#FF5A00', fontSize: 64 }} />
                    </Link>
                    {/* Po kliknięciu zamykamy Hamburger menu */}
                    <CloseRoundedIcon sx={{ color: '#FF5A00', fontSize: 64 }} onClick={toggle} />
                </div>
                <h1>Kategorie</h1>
                <List icon='home' />
                <List icon='electronics' />
                <List icon='clothes' />
                <List icon='about' />
                <List icon='products' />
                <List icon='contact' />
                <List icon='login' />
            </nav>
            :
            // Jeśli Hamburger menu jest zamknięte, renderujemy tylko ikonę
            // po kliknięciu na którą otwieramy Hamburger menu
            <nav className={styles.icon} onClick={toggle}>
                <MenuIcon fontSize='large' sx={{ color: '#FF5A00' }}/>
            </nav>
        }   
        </>
    )
}