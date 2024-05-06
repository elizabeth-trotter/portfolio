'use client';

import React from 'react'
import SkillsCardComponent from './SkillsCardComponent'
import { SiDotnet, IoLogoReact, TbBrandNextjs, IoLogoAngular, BsBootstrapFill, SiTailwindcss } from '@/app/icons';

export default function LibraryComponent() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded p-8 border dark:border-gray-700">
            <h3 className=" font-josefin-sans text-lg pb-5 text-end">Frameworks & Libraries</h3>
            <div className="grid grid-rows-2 grid-cols-3 gap-y-5">
                <SkillsCardComponent icon={SiDotnet} title=".NET" />
                <SkillsCardComponent icon={IoLogoReact} title="React" />
                <SkillsCardComponent icon={TbBrandNextjs} title="Next.js" />
                <SkillsCardComponent icon={IoLogoAngular} title="Angular" />
                <SkillsCardComponent icon={BsBootstrapFill} title="Boostrap" />
                <SkillsCardComponent icon={SiTailwindcss} title="Tailwind CSS" />
            </div>
        </div>
    )
}