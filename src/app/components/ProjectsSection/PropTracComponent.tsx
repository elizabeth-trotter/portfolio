import React from 'react'
import ProjectCardComponent from "./ProjectCardComponent"
import { SiCsharp, SiDotnet, SiMicrosoftazure, BiLogoTypescript, TbBrandNextjs, SiTailwindcss } from '@/app/icons'

function PropTracComponent() {
  return (
    <div>
      <ProjectCardComponent 
        title='PropTrac (in development)'
        icons={[SiCsharp, SiDotnet, SiMicrosoftazure, BiLogoTypescript, TbBrandNextjs, SiTailwindcss]} 
        iconNames={["C#", ".NET", "Azure", "TypeScript", "Next.js", "Tailwind CSS"]} 
        image='./ProptracDesktop.png'
        imageMobile='./ProptracMobile.png'
        description='Full-stack web application following the software development lifecycle. Leading backend, creating internal API with Model-View-Controller architecture, and managing relational database with Azure SQL Cloud. All-in-one tool for property managers.'
        github='https://github.com/elizabeth-trotter/PropTrac-backend'
        site='https://proptrac-app.vercel.app'
      />
    </div>
  )
}

export default PropTracComponent
