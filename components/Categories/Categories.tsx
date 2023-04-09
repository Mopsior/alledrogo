import { List } from '@/components/List/List';
import { isMobile } from '@/utils/isMobile';
import { useEffect, useState } from 'react';
import styles from './Categories.module.css';

export const Categories = () => {
    // Zapisujemy czy jesteśmy na urządzeniu mobilnym
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        // Sprawdzamy czy jesteśmy na urządzeniu mobilnym
        setMobile(isMobile(window))
    })
    
    // Jeśli jesteśmy na urządzeniu mobilnym
    // nie wyświetlamy kategorii (są w menu)
    if (mobile) return (<></>)
    return (
        <div className={styles.container}>
            <h1>Kategorie</h1>
            <List icon='home' />
            <List icon='electronics' />
            <List icon='clothes' />
        </div>
    )
}