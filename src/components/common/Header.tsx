"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="md:pt-[30px] pt-4">
            <div className="container max-w-[1300px] mx-auto px-4">
                <div className="flex justify-between">
                    <Link href="#">
                        <Image className="max-sm:w-[120px]" src="/assets/images/webp/logo.webp" alt="logo-image" width={262} height={75} />
                    </Link>
                    <div className="flex md:gap-10 gap-2">
                        <div className="flex md:gap-3 gap-1">
                            <Image className="max-sm:w-[20px]" src="/assets/images/svg/flag.svg" alt="flag" width={41} height={31} />
                            <Image className="max-sm:w-[10px]" src="/assets/images/svg/dropdown.svg" alt="dropdown" width={16} height={16} />
                        </div>
                        <div className="flex gap-2 items-center">
                            <Link className="max-sm:w-[30px] hover:scale-110 transition-all duration-700" href="https://x.com/?lang=en">
                                <Image src="/assets/images/svg/twitter.svg" alt="twitter" width={77} height={67} />
                            </Link>
                            <Link className="max-sm:w-[30px] hover:scale-110 transition-all duration-700" href="https://web.telegram.org/k/">
                                <Image src="/assets/images/svg/telegram.svg" alt="telegram" width={77} height={67} />
                            </Link>
                            <Link className="max-sm:w-[30px] hover:scale-110 transition-all duration-700" href="https://discord.com/channels">
                                <Image src="/assets/images/svg/discord.svg" alt="discord" width={77} height={67} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
