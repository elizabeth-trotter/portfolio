'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { Flowbite, useThemeMode } from "flowbite-react";
import ProfilePhoto from '@/app/assets/profile.png';
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import TypewriterComponent from "./components/TypewriterComponent";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  const { mode } = useThemeMode();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(mode === 'dark');

  // Update isDarkMode when the theme changes
  useEffect(() => {
    setIsDarkMode(mode === 'dark');
  }, [mode]);

  return (
    <Flowbite>
      <div className="bg-[#faf0e6] dark:bg-gray-800 flex justify-center">
        <div className="w-full px-5 md:px-0 md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5">
          <NavbarComponent />

          <main className="px-4">
            <div id="about" className="pt-12 pb-20 text-gray-900 dark:text-white">
              <div className="flex gap-10">
                <div>
                  <h1 className="text-4xl font-josefin-sans headerText">Hello! I&apos;m Elizabeth, </h1>
                  <div className="h-24">
                    <TypewriterComponent />
                  </div>

                  <div className="pt-5 font-josefin-slab">
                    <RoughNotationGroup show={true}>
                      <p className="inline">I&apos;m a </p>

                      <RoughNotation animationDelay={5000} type="highlight" color={`${isDarkMode ? 'grey' : 'lightgrey'}`} order="1">
                        <span style={{ whiteSpace: 'nowrap' }}>self-starter</span>
                      </RoughNotation>

                      <p className="inline"> with an aptitude for </p>

                      <RoughNotation animationDelay={5000} type="highlight" color={`${isDarkMode ? 'grey' : 'lightgrey'}`} order="2">
                        <span style={{ whiteSpace: 'nowrap' }}>problem </span>
                      </RoughNotation>
                      <RoughNotation animationDelay={5000} type="highlight" color={`${isDarkMode ? 'grey' : 'lightgrey'}`} order="2">
                        <span style={{ whiteSpace: 'nowrap' }}>solving</span>
                      </RoughNotation>

                      <p className="inline"> and a passion for applying learned </p>

                      <RoughNotation animationDelay={5000} type="underline" color={`${isDarkMode ? 'grey' : 'lightgrey'}`} order="3">
                        <span style={{ whiteSpace: 'nowrap' }}>technologies</span>
                      </RoughNotation>

                      <p className="inline"> to build pixel-perfect </p>

                      <RoughNotation animationDelay={5000} type="underline" color={`${isDarkMode ? 'grey' : 'lightgrey'}`} order="4">
                        <span style={{ whiteSpace: 'nowrap' }}>web </span>
                      </RoughNotation>
                      <RoughNotation animationDelay={5000} type="underline" color={`${isDarkMode ? 'grey' : 'lightgrey'}`} order="4">
                        <span style={{ whiteSpace: 'nowrap' }}>applications.</span>
                      </RoughNotation>

                      <p className="inline"> I'm excited to continue my journey of growth and </p>

                      <RoughNotation animationDelay={5000} type="box" color={`${isDarkMode ? 'grey' : 'lightgrey'}`} order="5">
                        <span style={{ whiteSpace: 'nowrap' }}>exploration</span>
                      </RoughNotation>

                      <p className="inline"> in the ever-evolving world of technology.</p>
                    </RoughNotationGroup>
                  </div>

                  <div className="pt-8 flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0">
                    <a href="https://www.linkedin.com/in/elizabeth-trotter/" target="_blank" className="text-sm inline-flex justify-center items-center py-2 px-5 text-center text-white dark:text-black rounded-md bg-black dark:bg-white hover:bg-slate-600 dark:hover:bg-slate-200 focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-400">
                      View LinkedIn
                    </a>
                    <a href="https://github.com/et120" target="_blank" className="py-2 sm:ms-4 inline-flex justify-center items-center px-5 text-sm text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-600 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-500">
                      View GitHub
                    </a>
                  </div>
                </div>
                <Image src={ProfilePhoto} alt="profile photo" className="me-5 border-2 rounded-full h-44 w-44" />
              </div>
            </div>

            <div id="projects" className="border-t h-72 text-gray-900 dark:text-white">
              <h1>Project</h1>
            </div>

            <div id="skills" className="border-t h-72 text-gray-900 dark:text-white">
              <h1>Skills</h1>
            </div>

            <div id="contact" className="border-y h-72 text-gray-900 dark:text-white">
              <h1>Contact</h1>
            </div>
          </main>

          <footer>
            <FooterComponent />
          </footer>
        </div>


      </div>
    </Flowbite>
  );
}
