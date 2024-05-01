'use client';

import React from 'react'
import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpFromBracket, faFileImport, faRocket } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import CodeWarsLogo from '@/app/assets/codewarslogo.png'
import CodeWarsDarkLogo from '@/app/assets/codewarsdarklogo.png'
import Image from "next/image";

const FooterComponent = (props: {isDarkMode: boolean}) => {
    return (
        <>
            <div className='flex justify-between items-center py-10 px-4 text-black dark:text-white hover:text-slate-600 dark:hover:text-slate-200'>
                <div>
                    <p className='font-josefin-sans text-xs tracking-widest pb-2'>ELIZABETH TROTTER</p>
                    <Link href="#home" className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faRocket} className='text-md text-gray-500 dark:text-gray-400' />
                        <p className='text-xs underline text-gray-500 dark:text-gray-400'>Return to Top</p>
                    </Link>
                </div>
                <div className='flex gap-2'>
                    <Link href='https://github.com/et120' target='_blank'>
                        <FontAwesomeIcon icon={faSquareGithub} className='text-black dark:text-white text-4xl hover:text-slate-600 dark:hover:text-slate-200' />
                    </Link>
                    <Link href='https://www.linkedin.com/in/elizabeth-trotter/' target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} className='text-blue-700 dark:text-white text-4xl hover:text-slate-600 dark:hover:text-slate-200' />
                    </Link>
                    {/* <Link href={''} target='_blank'>
                        <Image src={props.isDarkMode ? CodeWarsDarkLogo : CodeWarsLogo} className='h-[2.1rem] w-[2.1rem] rounded-md pt-[1px]' alt={''} />
                    </Link> */}
                </div>
                {/* <FontAwesomeIcon icon={faFileImport} color='white' fontSize={30}/> */}
            </div>

            {/* <div className='flex justify-end px-4'>
            <Link href="#home" className='flex items-baseline gap-3'>
                <FontAwesomeIcon icon={faRocket} className='text-md text-gray-500 dark:text-gray-400'/>
                <p className='text-xs underline text-gray-500 dark:text-gray-400'>Return to Top</p>
            </Link> 
        </div> */}
        </>
    )
}

export default FooterComponent
