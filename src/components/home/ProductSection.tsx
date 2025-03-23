import { ProductProps } from "@/lib/interfaces"
import ProductCarousel from "./ProductCarousel"

const ProductSection = ({ title, productsList, className }: { title: string, productsList: ProductProps[], className?: string }) => {
    return (
        <div className={`w-full ${className ? className : ''}`}>
            <div className='uppercase font-bold text-[2rem] text-black text-center !pb-10'>
                {title}
            </div>
            <ProductCarousel productDetail={productsList} />
        </div>
    )
}

export default ProductSection