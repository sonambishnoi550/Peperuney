"use client";
import React, { useRef, useState } from 'react';
import PeperuneySlider from './common/PeperuneySlider';
import { ACCORDION_ITEMS } from '@/utils/helper';
import Image from 'next/image';
interface AccordionItem {
    title: string;
    content: string;
}

const Faq: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col'>
            <PeperuneySlider className='!bg-[#067A52] h-[76px] sm:h-[100px] flex items-center' />
            <div className='bg-cover lg:bg-[length:100%_100%] bg-no-repeat bg-center py-14 sm:pt-[89px] sm:pb-[92px]' style={{ backgroundImage: `url(/assets/images/webp/faq-bg.webp)` }}>
                <div className='container mx-auto'>
                    <Image className='sm:max-w-[530px] max-w-[280px] mx-auto text-center pb-4' src="/assets/images/webp/what-faq.webp" alt="what-faq" width={530} height={104} />
                    <div className='max-w-[687px] mx-auto'>
                        {ACCORDION_ITEMS.map((item: AccordionItem, index: number) => (
                            <div
                                key={index}
                                className="bg-[#3030304D] border border-white rounded-[10px] mb-[18px] transition-all duration-500"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className={`flex items-center justify-between ff-schoolbell w-full text-left text-white text-2xl sm:text-[32px] sm:leading-[44.56px] font-normal ${activeIndex === index ? 'p-4 sm:pt-[18px] pb-1 sm:px-6' : 'px-6 py-5'
                                        }`}
                                >
                                    <span className='max-w-[569px]'>{item.title}</span>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-0' : 'rotate-180'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {activeIndex === index ? (
                                            <path d="M5 12H19" stroke="white" strokeWidth="1.48" />
                                        ) : (
                                            <>
                                                <path d="M12 5V19" stroke="white" strokeWidth="1.48" />
                                                <path d="M5 12H19" stroke="white" strokeWidth="1.48" />
                                            </>
                                        )}
                                    </svg>
                                </button>
                                <div
                                    ref={(el) => {
                                        if (el) contentRefs.current[index] = el;
                                    }}
                                    style={{
                                        height: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                                    }}
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                >
                                    <div className="p-[0_16px_16px_16px] sm:pb-2 sm:px-6 sm:pt-2 text-white ff-schoolbell font-normal text-xl sm:text-2xl sm:leading-[43.2px]">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
