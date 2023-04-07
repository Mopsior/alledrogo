import styles from './FormInput.module.css';

interface FormInputProps {
    type: 'name' | 'text' | 'submit' | 'login' | 'password' | 'repeatPassword',
    text?: string
}

export const FormInput = ({ type, text }: FormInputProps) => {
    return (
        <>
            { type === 'name' && <input type="text" placeholder="Imię" className={styles.text} /> }
            { type === 'login' && <input type="text" placeholder="Login" className={styles.text} /> }
            { type === 'password' && <input type="password" placeholder="Hasło" className={styles.text} /> }
            { type === 'repeatPassword' && <input type="password" placeholder="Powtórz hasło" className={styles.text} /> }
            { type === 'text' && <textarea placeholder="Treść" className={styles.textBox} /> }
            { type === 'submit' && <input type="submit" className={styles.submit} value={text} /> }
        </>
    )
}