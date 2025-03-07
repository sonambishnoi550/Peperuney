import React from "react";
import Image from "next/image";

const Pizzanomics = () => {

    return (
        <div className='relative bg-[#DA291C] overflow-hidden max-w-[1440px] mx-auto'>
            <Image className='sm:w-full max-w-[972px] w-[972px] relative z-10 object-contain sm:max-w-full' src="/assets/images/png/pizzanomics-layer.webp" alt="pizzanomics-layer" width={1440} height={346} />
            <p className='absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-16 xl:left-20 top-[50px] sm:top-4 md:top-[30px] drop-shadow-[10.7px_-10.7px_0px_#FBDB81] text-[#893101] text-[60px] sm:text-[70px] lg:text-[90px] xl:text-[141px] leading-[100%] z-20'>PIZZANOMICS</p>
            <div className='flex lg:flex-row flex-col-reverse justify-between gap-5'>
                <div className='relative z-10 lg:-mt-10 xl:-mt-20 lg:ml-[60px] xl:ml-[67px]'>
                    <Image className='max-w-[301px] sm:max-w-[420px] xl:max-w-[485px] w-full mx-auto lg:mx-0 max-md:pb-4' src="/assets/images/png/pepe-runny-image.webp" alt="peperunry-image" width={485} height={257.31} />
                </div>
                <div className="xl:max-w-[812px] lg:w-full -mx-5 lg:mx-0">
                    <div className='bg-black relative -rotate-3 w-full h-[341px] pb-10 sm:pb-11 flex justify-center items-end xl:-mt-[240px] -mt-[237px] sm:-mt-[225px] lg:-mt-[260px]'>
                        <p className='font-normal text-[70px] sm:text-[80px] md:text-[85px] xl:text-[135px] leading-[100%] text-white uppercase mb-0.5'>42 BILLION</p>
                    </div>
                    <p className='text-4xl sm:text-[80px] sm:leading-[80px] font-normal text-white relative my-5 -rotate-3 text-center'>token supply</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between relative lg:-mt-4">
                <div className="bg-black -rotate-[4deg] -mx-7 xl:h-[111px] lg:w-[630px] px-7 my-auto relative z-10">
                    <p className='text-white font-normal text-[52px] sm:text-[75px] xl:text-[92px] text-center lg:text-left lg:ml-11 leading-[100%] text-nowrap mb-12 lg:mb-2.5 my-2.5'>LP BURNED</p>
                </div>
                <div className="lg:max-w-[942px] lg:w-full relative z-10 -mt-12 lg:mt-0 -mx-10 lg:mx-0">
                    <Image src="/assets/images/png/tax-layer.webp" alt="taxLayer" className='sm:w-full object-cover w-[610px] max-w-[610px] sm:max-w-full' width={942} height={306} />
                    <p className='text-[#893101] drop-shadow-[6px_-6px_0px_#FBDB81] absolute left-1/2 top-[20%] -translate-x-1/2 tracking-[0.04em] text-nowrap font-normal text-[60px] sm:text-[80px] xl:text-[115px] leading-[100%] uppercase'>zero tax</p>
                </div>
                <span className='lg:flex bg-[#F83628] w-full absolute left-0 hidden -mt-[1px] -top-1 xl:top-10 z-[1] h-24'></span>
            </div>
            <div className='bg-cover lg:bg-[length:100%_100%] bg-no-repeat bg-center max-sm:bg-mobile-view' style={{ backgroundImage: `url(/assets/images/png/pizzanomics-bg.webp)` }}>
                <div className="max-sm:bg-mobile-layer bg-100 -mt-[207px] bg-cover bg-no-repeat bg-center min-h-[1190px] pt-[162px]">
                    <div className="flex w-full flex-col lg:flex-row gap-7 sm:gap-12 xl:ml-auto px-5 xl:px-0 xl:mx-11 mx-auto xl:w-fit md:-mb-[200px]">
                        <div className="max-w-[503px] w-full pt-7 mx-auto lg:mx-0 flex flex-col items-center relative z-10">
                            <Image src="/assets/images/png/window.webp" alt="window" className='w-full' width={500} height={370} />
                            <p className='mt-4 uppercase font-normal text-[52px] sm:text-[80px] text-center leading-[100%] text-white drop-shadow-[6px_6px_0px_#000000]'>bake to earn</p>
                            <button className='mt-5 sm:block hidden'>
                                <Image className='transition duration-300 transform hover:scale-105' src="/assets/images/svg/earn.svg" alt="earn" width={313} height={97.13} /></button>
                            <button className='mt-7 sm:hidden block'><Image className='transition duration-300 transform hover:scale-105' src="/assets/images/svg/earn.svg" alt="earn" width={335} height={74.78} /></button>
                        </div>
                        <Image src="/assets/images/png/green-pizza.png" alt="pizza" className='lg:max-w-[656px] max-w-[468px] mx-auto sm:w-full -ml-14 sm:mx-auto lg:mx-0 max-sm:-mt-8' width={656} height={828.72} />
                    </div>
                    <div className='max-sm:bg-pizzanomics-card bg-cover bg-no-repeat bg-center relative md:pt-[160px] lg:pt-[320px]  max-sm:mt-[184px]' style={{ backgroundImage: `url(/assets/images/png/cards-pizzanomics-bg.webp)` }}>
                        <div className="flex flex-wrap justify-center lg:flex-nowrap lg:flex-row mx-auto max-w-[1240px] w-full px-5 gap-10 xl:gap-[60px] pb-[75px] sm:pb-8 pt-10 pizzanomics-gradient">
                            <Image src="/assets/images/png/coin-gecko.webp" alt="coin" className='lg:w-[30%] md:w-[340px] w-[236px] object-contain h-[92px] sm:h-auto sm:w-[280px]' width={360} height={140} />
                            <Image src="/assets/images/png/dex-screener.webp" alt="dexScreener" className='lg:w-[30%] md:w-[340px] w-[236px] object-contain h-[92px] sm:h-auto sm:w-[280px]' width={360} height={140} />
                            <Image src="/assets/images/png/dex-tools.webp" alt="dexTools" className='lg:w-[30%] md:w-[340px] w-[236px] object-contain h-[92px] sm:h-auto sm:w-[280px]' width={360} height={140} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pizzanomics