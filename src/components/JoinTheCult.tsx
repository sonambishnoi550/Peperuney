
import Link from "next/link";
import Image from "next/image";
const JoinTheCult = () => {

    return (
        <div className="flex flex-col">
            <div className="border-t-4 border-b-4 border-black bg-[#8B8581] w-full h-[39px]"></div>
            <div className=' bg-cover lg:bg-[length:100%_100%] bg-no-repeat bg-center join-bg max-sm:bg-join-mobile max-sm:bg-[length:100%_100%] sm:pt-[100px] pt-[60px] md:pt-[140px] pb-[578px] max-sm:h-[850px] relative'>
                <div className='max-w-[674px] mx-auto'>
                    <Image className='md:max-w-[670px] sm:max-w-[500px] mx-auto max-sm:max-w-[371px]' src="/assets/images/webp/join-cult.webp" alt="join-cult" width={670} height={100} />
                    <div className='flex justify-center items-center gap-4 pt-5'>
                            <div
                                className="bg-menu-bg cursor-pointer gap-[15px] flex justify-center items-center bg-no-repeat bg-center"
                            >
                                <Link href="https://x.com/?lang=en">
                                <Image className="w-[100px] hover:scale-110 transition-all duration-700 h-[87px]" src="/assets/images/svg/twitter-two.svg" alt="twitter" width={100} height={87} />
                                </Link>
                                <Link href="https://web.telegram.org/k/">
                                <Image className="hover:scale-110 transition-all duration-700" src="/assets/images/svg/telegram-two.svg" alt="telegram" width={100} height={87} />
                                </Link>
                                <Link href="https://discord.com/channels">
                                <Image className="hover:scale-110 transition-all duration-700" src="/assets/images/svg/discord-two.svg" alt="discord" width={100} height={87} />
                                </Link>
                            </div>
                    </div>
                </div>
                <div className='sm:block hidden absolute xl:top-[37%] xl:left-[30%] lg:top-[49%] lg:left-[30%] 3xl:top-[29%] 3xl:left-[34%] left-[15%] top-[39%]'>
                    <Image className='xl:max-w-[671px] 3xl:max-w-[800px] lg:max-w-[500px] max-w-[620px] w-full mx-auto' src="/assets/images/webp/join-men.webp" alt="join-men-image" width={671} height={445} />
                </div>
            </div>
        </div>
    )
}

export default JoinTheCult