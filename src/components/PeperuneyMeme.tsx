import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CustomHeading from './common/CustomHeading';
import Image from 'next/image';
const PeperuneyMeme = () => {
    return (
        <div className=' bg-cover lg:bg-[length:100%_100%] bg-center bg-no-repeat relative meme-bg max-sm:bg-[length:100%_100%]'>
            <div className='max-w-[250px] mx-auto pt-12 max-sm:flex items-center flex-col justify-center md:hidden pb-[30px]'>
                <CustomHeading MyClass='max-w-[555px] text-center' MyText={'PEPERUNEY MEME'} />
                <img className='sm:max-w-[250px] max-w-[184px] text-center -mt-1' src="/assets/images/webp/gallery-image.webp" alt="gallery-image" />
            </div>
            <img className='max-w-[678px] sm:block hidden w-full absolute bottom-0 left-0' src="/assets/images/webp/meme-men.webp" alt="meme-men" />
            <div className='lg:pt-[207px] sm:pt-5 flex lg:gap-[70px] xl:gap-[100px] gap-12 sm:pb-[151px] 2xl:mx-auto 3xl:max-w-[1920px] w-full 3xl:justify-between'>
                <div className='xl:ps-[211px] lg:ps-[150px] md:flex hidden sm:ps-32 relative z-20 max-w-[555px] justify-center items-center flex-col'>
                    <CustomHeading MyClass='max-w-[555px] text-center' MyText={'PEPERUNEY MEME'} />
                    <img className='sm:max-w-[250px] max-w-[184px] text-center -mt-[18px]' src="/assets/images/webp/gallery-image.webp" alt="gallery-image" />
                </div>
                <div className='relative max-w-[820px] overflow-x-hidden'>
                    <Swiper
                        loop={true}
                        spaceBetween={8}
                        slidesPerView={3}
                        autoplay={true}
                        className="relative"
                        centeredSlides={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 22,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 28,
                            },
                            1280: {
                                slidesPerView: 2.5,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <img className='w-full h-[250px] md:h-[267px] lg:h-[259px] xl:h-[360px] object-cover' src="/assets/images/webp/bulls-image.webp" alt="bulls-image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-full h-[250px] md:h-[267px] lg:h-[259px] xl:h-[360px] object-cover' src="/assets/images/webp/poster-carusel.webp" alt="poster-carusel" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-full h-[250px] md:h-[267px] lg:h-[259px] xl:h-[360px] object-cover' src="/assets/images/webp/poster-carusel-two.webp" alt="poster-carusel-two" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-full h-[250px] md:h-[267px] lg:h-[259px] xl:h-[360px] object-cover' src="/assets/images/webp/bulls-image.webp" alt="bulls-image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-full h-[250px] md:h-[267px] lg:h-[259px] xl:h-[360px] object-cover' src="/assets/images/webp/poster-carusel.webp" alt="poster-carusel" />
                        </SwiperSlide>
                    </Swiper>
                    <div className='max-sm:mx-auto max-sm:text-center sm:mt-11 max-sm:mb-[73px] max-sm:mt-[133px]'><button className='sm:max-w-[293px] transition duration-300 transform hover:scale-105'>
                        <Image className='sm:block hidden' src="/assets/images/svg/create-meme.svg" alt="create-meme" width={293} height={75} />
                        <Image className='block sm:hidden' src="/assets/images/svg/meme-create.svg" alt="create-meme" width={293} height={75} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeperuneyMeme;