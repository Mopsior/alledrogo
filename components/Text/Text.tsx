import styles from './Text.module.css';

interface TextProps {
    title: string;
    children: React.ReactNode;
}

export const Text = ({ title, children }: TextProps) => {
    return (
        <div className={styles.text}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}