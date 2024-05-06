'use client';

import React from 'react'
import SkillsCardComponent from './SkillsCardComponent'
import { RiJavascriptFill, BiLogoTypescript, SiCsharp, IoLogoHtml5, IoLogoCss3, TbSql } from '@/app/icons'

export default function LanguageComponent() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded p-8 border dark:border-gray-700">
            <h3 className=" font-josefin-sans text-lg pb-5 text-start">Programming Languages</h3>
            <div className="grid grid-rows-2 grid-cols-3 gap-y-5">
                <SkillsCardComponent icon={RiJavascriptFill} language="JavaScript" color='javascriptYellow' />
                <SkillsCardComponent icon={BiLogoTypescript} language="TypeScript" color='typescriptBlue' />
                <SkillsCardComponent icon={SiCsharp} language="C#" color='csharpPurple' />
                <SkillsCardComponent icon={IoLogoHtml5} language="HTML" color='htmlRed' />
                <SkillsCardComponent icon={IoLogoCss3} language="CSS" color='cssBlue' />
                <SkillsCardComponent icon={TbSql} language="SQL" color='sqlBlack' />
            </div>
        </div>
    )
}