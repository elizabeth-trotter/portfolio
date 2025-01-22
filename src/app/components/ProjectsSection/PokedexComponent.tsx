import React from 'react'
import ProjectCardComponent from "./ProjectCardComponent"
import { RiJavascriptFill, IoLogoHtml5, SiTailwindcss } from '@/app/icons'

function PokedexComponent(props: { index: number }) {
  return (
    <div>
      <ProjectCardComponent
        index={props.index}
        title='Pokedex'
        icons={[RiJavascriptFill, IoLogoHtml5, SiTailwindcss]}
        iconNames={["JavaScript", "HTML", "Tailwind CSS"]}
        image='./PokedexDesktop.jpg'
        imageMobile='./PokedexMobile.png'
        description='Navigated extensive dataset from PokéAPI to create a fully responsive Pokédex application. Employed vanilla JavaScript for DOM manipulation. Key features include random Pokémon retrieval, search, and favorite functionality.'
        github='https://github.com/elizabeth-trotter/pokemonapi'
        site='https://espokedex.vercel.app/'
      />
    </div>
  )
}

export default PokedexComponent
