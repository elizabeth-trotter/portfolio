'use client';

import React from 'react'
import { motion } from 'framer-motion';
import SkillsCardComponent from './SkillsCardComponent'
import { SiDotnet, IoLogoReact, TbBrandNextjs, IoLogoAngular, BsBootstrapFill, SiTailwindcss } from '@/app/icons';

export default function LibraryComponent() {
    return (
        <div className="overflow-x-hidden">
            <motion.div
                initial={{ opacity: -0, x: '50%' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border dark:border-gray-700">
                    <p className="font-josefin-sans text-lg pb-5 text-start">Frameworks<span className='hidden 3xs:inline'> & Libraries</span></p>
                    <div className="grid grid-rows-3 grid-cols-2 gap-y-7 xs:grid-rows-2 xs:grid-cols-3 xs:gap-y-5">
                        <SkillsCardComponent icon={SiDotnet} title=".NET" />
                        <SkillsCardComponent icon={IoLogoReact} title="React" />
                        <SkillsCardComponent icon={TbBrandNextjs} title="Next.js" />
                        <SkillsCardComponent icon={IoLogoAngular} title="Angular" />
                        <SkillsCardComponent icon={BsBootstrapFill} title="Bootstrap" />
                        <SkillsCardComponent icon={SiTailwindcss} title="Tailwind CSS" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}