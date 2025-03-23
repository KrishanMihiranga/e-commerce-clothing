import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import testImg from '/images/products/gp1.webp'
import testImg2 from '/images/products/gp2.webp'
import koko from "/images/koko.png";
import { IoBag } from "react-icons/io5";
import { StaticDeliveryCardData } from "@/utils/data/commonDataArrays";
import DeliveryInfoCard from "@/components/home/DeliveryInfoCard";
import ProductSection from "@/components/home/ProductSection";
import { GetProducts, GetProductsBySlug } from "@/service/ProductService";
import { ProductProps } from "@/lib/interfaces";
import { useParams } from "react-router-dom";


const SingleProductView = () => {
    const [quantity, setQuantity] = useState<number>(0);
    const [productIndex, setProductIndex] = useState<number>(0);
    const [sizeIndex, setSizeIndex] = useState<number>(0);
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [data, setData] = useState<ProductProps[]>([]);
    const [productData, setProductData] = useState<ProductProps | null>(null);
    const { category, slug } = useParams<{ category: string; slug: string }>();

    const increaseQty = ({ max }: { max: number }) => {
        if (quantity >= max) return;
        setQuantity((prev) => prev + 1);
    }
    const decreaseQty = () => {
        if (quantity <= 0) return;
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const getData = async () => {

        await GetProductsBySlug({ slug: slug! }).then((product) => {
            console.log('Dataaaaaaaa', product)
            setProductData(product?.data[0] || []);
            console.log(product?.data);
        }).catch((error) => {
            console.log(error)
        })
        await GetProducts().then((product) => {
            setData(product?.data || []);
            console.log(product?.data);
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        getData();
    }, [])

    const handleIndex = (index: number) => {
        setProductIndex(index);
        setQuantity(0)
        setImageIndex(0)
    }
    const handleSizeIndex = (index: number) => {
        setSizeIndex(index);
        setQuantity(0)
    }
    const handleImageIndex = (index: number) => {
        setImageIndex(index);
    }

    const qty = productData?.ProductDetails[productIndex]?.sizes[sizeIndex]?.qty ?? 0;
    return (
        <section className="min-h-[85vh] py-10 px-4 primary-text">
            <div className="container-layout">
                <div className="grid grid-cols-2 gap-8 inner-layout">

                    <div className="flex flex-col gap-4 w-[50rem] items-start">
                        <img
                            src={productData?.ProductDetails[productIndex]?.urls[imageIndex]?.url}
                            alt="Product"
                            className="w-full h-auto rounded-lg"
                        />
                        <div className="flex gap-2 overflow-x-auto">
                            {
                                productData?.ProductDetails[productIndex]?.urls.map((url, index) => (
                                        <img
                                            key={index}
                                            src={url.url}
                                            alt="Thumbnail"
                                            className={`w-25 h-25 rounded-lg cursor-pointer border-2 object-cover hover:border-white ${imageIndex === index ? "border-black": null}`}
                                            onClick={() => { handleImageIndex(index) }}
                                        />
                                    ))
                            }
                        </div>
                    </div>


                    <div className="flex flex-col gap-4 w-full">
                        <h1 className="text-[7rem] font-bold leading-[7rem]">{productData?.name}</h1>
                        <p className="text-[3rem] font-semibold ">
                            {"LKR " + (productData?.ProductDetails[productIndex]?.price || 0).toLocaleString()}
                        </p>
                        {
                            productData?.isKokoAvailable && (
                                <div className="text-[1.5rem] flex items-center gap-2">
                                    or 3 payments of Rs {Math.ceil(productData?.ProductDetails[productIndex]?.price / 3)} with <img src={koko} alt="Koko pay logo" className="h-8" />
                                </div>
                            )
                        }


                        <div>
                            <p className="!mb-2 text-[1.5rem]">Color: {productData?.ProductDetails[productIndex]?.colorKey?.name}</p>
                            <div className="flex gap-2">
                                {
                                    productData?.ProductDetails?.map((color, index: number) => (
                                        <div className={`w-10 h-10 rounded-full shadow-sm border cursor-pointer ${productIndex === index ? 'border-black' : null}`} key={color?.colorKey?.key} style={{ backgroundColor: color?.colorKey?.hex }} onClick={() => { handleIndex(index) }}></div>
                                    ))
                                }
                            </div>
                        </div>

                        <div>
                            <p className="text-[1.5rem] mb-1">Size:</p>
                            <div className="flex gap-2">
                                {
                                    productData?.ProductDetails[productIndex]?.sizes.map((size, index) => (
                                        <button
                                            key={index}
                                            className={`!px-15 !py-3 border rounded-lg cursor-pointer transition ${sizeIndex === index ? 'border-black' : null}`}
                                            onClick={() => { handleSizeIndex(index) }}
                                        >
                                            {size.size}
                                        </button>
                                    ))
                                }

                            </div>
                        </div>



                        <div className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded-full ${qty < 5 && qty > 0 ? 'bg-yellow-500' : qty <= 0 ? 'bg-red-500' : 'bg-green-500'}`}></div>
                            <p className={`font-semibold ${qty < 5 && qty > 0 ? 'text-yellow-500' : qty <= 0 ? 'text-red-500' : 'text-green-500'}`}>{qty <= 0 ? "Out Of Stock" : "In Stock"}</p>
                        </div>

                        <p className="uppercase underline">Size Chart</p>

                        {
                            qty > 0 && (
                                <>
                                    <div className="flex items-center gap-4 !mt-5">
                                        <p className="text-[1.5rem]">Quantity:</p>
                                        <div className="flex items-center border border-gray-600 rounded-lg">
                                            <button onClick={decreaseQty} className="!px-5 !py-4 cursor-pointer">
                                                <FaMinus />
                                            </button>
                                            <span className="!px-5">{quantity}</span>
                                            <button onClick={() => { increaseQty({ max: qty }) }} className="!px-5 !py-4 cursor-pointer">
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
                                </>
                            )
                        }



                        <p className="!mt-5">
                            {productData?.description}
                        </p>

                        <div className='grid grid-cols-2 gap-15 !mt-15 !pr-20'>
                            {StaticDeliveryCardData?.map((data, index) => (
                                <DeliveryInfoCard key={index} icon={data.icon} title={data.title} subTitle={data.subTitle} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <ProductSection title='You might also like' productsList={data} className='section-gap container-layout bg-[#f8f8f8]' />
        </section >
    );
};

export default SingleProductView;
