import React from 'react'
import ProjectCardComponent from './ProjectCardComponent'
import { RiJavascriptFill, IoLogoHtml5, SiTailwindcss } from '@/app/icons'

function PokedexComponent() {
  return (
    <div>
      <ProjectCardComponent 
        title={'Pokedex'} 
        icons={[RiJavascriptFill, IoLogoHtml5, SiTailwindcss]} 
        iconNames={["JavaScript", "HTML", "Tailwind CSS"]} 
        image={'./PokedexDesktop.png'}
        description={'Navigated extensive dataset from PokéAPI to create a fully responsive Pokédex application. Employed vanilla JavaScript for DOM manipulation. Key features include random Pokémon retrieval, search, and favorite functionality.'}
      />
    </div>
  )
}

export default PokedexComponent
