import React from 'react'
import ProjectCardComponent from './ProjectCardComponent'
import { SiCsharp, SiDotnet, SiMicrosoftazure, BiLogoTypescript, TbBrandNextjs, SiTailwindcss } from '@/app/icons'

function PropTracComponent() {
  return (
    <div>
      <ProjectCardComponent 
        title={'PropTrac (in development)'} 
        icons={[SiCsharp, SiDotnet, SiMicrosoftazure, BiLogoTypescript, TbBrandNextjs, SiTailwindcss]} 
        iconNames={["C#", ".NET", "Azure", "TypeScript", "Next.js", "Tailwind CSS"]} 
        image={'./ProptracDesktop.png'}
        description={'Full-stack web application encompassing the software development lifecycle, from pitching the idea to a panel through protoyping, implementing, and deploying the final product. All-in-one tool for property managers.'}
      />
    </div>
  )
}

export default PropTracComponent
