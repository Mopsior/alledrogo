import { Text } from '@/components/Text/Text'
import { Timeline } from '../Timeline/Timeline'

export const AboutContent = () => {
    return (
        <div className="container">
            <div>
                <Text title='O nas'>
                    Jesteśmy najmniejszym sklepem bez zarejestrowanej firmy. Wszystko co robimy jest nielegalne i nie akceptujemy zwrotów. Większość prodóktów to dropship z aliexpress lub taobao.
                </Text>
            </div>
            <Timeline />
        </div>
    )
}