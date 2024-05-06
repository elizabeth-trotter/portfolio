'use client';

import React from 'react'
import { motion } from 'framer-motion';
import SkillsCardComponent from './SkillsCardComponent'
import { SiDotnet, IoLogoReact, TbBrandNextjs, IoLogoAngular, BsBootstrapFill, SiTailwindcss } from '@/app/icons';

export default function LibraryComponent() {
    return (
        <motion.div
            initial={{ opacity: -0, x: '50%' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
        >
            <div className="bg-white dark:bg-gray-800 rounded p-8 border dark:border-gray-700">
                <h3 className=" font-josefin-sans text-lg pb-5 text-start">Frameworks & Libraries</h3>
                <div className="grid grid-rows-2 grid-cols-3 gap-y-5">
                    <SkillsCardComponent icon={SiDotnet} title=".NET" />
                    <SkillsCardComponent icon={IoLogoReact} title="React" />
                    <SkillsCardComponent icon={TbBrandNextjs} title="Next.js" />
                    <SkillsCardComponent icon={IoLogoAngular} title="Angular" />
                    <SkillsCardComponent icon={BsBootstrapFill} title="Boostrap" />
                    <SkillsCardComponent icon={SiTailwindcss} title="Tailwind CSS" />
                </div>
            </div>
        </motion.div>
    )
}