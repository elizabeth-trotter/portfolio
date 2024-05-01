'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { Flowbite, useThemeMode } from "flowbite-react";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import TypewriterComponent from "./components/TypewriterComponent";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import RoughNotationComponent from "./components/RoughNotationComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import CodeWarsLogo from '@/app/assets/codewarslogo.png'
import CodeWarsDarkLogo from '@/app/assets/codewarsdarklogo.png'
import Link from "next/link";
import ProfilePhoto from '@/app/assets/profile.png';
import ProfileLightPhoto from '@/app/assets/profilelight.png';

export default function Home() {
  const { mode } = useThemeMode();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(mode === 'dark');
  const [photo, setPhoto] = useState(ProfileLightPhoto);

  // Update isDarkMode when the theme changes
  useEffect(() => {
    setIsDarkMode(mode === 'dark');
    setPhoto(isDarkMode ? ProfilePhoto : ProfileLightPhoto);
  }, [mode, isDarkMode]);

  return (
    <Flowbite>
      <div className="bg-[#faf0e6] dark:bg-gray-800 flex justify-center">
        <div className="w-full px-5 md:px-0 md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5">
          <NavbarComponent />

          <main className="px-4">
            <div id="about" className="pt-12 pb-20 text-gray-900 dark:text-white">
              <div className="flex gap-10 relative">
                <div>
                  <h1 className="text-4xl font-josefin-sans headerText">Hello! I&apos;m Elizabeth </h1>
                  <div className="h-24">
                    <TypewriterComponent />
                  </div>

                  <div className="pt-5">
                    <RoughNotationComponent isDarkMode={isDarkMode} />
                  </div>

                  <div className="pt-8 flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0">
                    <a href="mailto:eboron-trotter@codestack.co" target="_blank" className="text-sm inline-flex justify-center items-center py-2 px-5 text-center text-white dark:text-black rounded-md bg-black dark:bg-white hover:bg-slate-600 dark:hover:bg-slate-200 focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-400">
                      Email Me
                    </a>
                    <a href="https://github.com/et120" target="_blank" className="py-2 sm:ms-4 inline-flex justify-center items-center px-5 text-sm text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-600 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-500">
                      Resume
                      <span className="ps-2"><FontAwesomeIcon icon={faCloudArrowDown} height={14} /></span>
                    </a>
                  </div>
                </div>
                <Image src={photo} alt="profile photo" className={`me-5 border-2 border-white rounded-full h-44 w-44`} />
                <div className="absolute right-0 top-1/2 flex gap-2">
                  <Link href='https://github.com/et120' target='_blank'>
                    <FontAwesomeIcon icon={faGithubSquare} className='text-black dark:text-slate-400 text-3xl hover:text-slate-600 dark:hover:text-slate-300' />
                  </Link>
                  <Link href='https://www.linkedin.com/in/elizabeth-trotter/' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} className='text-blue-700 dark:text-slate-400 text-3xl hover:text-slate-600 dark:hover:text-slate-300' />
                  </Link>
                </div>
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
            <FooterComponent isDarkMode={isDarkMode} />
          </footer>
        </div>


      </div>
    </Flowbite>
  );
}
