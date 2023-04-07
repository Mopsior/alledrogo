import { Product } from "@/components/Product/Product"
import { ProductList } from "@/utils/productType"
import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./ProductsList.module.css"

export const ProductsList = () => {
    const [products, setProducts] = useState<ProductList>()
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/getItems`)
            .then((res) => {
                setProducts(res.data)
            })
    }, [])
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