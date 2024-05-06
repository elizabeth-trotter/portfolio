'use client';

import React from 'react'
import { motion } from 'framer-motion';
import SkillsCardComponent from './SkillsCardComponent'
import { SiMicrosoftazure, SiVisualstudio, FiFigma, SiPostman, SiJirasoftware, FaGitAlt } from '@/app/icons';

export default function ToolComponent() {
    return (
        <motion.div
            initial={{ opacity: -0, x: -1000 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
        >
            <div className="bg-white dark:bg-gray-800 rounded p-8 border dark:border-gray-700">
                <h3 className=" font-josefin-sans text-lg pb-5 text-start">Developer Toolbox</h3>
                <div className="grid grid-rows-2 grid-cols-3 gap-y-5">
                    <SkillsCardComponent icon={SiMicrosoftazure} title="Azure" />
                    <SkillsCardComponent icon={SiVisualstudio} title="Visual Studio Code" />
                    <SkillsCardComponent icon={FiFigma} title="Figma" />
                    <SkillsCardComponent icon={SiPostman} title="Postman" />
                    <SkillsCardComponent icon={SiJirasoftware} title="Jira" />
                    <SkillsCardComponent icon={FaGitAlt} title="Git" />
                </div>
            </div>
        </motion.div>
    )
}