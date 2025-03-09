import { Card, CardContent } from "@/components/ui/card";
import { PopularProductsData } from "@/utils/data/commonDataArrays";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import koko from "/images/koko.png";

interface DataProps {
    id: number;
    title: string;
    image: string;
    price: number;
    koko: boolean;
}

const ResultPage = () => {
    const { category } = useParams<{ category: string }>();
    const [data, setData] = useState<DataProps[]>([]);
    const [fetching, setFetching] = useState<boolean>(true);

    const titles: Record<string, string> = {
        mens: "Men's",
        women: "Women's",
        accessories: "Accessories",
        "gift-cards": "Gift Cards",
    };

    useEffect(() => {
        setFetching(true);
        setData(PopularProductsData)
        setFetching(false);
    }, []);

   

    return (
        <>
            {fetching ? (
                <div className="flex justify-center items-center min-h-[85vh]">
                    <div>Loading...</div>
                </div>
            ) : (
                <section className="bg-[#f8f8f8] primary-text container-layout min-h-[85vh]">
                    <h1 className="text-[10rem] font-bold">{titles[category || "mens"]}</h1>
                    <div className="w-full grid grid-cols-4 place-items-center gap-10">
                        {data.map((product) => (
                            <div key={product.id} className="p-1">
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
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default ResultPage;
