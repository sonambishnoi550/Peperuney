
import Header from './common/Header'
import Image from 'next/image'
import PeperuneySlider from './common/PeperuneySlider'
const Hero = () => {
  return (
    <div className='bg-cover bg-no-repeat' style={{ backgroundImage: `url(/assets/images/webp/hero-bg.webp)` }}>
      <Header />
      <div className='flex max-sm:mt-[150px] sm:pt-[67px] flex-col justify-center items-center sm:gap-[54px] gap-[95px]'>
        <Image className='lg:max-w-[777px] sm:max-w-[500px] max-w-[373px] w-full pointer-events-none' src="/assets/images/webp/hero-image.webp" alt="hero-image" width={777} height={283} />
        <Image className='w-full sm:block hidden pointer-events-none' src="/assets/images/webp/bike-image.webp" alt="bike-image" width={1440} height={356} />
        <Image className='w-full sm:hidden h-[262px] pointer-events-none' src="/assets/images/webp/small-bike.webp" alt="bike-image" height={263} width={896} />
      </div>
      <PeperuneySlider className='bg-[#DA291C] !z-10 h-[76px] sm:h-[100px] flex items-center' />
    </div>
  )
}

export default Hero