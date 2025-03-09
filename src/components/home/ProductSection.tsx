import ProductCarousel from "./ProductCarousel"

interface ProductDetailProps {
    id: number,
    title: string,
    image: string,
}

const ProductSection = ({ title, productsList }: { title: string, productsList: ProductDetailProps[] }) => {
    return (
        <div className='w-full'>
            <div className='uppercase font-bold text-[2rem] text-black text-center !pb-10'>
                {title}
            </div>
            <ProductCarousel productDetail={productsList} />
        </div>
    )
}

export default ProductSection