import React from 'react'
import ProjectCardComponent from './ProjectCardComponent'
import { BiLogoTypescript, TbBrandNextjs, SiTailwindcss } from '@/app/icons'

function WeatherComponent() {
  return (
    <div>
      <ProjectCardComponent 
        title={'U.S. Weather Report'} 
        icons={[BiLogoTypescript, TbBrandNextjs, SiTailwindcss]} 
        iconNames={["TypeScript", "Next.js", "Tailwind CSS"]} 
        image={'./WeatherDesktop.png'} 
        description={'Crafted and developed a functional and easy-to-use weather application that fetches data from OpenWeatherMap API. Applied state management using React hooks to dynamically update data within functional components of the application.'}
      />
    </div>
  )
}

export default WeatherComponent
