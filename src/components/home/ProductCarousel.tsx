import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface ProductDetailProps {
    id: number,
    title: string,
    image: string,
}

export function ProductCarousel({ productDetail }: { productDetail: ProductDetailProps[] }) {
    return (
        <Carousel
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
                        <CarouselItem key={product.id} className="lg:basis-1/5">
                            <div className="p-1">
                                <Card className="bg-white w-[262px] h-[384px] shadow-none rounded-none">
                                    <CardContent>
                                        <img src={product.image} alt={product.title} title={product.title} />
                                        <span>
                                            {product.title}
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}


export default ProductCarousel