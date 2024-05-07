'use client';

import React from 'react'
import { motion, useInView } from "framer-motion";
import SkillsCardComponent from './SkillsCardComponent'
import { RiJavascriptFill, BiLogoTypescript, SiCsharp, IoLogoHtml5, IoLogoCss3, TbSql } from '@/app/icons'

export default function LanguageComponent() {

    return (
        <div className="overflow-x-hidden">
            <motion.div
                initial={{ opacity: -0, x: '-50%' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className="bg-white dark:bg-gray-800 rounded p-8 border dark:border-gray-700">
                    <h3 className=" font-josefin-sans text-lg pb-5 text-start"><span className='hidden 3xs:inline'>Programming </span>Languages</h3>
                    <div className="grid grid-rows-3 grid-cols-2 gap-y-7 xs:grid-rows-2 xs:grid-cols-3 xs:gap-y-5">
                        <SkillsCardComponent icon={RiJavascriptFill} title="JavaScript" />
                        <SkillsCardComponent icon={BiLogoTypescript} title="TypeScript" />
                        <SkillsCardComponent icon={SiCsharp} title="C#" />
                        <SkillsCardComponent icon={IoLogoHtml5} title="HTML" />
                        <SkillsCardComponent icon={IoLogoCss3} title="CSS" />
                        <SkillsCardComponent icon={TbSql} title="SQL" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}