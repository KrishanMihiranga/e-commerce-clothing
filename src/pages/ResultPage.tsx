import ResultCard from "@/components/resultPage/ResultCard";
import { PopularProductsData } from "@/utils/data/commonDataArrays";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        window.scrollTo(0, 0);
        setFetching(true);
        setData(PopularProductsData)
        setFetching(false);
    }, []);
    
    useEffect(() => { window.scrollTo(0, 0); }, []);

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
                            <ResultCard key={product.id} product={product} />
                        ))}

                    </div>
                </section>
            )}
        </>
    );
};

export default ResultPage;
