import styles from './Text.module.css';

interface TextProps { // Typy
    title: string;
    children: React.ReactNode;
}

export const Text = ({ title, children }: TextProps) => {
// Tworzymy komponent <Text title="tytuł">nasza treść</Text>
    return (
        <div className={styles.text}>
            <h1>{title}</h1> {/* Tutaj znajdzie się "tytuł" */}
            {children} {/* Tutaj znajdzie się "nasza treść" */}
        </div>
    )
}