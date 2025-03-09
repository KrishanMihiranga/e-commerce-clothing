import { Card, CardContent } from "../ui/card";
import koko from "/images/koko.png";

interface DataProps {
    id: number;
    title: string;
    image: string;
    price: number;
    koko: boolean;
}



const ResultCard = ({ product }: { product: DataProps }) => {

    const handleRoute = () => {
        const category = "mens";
        const slug = "crew-neck-graphic-tee";
    
        window.open(`/collections/${category}/products/${slug}`, "_blank");
    };


    return (
        <div className="p-1" onClick={handleRoute}>
            <Card className="w-[260px] h-max shadow-none rounded-none border-none cursor-pointer !my-[5rem] bg-transparent">
                <CardContent className="flex flex-col">
                    <img src={product.image} alt={product.title} title={product.title} />
                    <span className="!pt-4">{product.title}</span>

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
    )
}

export default ResultCard
