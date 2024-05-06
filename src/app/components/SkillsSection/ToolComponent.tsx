'use client';

import React from 'react'
import SkillsCardComponent from './SkillsCardComponent'
import { SiMicrosoftazure, SiVisualstudio, FiFigma, SiPostman, SiJirasoftware, FaGitAlt } from '@/app/icons';

export default function ToolComponent() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded p-8 border dark:border-gray-700">
            <h3 className=" font-josefin-sans text-lg pb-5 text-start">Developer Toolbox</h3>
            <div className="grid grid-rows-2 grid-cols-3 gap-y-5">
                <SkillsCardComponent icon={SiMicrosoftazure} language="Azure" color='#f7df1e' />
                <SkillsCardComponent icon={SiVisualstudio} language="Visual Studio Code" color='#007acc' />
                <SkillsCardComponent icon={FiFigma} language="Figma" color='#682876' />
                <SkillsCardComponent icon={SiPostman} language="Postman" color='#e34c26' />
                <SkillsCardComponent icon={SiJirasoftware} language="Jira" color='#264de4' />
                <SkillsCardComponent icon={FaGitAlt} language="Git" color='black' />
            </div>
        </div>
    )
}