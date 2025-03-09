import { useEffect, useState } from 'react';
import bgVideo from '/video/home_video.mp4'
import popularProduct from '/images/tshirt/front.webp'
import { BsArrowRight } from 'react-icons/bs';
import DeliveryInfoCard from '../components/home/DeliveryInfoCard';
import { MensCollection, PopularProductsData, StaticDeliveryCardData, WomensCollection } from '../utils/data/commonDataArrays';
import ProductSection from '@/components/home/ProductSection';
import BestSellingProductSection from '@/components/home/BestSellingProductSection';


const Home = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => { window.scrollTo(0, 0); }, []);
    
    const handleVideoLoad = () => {
        setIsLoaded(true);
    };

    return (
        <section className="primary-text flex flex-col items-center justify-between gap-10">
            <div className=' flex flex-col items-center justify-between gap-10 w-full container-layout'>
                <div className="w-full h-[70rem] rounded-4xl overflow-hidden relative">
                    <div className="bg-black w-full h-full absolute top-0 left-0 z-10" style={{ backgroundColor: "rgba(0, 0, 0, 0.01)" }}></div>
                    <video
                        src={bgVideo}
                        className={`w-full h-full object-cover transition-all duration-500 ${isLoaded ? 'blur-0' : 'blur-[10px]'}`}
                        autoPlay
                        muted
                        loop
                        playsInline
                        onLoadedData={handleVideoLoad}
                    />
                    <div className="absolute text-white bottom-10 left-10 p-4 z-20 flex gap-5 flex-col items-start justify-between">
                        <h1 className='text-8xl font-bold uppercase'>Address Clothing</h1>
                        <h5 className='max-w-[40ch]'>Exclusive wear,  Remarkable Fashion Experience with unbreakable Trust</h5>
                        <button className='!px-[3rem] !py-[1.3rem] text-center rounded-3xl bg-white text-[#000] uppercase'>Shop now</button>
                    </div>
                    <div className='border border-white w-[25rem] h-max rounded-3xl gap-2 overflow-hidden absolute right-10 top-10 flex z-20 flex-col items-center !p-[1rem]'>
                        <img src={popularProduct} alt="Popular product" className='h-[23rem] w-full rounded-3xl' />
                        <button className='flex items-center gap-2 bg-gray-200 w-full !py-[.5rem] rounded-xl justify-center cursor-pointer'>Shop this product <BsArrowRight /> </button>
                    </div>
                </div>
                <div className='flex w-full items-center justify-between inner-layout'>
                    {StaticDeliveryCardData?.map((data, index) => (
                        <DeliveryInfoCard key={index} icon={data.icon} title={data.title} subTitle={data.subTitle} />
                    ))}
                </div>
            </div>
            <ProductSection title='Popular right now' productsList={PopularProductsData} className='section-gap container-layout bg-[#f8f8f8]' />
            <BestSellingProductSection data={MensCollection} className='section-gap container-layout' />
            <ProductSection title="Latest from men's" productsList={PopularProductsData} className='section-gap container-layout bg-[#f8f8f8]' />
            <BestSellingProductSection data={WomensCollection} className='section-gap container-layout' />
            <ProductSection title="Latest from women's" productsList={PopularProductsData} className='section-gap container-layout bg-[#f8f8f8]' />
        </section>

    )
}

export default Home