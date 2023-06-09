import { Product } from "@/components/Product/Product"
import { ProductList } from "@/utils/productType"
import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./ProductsList.module.css"

export const ProductsList = () => {
    // Dokładnie to samo co w wypadku TopFive
    const [products, setProducts] = useState<ProductList>()
    useEffect(() => {
        axios.get(`api/getItems`)
            .then((res) => {
                setProducts(res.data)
            })
    }, [])
    // Wybieramy wszystkie produkty
    return (
        <div className={styles.container}>
            <h1>Produkty</h1>
            <div className={styles.products}>
                { products?.products.map((product) => {
                    return <Product title={product.name} price={product.price} image={product.image} key={product.name} />;
                })}
            </div>
        </div>
    )
}