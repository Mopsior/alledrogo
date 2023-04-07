import { Form } from '../../../components/Form/Form';
import { Text } from '@/components/Text/Text';

export const ContactContent = () => {
    return (
        <div className="container">
            <Text title='Kontakt'>
                <p>Nie mam zielonego pojęcia po co do nas pisać, bo i tak ci nie odpowiemy :)</p>
                <p>Ale dla tych co myślą że to zrobimy, jedyny sposób to formularz, a twoja wiadomość poleci w próżnie, tam szukaj odpowiedzi.</p>
            </Text>
            <Form type='contact' />
        </div>
    )
}