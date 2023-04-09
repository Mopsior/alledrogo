import styles from './Form.module.css';
import { FormInput } from './FormInput';

interface FormProps {
    // Type może być tylko 'contact', 'login' lub 'register'
    type: 'contact' | 'login' | 'register';
}

export const Form = ({ type }: FormProps) => {
    return (
        <div className={styles.form}>
            {/* Sprawdzamy czy 'contact' */}
            {type === 'contact' && <>
                <h1>Kontakt</h1>
                <FormInput type='name' />
                <FormInput type='text' />
                <FormInput type='submit' text='WYŚLIJ' />
            </>}
            {/* Sprawdzamy czy 'login' */}
            {type === 'login' && <>
                <h1>Zaloguj się</h1>
                <FormInput type='login' />
                <FormInput type='password' />
                <FormInput type='submit' text='ZALOGUJ' />
            </>}
            {/* Sprawdzamy czy 'register' */}
            {type === 'register' && <>
                <h1>Zarejestruj się</h1>
                <FormInput type='login' />
                <FormInput type='password' />
                <FormInput type='repeatPassword' />
                <FormInput type='submit' text='ZALOGUJ' />
            </>}
        </div>
    )
}