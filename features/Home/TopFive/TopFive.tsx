import { Product } from '@/components/Product/Product';
import { useEffect, useState } from 'react';
import styles from './TopFive.module.css';
import axios from 'axios';
import { ProductList } from '@/utils/productType';

export const TopFive = () => {
    const [products, setProducts] = useState<ProductList>()
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/getItems`)
            .then((res) => {
                setProducts(res.data)
            })
    }, [])

    const topFive = products?.products.slice(0, 5)

    return (
        <div className={styles.container}>
            <h1>Najlepsze produkty</h1>
            <div className={styles.products}>
            { topFive?.map((product) => {
                return <Product title={product.name} price={product.price} image={product.image} key={product.name} />;
            }) }
            </div>
        </div>
    )
}