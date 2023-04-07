import { Categories } from "@/components/Categories/Categories"
import { TopFive } from "../TopFive/TopFive"
import styles from './HomeContent.module.css'
import { Banner } from "../../../components/Banner/Banner"

export const HomeContent = () => {
    return (
        <div className={styles.container}>
            <Categories />
            <div>
                <TopFive />
                <div className={styles.banners}>
                    <Banner href="/o-nas" special>O NAS</Banner>
                    <Banner href="/produkty">PRODUKTY</Banner>
                    <Banner href="/kontakt">KONTAKT</Banner>
                </div>
            </div>
        </div>
    )
}