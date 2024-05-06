'use client';

import React from 'react'
import SkillsCardComponent from './SkillsCardComponent'
import { RiJavascriptFill, BiLogoTypescript, SiCsharp, IoLogoHtml5, IoLogoCss3, TbSql } from '@/app/icons'

export default function LibraryComponent() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded p-8 border dark:border-gray-700">
            <h3 className=" font-josefin-sans text-lg pb-5 text-end">Frameworks & Libraries</h3>
            <div className="grid grid-rows-2 grid-cols-3 gap-y-5">
                <SkillsCardComponent icon={RiJavascriptFill} language="JavaScript" color='#f7df1e' />
                <SkillsCardComponent icon={BiLogoTypescript} language="TypeScript" color='#007acc' />
                <SkillsCardComponent icon={SiCsharp} language="C#" color='#682876' />
                <SkillsCardComponent icon={IoLogoHtml5} language="HTML" color='#e34c26' />
                <SkillsCardComponent icon={IoLogoCss3} language="CSS" color='#264de4' />
                <SkillsCardComponent icon={TbSql} language="SQL" color='black' />
            </div>
        </div>
    )
}