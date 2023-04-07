import { List } from '@/components/List/List';
import { isMobile } from '@/utils/isMobile';
import { useEffect, useState } from 'react';
import styles from './Categories.module.css';

export const Categories = () => {
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        setMobile(isMobile(window))
    })
    
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