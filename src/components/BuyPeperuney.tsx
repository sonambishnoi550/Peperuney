import React from 'react'
import PeperuneySlider from "@/components/common/PeperuneySlider"
import Image from "next/image";
export const BuyPepruney = () => {

    return (
        <div className='flex flex-col max-sm:-mt-8'>
            <div className='bg-cover bg-no-repeat bg-center sm:h-[1033px] h-[652px] sm:mt-[52px] justify-center flex items-end' style={{ backgroundImage: `url(/assets/images/webp/buy-bg.webp)` }}>
                <div className='container'>
                    <div className='flex flex-col justify-center sm:pb-[30px] pb-5 items-center gap-2'>
                        <button className="cursor-pointer">
                            <Image className='max-w-[262px] transition duration-300 transform hover:scale-105 pointer-events-auto' src="/assets/images/webp/logo.webp" alt="logo-image" width={262} height={75} /></button>
                        <Image className='max-w-[160px] pointer-events-auto' src="/assets/images/webp/all-in-man.webp" alt="all-image" width={161} height={69} />
                    </div>
                </div>
            </div>
            <PeperuneySlider className=' !border-b-0 !pb-[90px] !pt-[30px]' bgColor="bg-[#067A52]" />
        </div>
    )
}
export default BuyPepruney
