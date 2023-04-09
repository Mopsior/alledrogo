import { Product } from '@/components/Product/Product';
import { useEffect, useState } from 'react';
import styles from './TopFive.module.css';
import axios from 'axios'; // Importujemy biblioteke do komunikacji z API
import { ProductList } from '@/utils/productType';

export const TopFive = () => {
    // Zapisujemy produkty w stanie
    const [products, setProducts] = useState<ProductList>()
    useEffect(() => {
        // Robimy zadanie GET do API
        axios.get(`api/getItems`)
            .then((res) => {
                // Zapisujemy produkty
                setProducts(res.data)
            })
    // Pusta tablica jako drugi argument useEffecta powoduje, że
    // useEffect wykona się tylko raz, gdy komponent się zamontuje
    }, [])

    // Wybieramy 5 produktów
    const topFive = products?.products.slice(0, 5)

    return (
        <div className={styles.container}>
            <h1>Najlepsze produkty</h1>
            <div className={styles.products}>
            {/* Dla każdego produktu dodajemy komponent Product */} 
            { topFive?.map((product) => {
                // Klucz jest wymagany przy mapowaniu przez reacta
                return <Product title={product.name} price={product.price} image={product.image} key={product.name} />;
            }) }
            </div>
        </div>
    )
}