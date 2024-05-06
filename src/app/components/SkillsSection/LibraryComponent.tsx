'use client';

import React from 'react'
import SkillsCardComponent from './SkillsCardComponent'
import { SiDotnet, IoLogoReact, TbBrandNextjs, IoLogoAngular, BsBootstrapFill, SiTailwindcss } from '@/app/icons';

export default function LibraryComponent() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded p-8 border dark:border-gray-700">
            <h3 className=" font-josefin-sans text-lg pb-5 text-end">Frameworks & Libraries</h3>
            <div className="grid grid-rows-2 grid-cols-3 gap-y-5">
                <SkillsCardComponent icon={SiDotnet} language=".NET" color='#512bd4' />
                <SkillsCardComponent icon={IoLogoReact} language="React" color='#61DBFB' />
                <SkillsCardComponent icon={TbBrandNextjs} language="Next.js" color='#682876' />
                <SkillsCardComponent icon={IoLogoAngular} language="Angular" color='#e34c26' />
                <SkillsCardComponent icon={BsBootstrapFill} language="Boostrap" color='#264de4' />
                <SkillsCardComponent icon={SiTailwindcss} language="Tailwind CSS" color='black' />
            </div>
            <div className='bg-[#61DBFB]'>
                test
            </div>
        </div>
    )
}