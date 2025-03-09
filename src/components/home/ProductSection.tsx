import ProductCarousel from "./ProductCarousel"

interface ProductDetailProps {
    id: number,
    title: string,
    image: string,
    price: number,
    koko: boolean,
}

const ProductSection = ({ title, productsList, className }: { title: string, productsList: ProductDetailProps[], className?: string }) => {
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