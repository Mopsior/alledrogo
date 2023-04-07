import { ReactNode } from 'react'
import styles from './Date.module.css'

interface DateProps {
    timestamp: string,
    children: ReactNode
}

export const Date = ({ timestamp, children }: DateProps) => {
    return (
        <li className={styles.li}>
            <p className={styles.timestamp}>{timestamp}</p>
            <p className={styles.description}>{children}</p>
        </li>
    )
}