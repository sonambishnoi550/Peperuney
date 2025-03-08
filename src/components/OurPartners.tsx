import React from "react";
import { OUR_PARTNERS } from "@/utils/helper";
import CustomHeading from "./common/CustomHeading";
import Image from "next/image";
const OurPartners = () => {

    return (
        <div className='bg-cover bg-no-repeat bg-center lg:pt-[113px] pt-16 pb-[46px] xl:pb-[280px] lg:pb-56' style={{ backgroundImage: `url(/assets/images/png/our-partners-bg.webp)` }}>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-center items-center max-w-[1200px] w-full mx-auto'>
                    <CustomHeading MyClass='text-center' MyText={'OUR PARTNERS'} />
                    <Image src="/assets/images/png/we-work-with.webp" alt="work" className='lg:w-[444px] w-[250px] lg:pb-[100px] sm:pb-12 pb-4 sm:-mt-5 -mt-3' width={444.34} height={73.98} />
                    <div className='flex flex-wrap flex-row -mx-3 justify-center w-full'>
                        {OUR_PARTNERS.map((obj, index) => (
                            <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-3 flex justify-center items-center lg:pb-6 pb-5'>
                                <Image src={obj.image} alt="svg" className='sm:max-w-[360px] max-w-[236px] w-full' width={360} height={140} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPartners