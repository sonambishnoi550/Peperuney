import React from "react";
import CustomHeading from "./common/CustomHeading";
import Description from './common/Description'
import Image from "next/image";
import BuyPepruney from "./BuyPeperuney";

const MeetPeperuney = () => {

    return (
        <div className='relative meet-bg'>
            <Image className='absolute sm:block hidden -top-[2%] w-full max-xl:h-[200px] xl:h-[268px] pointer-events-auto' src="/assets/images/webp/meet-layer.webp" alt="meet-layer" width={1508} height={272} />
            <Image src="/assets/images/webp/meet-small-layer.webp" className='absolute top-0 h-[200px] sm:hidden block w-full pointer-events-auto' alt="small-layer" width={1118} height={201} />
            <Image className='absolute top-8 sm:hidden block pointer-events-auto' src="/assets/images/webp/clouds-image.webp" alt="clouds-image" width={496} height={1216} />
            <div className='container max-w-[1360px] mx-auto lg:pb-[293px] lg:pt-[250px] pt-[200px] px-4'>
                <div className='w-full relative'>
                    <Image className='absolute -top-28 left-0 sm:block hidden pointer-events-auto' src="/assets/images/webp/meet-bg.webp" alt="meet-image" width={1320} height={1031} />
                    <div className='lg:flex-row flex-col max-lg:flex-col-reverse flex gap-1 relative z-10'>
                        <div className='lg:w-[44%] flex items-center justify-center relative z-10'>
                            <Image className='max-w-[580px] w-full max-sm:-mt-8 pointer-events-auto' src="/assets/images/webp/meet-cartoon-image.webp" alt="meet-cartoon" width={580} height={530} />
                        </div>
                        <div className='lg:w-[56%] w-full'>
                            <CustomHeading MyClass='text-center lg:pb-3 sm:pb-6' MyText={'MEET PEPERUNEY'} />
                            <div className='meet-vector bg-[length:100%_100%] bg-no-repeat bg-center sm:px-7 sm:py-10 px-3'>
                                <div className='flex justify-center sm:-mt-16 xl:-mt-20'><Image className='lg:max-w-[332px] sm:max-w-[195px] max-w-[0] max-sm:h-[77px] w-full pointer-events-auto' src="/assets/images/webp/pizza-guy.webp" alt="pizza-guy" width={337} height={102} /></div>
                                <div className='sm:ps-12 ps-4'>
                                    <Description MyClass='lg:max-w-[613px] w-full' MyText={`The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse, here to leave his greasy mark on the memeverse one slice at a time. PepeRuney's the king of high-stakes and low-stress vibin’. Spot the red hat and polo? You know it’s pizza time, baby! Whether he’s hustlin’ for the next big score or chillin’ with the Boys Club, PepeRuney guarantees one thing: the vibes and the dough are always rollin’`} />
                                    <div className='border-b border-[#0E0E0E] max-sm:pt-2'></div>
                                    <div className='flex justify-between max-sm:gap-2 sm:pt-5 items-center sm:pb-4 pb-3'>
                                        <p className='xl:text-[32px] xl:leading-[52px] sm:text-2xl text-[22px] text-[#0E0E0E] ff-schoolbell'>FEELS GREAT MAN!</p>
                                        <button>
                                            <Image className='xl:max-w-[337px] lg:max-w-[240px] md:max-w-[200px] max-w-[127px] transition duration-300 transform hover:scale-105 pointer-events-auto' src="/assets/images/webp/manifesto.webp" alt="manifesto" width={274} height={74} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BuyPepruney/>
        </div>
    )
}

export default MeetPeperuney