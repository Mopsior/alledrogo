import { Categories } from '@/components/Categories/Categories'
import { ProductsList } from '../ProductsList/ProductsList'

export const ProductsContent = () => {
    return (
        <div className="container">
            <Categories />
            <ProductsList />
        </div>
    )
}