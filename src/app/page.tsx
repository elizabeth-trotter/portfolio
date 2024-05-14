'use client';

// External imports
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Flowbite, useThemeMode } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion, useScroll, useSpring } from "framer-motion"

// Internal imports
import NavbarComponent from "./components/Navbar/NavbarComponent";
import { TypewriterComponent, RoughNotationComponent } from "./components/HeaderSection";
import ProfileLightPhoto from '@/app/assets/images/profilelight.png';
import { FaGreaterThan, FaLessThan } from "./icons";
import { LanguageComponent, LibraryComponent, ToolComponent } from './components/SkillsSection'
import FooterComponent from "./components/Footer/FooterComponent";
import PropTracComponent from "./components/ProjectsSection/PropTracComponent";
import WeatherComponent from "./components/ProjectsSection/WeatherComponent";
import PokedexComponent from "./components/ProjectsSection/PokedexComponent";
import BusinessComponent from "./components/ProjectsSection/BusinessComponent";

export default function Home() {
  const { mode } = useThemeMode();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(mode === 'dark');
  const [scrollColor, setScrollColor] = useState<string>();
  const lightColor = "#DC143C";
  const darkColor = "#10B981";

  useEffect(() => {
    setIsDarkMode(mode === 'dark');
    setScrollColor(isDarkMode ? darkColor : lightColor);
  }, [mode, isDarkMode]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX, backgroundColor: scrollColor }} />
      <Flowbite>
        <main className="bg-gray-100 dark:bg-gray-900 flex justify-center">
          <div className="w-full px-5 md:w-4/5 lg:w-3/5 xl:w-1/2">

            <nav>
              <NavbarComponent isDarkMode={isDarkMode} />
            </nav>

            <div className="px-4 sm:px-6 md:px-4">
              <section id="about" className="pt-12 text-gray-900 dark:text-white">
                <div className="grid grid-cols-3 grid-rows-3">

                  <header className="-mx-5 min-[340px]:mx-0 -mt-5 3xs:mt-0 4xl:mt-5 col-span-3 sm:col-span-2 sm:pe-7 text-center 2xs:text-start">
                    <h1 className="text-3xl sm:text-4xl 3xl:text-5xl 4xl:text-6xl font-medium 2xs:font-normal font-josefin-sans headerText">Hello! I&apos;m Elizabeth </h1>
                    <div className="min-[340px]:-mx-2 min-[343px]:mx-0 sm:min-h-24">
                      <TypewriterComponent />
                    </div>
                  </header>

                  <section className="col-span-3 2xs:col-span-1 flex flex-col px-10 min-[340px]:px-16 2xs:px-0 -mt-16 min-[318px]:-mt-16 min-[340px]:-mt-14 min-[378px]:-mt-14 min-[400px]:-mt-12 min-[424px]:-mt-10 min-[443px]:-mt-12 min-[450px]:-mt-14 2xs:-mt-2 min-[530px]:-mt-8 sm:mt-0 sm:items-end">
                    <Image src={ProfileLightPhoto} alt="profile photo" className={`sm:me-3 border-2 border-white rounded-full aspect-w-1 aspect-h-1 sm:h-44 sm:w-44 3xl:h-48 3xl:w-48 4xl:h-56 4xl:w-56 3xl:me-8 4xl:me-16`} />

                    <div className="hidden 2xs:flex flex-row-reverse justify-end sm:flex-row gap-2 4xl:me-5">
                      <Link href='https://github.com/elizabeth-trotter' target='_blank' aria-label="GitHub Icon Link">
                        <FontAwesomeIcon icon={faGithubSquare} className='text-black dark:text-slate-400 pt-2 sm:pt-0 text-3xl 3xl:text-4xl 4xl:text-5xl hover:text-slate-600 dark:hover:text-slate-300' />
                      </Link>
                      <Link href='https://www.linkedin.com/in/elizabeth-trotter' target='_blank' aria-label="LinkedIn Icon Link">
                        <FontAwesomeIcon icon={faLinkedin} className='text-blue-700 dark:text-slate-400 pt-2 sm:pt-0 text-3xl 3xl:text-4xl 4xl:text-5xl hover:text-slate-600 dark:hover:text-slate-300' />
                      </Link>
                    </div>
                  </section>

                  <article className="text-justify 2xs:text-start col-span-3 2xs:col-span-2 -mt-20 min-[318px]:-mt-16 min-[340px]:-mt-20 min-[346px]:-mt-14 min-[360px]:-mt-12 min-[378px]:-mt-5 min-[400px]:-mt-2 min-[424px]:mt-4 min-[428px]:mt-7 2xs:-mt-6 2xs:ps-7 sm:ps-0 sm:-mt-10 3xl:-mt-4 4xl:mt-4">
                    <RoughNotationComponent isDarkMode={isDarkMode} />
                  </article>

                  <section className="mt-6 min-[443px]:mt-3 min-[456px]:mt-0 col-span-3 2xs:mt-10 4xl:-mt-5 2xs:col-span-2 2xs:col-start-2 2xs:px-7 xs:px-0 sm:col-span-3 sm:-mt-12 pt-2">
                    <div className="xs:flex xs:justify-end sm:block">
                      <div className="flex flex-col space-y-4 xs:flex-row xs:justify-start xs:space-y-0">
                        <a href="mailto:hello@elizabeth-trotter.com" target="_blank" className="text-sm 3xl:text-base 4xl:text-lg inline-flex justify-center items-center py-2 px-5 text-center text-white dark:text-black rounded-md bg-black dark:bg-white hover:bg-slate-600 dark:hover:bg-slate-200 focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-400">
                          Email Me
                        </a>
                        <a href="#projects" className="py-2 xs:ms-4 inline-flex justify-center items-center px-5 text-sm 3xl:text-base 4xl:text-lg text-gray-900 focus:outline-none bg-white rounded-md border border-gray-300 hover:bg-gray-100 hover:text-blue-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-500">
                          View Projects
                          <span className="ps-2 blinking"><FontAwesomeIcon icon={faAnglesDown} height={14} /></span>
                        </a>
                      </div>
                    </div>
                  </section>

                </div>
              </section>

              <section id="skills" className="my-16 pb-4 sm:-mt-44 text-md text-gray-900 dark:text-white">
                <div className="border-t mt-8 pb-16 border-gray-300 dark:border-gray-600"></div>
                <div className="flex items-baseline">
                  <FaLessThan className="text-gray-600 dark:text-gray-300" />
                  <h1 className="text-2xl 3xl:text-3xl 4xl:text-4xl font-josefin-sans pb-10 px-1">Skills <span className="text-gray-600 dark:text-gray-300">/</span></h1>
                  <FaGreaterThan className="text-gray-600 dark:text-gray-300" />
                </div>
                <section className="grid grid-cols-1 grid-rows-3 gap-2 3xl:gap-3">
                  <LanguageComponent />
                  <LibraryComponent />
                  <ToolComponent />

                </section>

              </section>

              <section id="projects" className="font-josefin-sans text-md text-gray-900 dark:text-white">
                <div className="border-t mt-8 pb-16 border-gray-300 dark:border-gray-600"></div>
                <h1 className="text-2xl 3xl:text-3xl 4xl:text-4xl font-josefin-sans pb-12">{".(Projects)"}</h1>

                <div className="flex flex-col items-center w-full gap-16 xs:gap-11">
                  <PropTracComponent />
                  <WeatherComponent />
                  <PokedexComponent />
                  <BusinessComponent />
                </div>
              </section>

            </div>

            <footer className="pt-12">
              <FooterComponent />
            </footer>

          </div>
        </main>
      </Flowbite>

    </>
  );
}