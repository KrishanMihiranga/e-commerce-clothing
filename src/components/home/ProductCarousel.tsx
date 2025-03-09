import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import koko from "/images/koko.png"

interface ProductDetailProps {
    id: number,
    title: string,
    image: string,
    price: number
    koko: boolean
}

export function ProductCarousel({ productDetail }: { productDetail: ProductDetailProps[] }) {
   

    const handleRoute = () => {
        const category = "mens";
        const slug = "crew-neck-graphic-tee";

        window.open(`/collections/${category}/products/${slug}`, "_blank");
    };

    return (
        <Carousel
            opts={{ align: 'center' }}
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}
            className="w-full"
        >
            <CarouselContent>
                {
                    productDetail?.map((product) => (
                        <CarouselItem key={product.id} className="lg:basis-1/5  flex justify-center">
                            <div className="p-1">
                                <Card className=" bg-transparent w-[260px] h-max shadow-none rounded-none border-none cursor-pointer" onClick={handleRoute}>
                                    <CardContent className="flex flex-col">
                                        <img src={product.image} alt={product.title} title={product.title} />
                                        <span className="!pt-4"> {product.title} </span>

                                        <div className="font-semibold flex items-center gap-4">
                                            <span className="w-max">{product.price} LKR</span>
                                            <div className="flex gap-1">
                                                <div className="w-6 h-6 border rounded-full bg-red-500"></div>
                                                <div className="w-6 h-6 border rounded-full bg-blue-500"></div>
                                                <div className="w-6 h-6 border rounded-full bg-pink-500"></div>
                                            </div>
                                        </div>
                                        {product?.koko && (
                                            <div className="flex gap-2 items-center">
                                                <span className="text-[1.3rem] text-gray-500"> or 3 payments of Rs 917 with</span>
                                                <img src={koko} alt="koko pay logo" className="h-7" />
                                            </div>
                                        )}

                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious className="!p-5" />
            <CarouselNext className="!p-5" />
        </Carousel>
    )
}


export default ProductCarousel