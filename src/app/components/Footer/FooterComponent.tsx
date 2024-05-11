'use client';

// External imports
import Link from 'next/link';
import Image from "next/image";
import React from 'react';
import { Footer } from 'flowbite-react';

// Internal imports
import { BsGithub, SiCodewars, FaLinkedinIn, MdOutlineAlternateEmail, CodewarsFooter, IoIosRocket } from "@/app/icons";

const FooterComponent = (props: { isDarkMode: boolean }) => {
    return (
        <Footer container className="bg-[#faf0e6] dark:bg-gray-900 font-josefin-sans border-0 shadow-none">
            <div className="w-full xs:flex xs:items-center xs:justify-between">
                <div className='flex text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
                    <Footer.Icon icon={IoIosRocket} />
                    <p className='ps-2'>2024 <Link className='hover:underline cursor-pointer' href={'#home'}>elizabeth-trotter</Link></p>
                </div>
                <div className="mt-4 flex space-x-6 xs:mt-0 xs:justify-center items-center">
                    <Footer.Icon href="mailto:elizabeth.dev.inquiry@gmail.com" icon={MdOutlineAlternateEmail} />
                    <Footer.Icon href="https://github.com/elizabeth-trotter" target='_blank' icon={BsGithub} />
                    <Footer.Icon href="https://www.linkedin.com/in/elizabeth-trotter" target='_blank' icon={FaLinkedinIn} />
                    <Link href={'https://www.codewars.com/users/elizabeth-trotter'} target='_blank'><Image src={CodewarsFooter} alt={"Codewars logo"} className="h-6 w-6" /></Link>
                </div>
            </div>
        </Footer>
    )
}

export default FooterComponent;