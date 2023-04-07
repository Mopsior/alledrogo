import styles from './Product.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
    title: string;
    price: string;
    image: string;
}

export const Product = ({ title, price, image }: ProductProps) => {
    const bigPrice = price.split('.')[0];
    const smallPrice = price.split('.')[1];

    return (
        <Link href="#">
            <div className={styles.product}>
                <Image alt={title} src={`/products/${image}`} width={150} height={250} className={styles.image} />
                <h2>{bigPrice},<span className={styles.small_price}>{smallPrice}</span> zł</h2>
                <p>{title}</p>
            </div>
        </Link>
    )
}