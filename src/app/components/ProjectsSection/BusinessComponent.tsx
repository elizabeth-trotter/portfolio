import React from 'react'
import ProjectCardComponent from './ProjectCardComponent'
import { RiJavascriptFill, IoLogoHtml5, SiTailwindcss } from '@/app/icons'

function BusinessComponent() {
  return (
    <div>
      <ProjectCardComponent 
        title={'Business Redesign'} 
        icons={[RiJavascriptFill, IoLogoHtml5, SiTailwindcss]} 
        iconNames={["JavaScript", "HTML", "Tailwind CSS"]} 
        image={'./BusinessDesktop.png'}
        description={'Crafted and developed a functional and easy-to-use weather application that fetches data from OpenWeatherMap API. Applied state management using hooks to dynamically update data within functional components of the application, ensuring a seamless user experience.'}
      />
    </div>
  )
}

export default BusinessComponent
