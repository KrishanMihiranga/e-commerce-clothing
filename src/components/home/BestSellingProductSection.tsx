import gp1 from '/images/products/gp2.webp'
import gp2 from '/images/products/gp5.webp'
import gp3 from '/images/products/gp1.webp'
import { BsArrowRight } from 'react-icons/bs'


const BestSellingProductSection = () => {
    return (
        <div className="grid grid-cols-3 w-full gap-10">
            <div className='relative'>
                <div className='aspect-square overflow-hidden w-full'>
                    <img src={gp1} alt="" />
                </div>
                <div className='flex flex-col text-[5rem] font-bold leading-[5rem] absolute bottom-0 left-0 bg-white w-full !pt-8'>
                    <span>
                        Men's <span className="text-white [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
                            Collection
                        </span>
                    </span>

                    <span className='font-normal text-[3rem] text-gray-600'>Made to fit!</span>
                </div>
            </div>
            <div className="aspect-square overflow-hidden w-full relative">

                <img src={gp2} alt="" className="w-full h-full object-cover" />


                <div className="bg-gradient-to-t from-[#000] to-transparent z-10 w-full h-full absolute top-0 left-0 "></div>

                <div className="flex text-white flex-col text-[2.3rem] font-semibold leading-[3rem] absolute bottom-10 left-10 w-full p-8 z-20 uppercase">
                    <span className="flex items-center gap-3">
                        Minimalistic printed tee
                        <BsArrowRight size={30} />
                    </span>
                    <div className="text-white text-[1.3rem] normal-case font-normal">
                        Comfortable and versatile, perfect for daily wear.
                    </div>
                </div>

            </div>

            <div className="aspect-square overflow-hidden w-full relative">

                <img src={gp3} alt="" className="w-full h-full object-cover" />


                <div className="bg-gradient-to-t from-[#000] to-transparent z-10 w-full h-full absolute top-0 left-0 "></div>

                <div className="flex text-white flex-col text-[2.3rem] font-semibold leading-[3rem] absolute bottom-10 left-10 w-full p-8 z-20 uppercase">
                    <span className="flex items-center gap-3">
                        Minimalistic printed tee
                        <BsArrowRight size={30} />
                    </span>
                    <div className="text-white text-[1.3rem] normal-case font-normal">
                        Comfortable and versatile, perfect for daily wear.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BestSellingProductSection