import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import CheckroomRoundedIcon from '@mui/icons-material/CheckroomRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import styles from './List.module.css'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Link from 'next/link';

interface ListProps {
    icon: 'home' | 'electronics' | 'clothes' | 'about' | 'products' | 'contact' | 'login'
}

export const List = ({ icon }: ListProps) => {
    return (
        <div className={`${styles.list} ${icon === 'about' || icon === 'login' ? styles.margin : ''} ${icon === 'login' ? styles.login : '' }`}>
            { icon === "home"
            && <>
                <HomeRoundedIcon fontSize='large'/>
                <Link href="/produkty">Dla Domu</Link>
            </>
            }
            { icon === "electronics"
            && <>
                <PhoneAndroidRoundedIcon fontSize='large'/>
                <Link href="/produkty">Elektronika</Link>
            </>
            }
            { icon === "clothes"
            && <>
                <CheckroomRoundedIcon fontSize='large'/>
                <Link href="/produkty">Moda</Link>
            </>
            }
            { icon === "about"
            && <>
                <PersonRoundedIcon fontSize='large'/>
                <Link href="/o-nas">O nas</Link>
            </>
            }
            { icon === "products"
            && <>
                <LocalMallRoundedIcon fontSize='large'/>
                <Link href="/produkty">Produkty</Link>
            </>
            }
            { icon === "contact"
            && <>
                <CallRoundedIcon fontSize='large'/>
                <Link href="/kontakt">Kontakt</Link>
            </>
            }
            { icon === "login"
            && <>
                <LoginRoundedIcon fontSize='large'/>
                <Link href="/login" className={styles.login}>Zaloguj się</Link>
            </>
            }
        </div>
    );
};
  