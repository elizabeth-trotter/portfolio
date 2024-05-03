'use client';

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Footer } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { BsGithub } from "react-icons/bs";
import { SiCodewars } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import CodewarsFooter from '@/app/assets/images/codewarslogofooter.png';

const FooterComponent = (props: { isDarkMode: boolean }) => {
    return (
        <Footer container className="bg-[#faf0e6] dark:bg-gray-900 font-josefin-sans border-0 shadow-none">
            <div className="w-full xs:flex xs:items-center xs:justify-between">
                <div className='flex text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
                    <FontAwesomeIcon icon={faRocket} className='pe-2' />
                    <p>2024 <Link className='hover:underline cursor-pointer' href={'#home'}>Elizabeth Trotter</Link></p>
                </div>
                <div className="mt-4 flex space-x-6 xs:mt-0 xs:justify-center items-center">
                    <Footer.Icon href="mailto:elizabeth.dev.inquiry@gmail.com" icon={MdOutlineAlternateEmail} />
                    <Footer.Icon href="https://github.com/et120" target='_blank' icon={BsGithub} />
                    <Footer.Icon href="https://www.linkedin.com/in/elizabeth-trotter" target='_blank' icon={FaLinkedinIn} />
                    {/* <Footer.Icon href="https://www.codewars.com/users/et120" icon={SiCodewars} /> */}
                    <Link href={'https://www.codewars.com/users/et120'} target='_blank'><Image src={CodewarsFooter} alt={"Codewars logo"} className="h-6 w-6" /></Link>
                </div>
            </div>
        </Footer>
    )
}

export default FooterComponent;