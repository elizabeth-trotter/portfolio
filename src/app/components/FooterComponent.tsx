'use client';

import React from 'react'
import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpFromBracket, faFileImport, faRocket } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from "next/image";
import { Footer } from 'flowbite-react';
import { BsLinkedin, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiCodewars } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import CodewarsDark from '@/app/assets/codewarslogodark.png';
import CodewarsLight from '@/app/assets/codewarslogolight.png';
import CodewarsFooter from '@/app/assets/codewarslogofooter.png';

const FooterComponent = (props: { isDarkMode: boolean }) => {
    return (
        <>
            <Footer container className="bg-[#faf0e6] dark:bg-gray-900 font-josefin-sans border-0 shadow-none">
                <div className="w-full xs:flex xs:items-center xs:justify-between">
                    <div className='flex text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
                        <FontAwesomeIcon icon={faRocket} className='pe-2' />
                        <p>2024 <Link className='hover:underline cursor-pointer' href={'#home'}>Elizabeth Trotter</Link></p>
                    </div>
                    <div className="mt-4 flex space-x-6 xs:mt-0 xs:justify-center items-center">
                        <Footer.Icon href="mailto:elizabeth.dev.inquiry@gmail.com" target='_blank' icon={MdOutlineAlternateEmail} />
                        <Footer.Icon href="https://github.com/et120" target='_blank' icon={BsGithub} />
                        <Footer.Icon href="https://www.linkedin.com/in/elizabeth-trotter" target='_blank' icon={FaLinkedinIn} />
                        {/* <Footer.Icon href="https://www.codewars.com/users/et120" icon={SiCodewars} /> */}
                        <Link href={'https://www.codewars.com/users/et120'} target='_blank'><Image src={CodewarsFooter} alt={"Codewars logo"} className="h-6 w-6" /></Link>
                    </div>
                </div>
            </Footer>
        </>
        // ORIGINAL FOOTER - still undecided
        //     <>
        //     <div className='flex justify-between items-center py-10 px-4 text-black dark:text-white hover:text-slate-600 dark:hover:text-slate-200'>
        //         <div>
        //             <p className='font-josefin-sans text-xs tracking-widest pb-2'>ELIZABETH TROTTER</p>
        //             <Link href="#home" className='flex items-center gap-2'>
        //                 <FontAwesomeIcon icon={faRocket} className='text-md text-gray-500 dark:text-gray-400' />
        //                 <p className='text-xs underline text-gray-500 dark:text-gray-400'>Return to Top</p>
        //             </Link>
        //         </div>
        //         <div className='flex gap-2'>
        //             <Link href='https://github.com/et120' target='_blank'>
        //                 <FontAwesomeIcon icon={faSquareGithub} className='text-black dark:text-white text-4xl hover:text-slate-600 dark:hover:text-slate-200' />
        //             </Link>
        //             <Link href='https://www.linkedin.com/in/elizabeth-trotter/' target='_blank'>
        //                 <FontAwesomeIcon icon={faLinkedin} className='text-blue-700 dark:text-white text-4xl hover:text-slate-600 dark:hover:text-slate-200' />
        //             </Link>
        //             {/* <Link href={''} target='_blank'>
        //                 <Image src={props.isDarkMode ? CodeWarsDarkLogo : CodeWarsLogo} className='h-[2.1rem] w-[2.1rem] rounded-md pt-[1px]' alt={''} />
        //             </Link> */}
        //         </div>
        //         {/* <FontAwesomeIcon icon={faFileImport} color='white' fontSize={30}/> */}
        //     </div>

        //     {/* <div className='flex justify-end px-4'>
        //     <Link href="#home" className='flex items-baseline gap-3'>
        //         <FontAwesomeIcon icon={faRocket} className='text-md text-gray-500 dark:text-gray-400'/>
        //         <p className='text-xs underline text-gray-500 dark:text-gray-400'>Return to Top</p>
        //     </Link> 
        // </div> */}
        // </>
    )
}

export default FooterComponent
