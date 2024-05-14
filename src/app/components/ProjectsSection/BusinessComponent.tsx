import React from 'react'
import ProjectCardComponent from "./ProjectCardComponent"
import { RiJavascriptFill, IoLogoHtml5, IoLogoCss3, BsBootstrapFill } from '@/app/icons'

function BusinessComponent() {
  return (
    <div>
      <ProjectCardComponent 
        title='Business Redesign'
        icons={[RiJavascriptFill, IoLogoHtml5, IoLogoCss3, BsBootstrapFill ]} 
        iconNames={["JavaScript", "HTML", "CSS", "Bootstrap"]} 
        image='./BusinessDesktop.png'
        imageMobile='./BusinessMobile.png'
        description='Redesigned and developed a website for a local business. Design was presented to a panel of UI/UX, web, and business development specialists to obtain critques and improve overall user experience.'
        github='https://github.com/elizabeth-trotter/Business-Redesign'
        site='https://business-redesign.vercel.app/'
      />
    </div>
  )
}

export default BusinessComponent
