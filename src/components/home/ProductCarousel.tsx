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
import { ProductProps } from "@/lib/interfaces"


export function ProductCarousel({ productDetail }: { productDetail: ProductProps[] }) {


    const handleRoute = ({ category, slug }: { category: string, slug: string }) => {

        window.open(`/collections/${category.toLowerCase()}/products/${slug}`, "_blank");
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
                        <CarouselItem key={product.slug} className="lg:basis-1/5  flex justify-center">
                            <div className="p-1">
                                <Card className=" bg-transparent w-[260px] h-max shadow-none rounded-none border-none cursor-pointer" onClick={() => { handleRoute({ category: product?.mainCategoryKey, slug: product?.slug }) }}>
                                    <CardContent className="flex flex-col">
                                        <img src={product?.ProductDetails?.[0]?.urls[0]?.url} alt={product.name} title={product.name} />
                                        <span className="!pt-4"> {product.name} </span>

                                        <div className="font-semibold flex items-center gap-4">
                                            <span className="w-max">{product?.ProductDetails[0]?.price} LKR</span>
                                            <div className="flex gap-1">
                                                {
                                                    product?.ProductDetails?.map((product) => (
                                                        <div className="w-6 h-6 border rounded-full" style={{ backgroundColor: product?.colorKey?.hex }} key={product?.colorKey?.key}></div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        {product?.isKokoAvailable && (
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