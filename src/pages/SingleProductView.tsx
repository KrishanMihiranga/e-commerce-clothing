import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import testImg from '/images/products/gp1.webp'
import testImg2 from '/images/products/gp2.webp'
import koko from "/images/koko.png";
import { IoBag } from "react-icons/io5";
import { PopularProductsData, StaticDeliveryCardData } from "@/utils/data/commonDataArrays";
import DeliveryInfoCard from "@/components/home/DeliveryInfoCard";
import ProductSection from "@/components/home/ProductSection";

const SingleProductView = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => setQuantity((prev) => prev + 1);
    const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    useEffect(() => { window.scrollTo(0, 0); }, []);
    
    return (
        <section className="min-h-[85vh] py-10 px-4 primary-text">
            <div className="container-layout">
                <div className="grid grid-cols-2 gap-8 inner-layout">

                    <div className="flex flex-col gap-4 w-[50rem] items-start">
                        <img
                            src={testImg}
                            alt="Product"
                            className="w-full h-auto rounded-lg"
                        />
                        <div className="flex gap-2 overflow-x-auto">
                            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                                <img
                                    key={item}
                                    src={testImg2}
                                    alt="Thumbnail"
                                    className="w-25 h-25 rounded-lg cursor-pointer border-2 border-transparent hover:border-white"
                                />
                            ))}
                        </div>
                    </div>


                    <div className="flex flex-col gap-4 w-full">
                        <h1 className="text-[7rem] font-bold leading-[7rem]">The Elite Crew - Hoodie</h1>
                        <p className="text-[3rem] font-semibold ">Rs 5,450</p>
                        <div className="text-[1.5rem] flex items-center gap-2">
                            or 3 payments of Rs 1,817 with <img src={koko} alt="Koko pay logo" className="h-8" />
                        </div>


                        <div>
                            <p className="!mb-2 text-[1.5rem]">Color: Charcoal Gray</p>
                            <div className="flex gap-2">
                                <div className="w-10 h-10 bg-gray-700 rounded-full border-2 border-black"></div>
                                <div className="w-10 h-10 bg-blue-900 rounded-full border-2  border-black"></div>
                            </div>
                        </div>

                        <div>
                            <p className="text-[1.5rem] mb-1">Size:</p>
                            <div className="flex gap-2">
                                {["XS", "S", "M", "L", "XL"].map((size) => (
                                    <button
                                        key={size}
                                        className="!px-15 !py-3 border rounded-lg  transition"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <p className="text-green-500 font-semibold">In stock</p>
                        </div>

                        <p className="uppercase underline">Size Chart</p>

                        <div className="flex items-center gap-4 !mt-5">
                            <p className="text-[1.5rem]">Quantity:</p>
                            <div className="flex items-center border border-gray-600 rounded-lg">
                                <button onClick={decreaseQty} className="!px-5 !py-4 ">
                                    <FaMinus />
                                </button>
                                <span className="!px-5">{quantity}</span>
                                <button onClick={increaseQty} className="!px-5 !py-4 ">
                                    <FaPlus />
                                </button>
                            </div>
                        </div>


                        <div className="flex gap-5 !mt-5">
                            <button className="w-full bg-white border text-black !py-5 rounded-lg font-semibold flex items-center gap-2 justify-center">
                                Add to Bag <IoBag />
                            </button>
                            <button className="w-full  border !py-5 rounded-lg font-semibold bg-[#000] text-white">
                                Buy It Now
                            </button>

                        </div>
                        <p className="!mt-5">Meet your new favorite Elite crew hoodie, designed for both comfort and style. Crafted from soft, cozy fleece fabric, this hoodie features a relaxed fit that drapes effortlessly for a laid-back look. The standout crackled prints add a trendy, textured flair, giving this classic piece a modern twist. Perfect for layering or wearing on its own, it’s ideal for chilly days or lounging at home.</p>

                        <div className='grid grid-cols-2 gap-15 !mt-15 !pr-20'>
                            {StaticDeliveryCardData?.map((data, index) => (
                                <DeliveryInfoCard key={index} icon={data.icon} title={data.title} subTitle={data.subTitle} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <ProductSection title='You might also like' productsList={PopularProductsData} className='section-gap container-layout bg-[#f8f8f8]' />
        </section>
    );
};

export default SingleProductView;
