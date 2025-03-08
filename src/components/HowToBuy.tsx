
import { HOW_TO_BUY_CARD_DATA } from "@/utils/helper"
import CustomHeading from "./common/CustomHeading";
import Image from "next/image";
interface CardData {
    id: number;
    title: string;
    description: string;
    width: string;
}
const HowToBuy: React.FC = () => {

    return (
        <div className="relative bg-white max-w-[1920px]">
            <Image
                className="absolute sm:top-[-106px] -top-[60px] w-full h-[69px] sm:h-[164px] lg:h-[195px]"
                src="/assets/images/webp/how-buy-layer.webp"
                alt="how-layer"
                width={1841} height={195} 
            />
            <div className="flex justify-center flex-col items-center pb-10">
                <CustomHeading
                    MyClass="text-center lg:pt-16 pt-11 !z-10"
                    MyText={"HOW TO BUY"}
                />
                <Image
                    className="sm:max-w-[365px] max-w-[231px] sm:-mt-5 -mt-3 max-sm:h-[80px]"
                    src="/assets/images/webp/how-buy-peperuney.webp"
                    alt="how-peperuney" width={365} height={105} 
                />
            </div>
            <div className="bg-cover bg-no-repeat bg-center lg:pt-[100px] pt-[63px] sm:pt-16 2xl:max-w-[1920px] max-w-[1435px] mx-auto" style={{ backgroundImage: `url(/assets/images/webp/how-bg-image.webp)` }}>
                <div className="max-w-[1080px] w-full mx-auto px-5">
                    <div
                        className="flex md:flex-row lg:gap-7 gap-5 flex-col justify-center">
                        {HOW_TO_BUY_CARD_DATA.map((card, index) => (
                            <div
                                key={card.id}
                                className={`w-full flex flex-col ${index === 1
                                    ? "justify-center items-center md:pt-0 pt-8"
                                    : "justify-end"
                                    } ${index === 1 ? "" : "md:pt-[170px] pt-8"
                                    }`}>
                                <div
                                    className={`p-4 bg-white border-4 border-black ${index === 1
                                        ? "xl:w-[322px] lg:w-[285px]"
                                        : "xl:w-[322px] lg:w-[285px]"
                                        }`}>
                                    <div className="flex justify-center -mt-[54px]">
                                        <div className="bg-black rotate-[-5deg] px-4 py-3 flex justify-center items-center">
                                            <p className="font-normal rotate-[-5deg] lg:text-[54px] lg:leading-[54px] text-[28px] leading-7 text-white">
                                                {`0${card.id}`}
                                            </p>
                                        </div>
                                    </div>
                                    <h5 className="xl:text-[40px] lg:text-[28px] lg:leading-7 md:text-xl md:leading-5 text-[28px] leading-7 xl:leading-10 lg:max-w-[282px] font-normal text-center mx-auto max-sm:pt-[30px] sm:pt-[10px]">
                                        {card.title}
                                    </h5>
                                    <p className="font-normal ff-schoolbell md:text-base lg:text-lg text-lg text-center pt-[10px]">
                                        {card.description}
                                    </p>
                                </div>
                                {index === 1 && (
                                    <div className="p-3 bg-white border-4 lg:flex hidden border-black mt-9 gap-3 items-center w-full max-w-[342px]">
                                        <p className="ff-schoolbell text-lg text-nowrap">
                                            CA: 0x93jr98fo2ihf89hf0o82hf0ohi9f0
                                        </p>
                                        <div className="size-8 bg-black flex items-center justify-center">
                                            <Image src="/assets/images/svg/solar-copy.svg" alt="solar" width={32} height={32}/>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <Image className="sm:max-w-[1220px] sm:block hidden w-full mx-auto max-md:pt-7 md:-mt-7" src="/assets/images/webp/pizza-image.webp" alt="pizza-image" width={1220} height={495} />
                <Image className="sm:hidden block max-md:pt-7 w-full" src="/assets/images/webp/pizza-image-mobile.webp" alt="mobile-pizaa"
                    width={690} height={280} />
            </div>
        </div>
    );
};

export default HowToBuy;