
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='relative'>
            <Image className='absolute sm:block hidden -top-[54px] h-[120px] w-full' src="/assets/images/webp/footer-vector.webp" alt="footer-layer" width={1440} height={120} />
            <Image className='absolute sm:hidden block -top-8 h-[272px] w-full' src="/assets/images/webp/footer-vector-mobile.webp" alt="footer-vector" width={375} height={293} />
            <div className='container max-sm:px-2 mx-auto'>
                <div className='z-10 relative flex xl:justify-between justify-center items-center flex-wrap max-xl:gap-6 py-5 md:pt-3 md:pb-9'>
                    <p className='ff-schoolbell font-normal text-lg text-black text-center max-sm:max-w-[272px] max-sm:mx-auto'>
                        Copyright ⓒ {currentYear} Peperuney Pizza. All rights Reserved
                    </p>
                    <div className='flex items-center max-sm:gap-3 gap-4'>
                        <p className='ff-schoolbell font-normal text-lg text-black'>CA: 0x93jr98fo2ihf89hf0o82hf0ohi9f0</p>
                        <div className='bg-black size-8 p-2 cursor-pointer'>
                            <Image src="/assets/images/svg/solar-copy.svg" alt="solar-copy" width={32} height={32} />
                        </div>
                        <div className='border border-black size-8 p-2 cursor-pointer'>
                            <Image src="/assets/images/svg/form-kit.svg" alt="form-kit" width={32} height={32} />
                        </div>
                    </div>
                    <div className='flex flex-wrap max-sm:justify-center gap-6 max-sm:gap-5 max-sm:max-w-[335px] max-sm:mx-auto'>
                        <Link className='ff-schoolbell hover:text-[#F83628] transition duration-300 hover:after:border-b-[#F83628] font-normal text-lg relative after:absolute after:w-full after:h-[1px] after:border-b xl:after:bottom-[7px] after:bottom-[6px] after:left-0 after:content-[""] after:border-b-black' href="/disclaimer">
                            Disclaimer
                        </Link>
                        <Link className='ff-schoolbell hover:text-[#F83628] transition duration-300 hover:after:border-b-[#F83628] font-normal text-lg relative after:absolute after:w-full after:h-[1px] after:border-b xl:after:bottom-[7px] after:bottom-[6px] after:left-0 after:content-[""] after:border-b-black' href="mailto:contact@peperuney.pizza">
                            contact@peperuney.pizza
                        </Link>
                        <Link className='ff-schoolbell hover:text-[#F83628] transition duration-300 hover:after:border-b-[#F83628] font-normal text-lg relative after:absolute after:w-full after:h-[1px] after:border-b xl:after:bottom-[7px] after:bottom-[6px] after:left-0 after:content-[""] after:border-b-black' href="/whitepaper">
                            White paper
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
