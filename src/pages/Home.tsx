import { useState } from 'react';
import bgVideo from '../../public/video/home_video.mp4'
import popularProduct from '../../public/images/tshirt/front.webp'
import { BsArrowRight } from 'react-icons/bs';

const Home = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    const handleVideoLoad = () => {
        setIsLoaded(true);
    };

    return (
        <section className="container-layout primary-text">
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
                    <h5 className='max-w-[60ch]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eum recusandae quo! A ex vitae tenetur magni dolorum sunt ut omnis, illo quas molestiae fuga consequatur illum? Expedita, incidunt laborum?</h5>
                    <button className='!px-[3rem] !py-[1.3rem] text-center rounded-3xl bg-white text-[#000]'>Explore more</button>
                </div>
                <div className='border border-white w-[25rem] h-max rounded-3xl gap-2 overflow-hidden absolute right-10 top-10 flex z-20 flex-col items-center !p-[1rem]'>
                    <img src={popularProduct} alt="Popular product" className='h-[23rem] w-full rounded-3xl'/>
                    <button className='flex items-center gap-2 bg-gray-200 w-full !py-[.5rem] rounded-xl justify-center cursor-pointer'>Shop this product <BsArrowRight/> </button>
                </div>
            </div>
        </section>

    )
}

export default Home