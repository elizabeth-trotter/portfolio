'use client';

import React from 'react'
import { motion } from 'framer-motion';
import SkillsCardComponent from './SkillsCardComponent'
import { SiMicrosoftazure, SiVisualstudio, FiFigma, SiPostman, SiJirasoftware, FaGitAlt } from '@/app/icons';

export default function ToolComponent() {
    return (
        <div className="overflow-x-hidden">
            <motion.div
                initial={{ opacity: -0, x: '-50%' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }} 
            >
                <div className="bg-white dark:bg-gray-800 border-gray-300 rounded-lg p-8 3xl:px-10 3xl:pt-10 3xl:pb-12 border dark:border-gray-700">
                    <p className="font-josefin-sans text-lg 3xl:text-xl 4xl:text-2xl pb-5 3xl:pb-10 text-start"><span className='hidden 3xs:inline'>Developer </span>Toolbox</p>
                    <div className="grid grid-rows-3 grid-cols-2 gap-y-7 xs:grid-rows-2 xs:grid-cols-3 xs:gap-y-5 3xl:gap-y-12">
                        <SkillsCardComponent icon={SiMicrosoftazure} title="Azure" />
                        <SkillsCardComponent icon={SiVisualstudio} title="VS Code" />
                        <SkillsCardComponent icon={FiFigma} title="Figma" />
                        <SkillsCardComponent icon={SiPostman} title="Postman" />
                        <SkillsCardComponent icon={SiJirasoftware} title="Jira" />
                        <SkillsCardComponent icon={FaGitAlt} title="Git" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}