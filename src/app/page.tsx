'use client';

import Image from "next/image";
import { Flowbite } from "flowbite-react";
import ProfilePhoto from '@/app/assets/profile.png';
import NavbarComponent from "./components/NavbarComponent";
import TypewriterComponent from "./components/TypewriterComponent";
import FooterComponent from "./components/FooterComponent";

export default function Home() {
  return (
    <Flowbite>
      <div className="bg-[#faf0e6] dark:bg-gray-800 flex justify-center">
        <div className="w-full px-5 md:px-0 md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5">
          <NavbarComponent />

          <main className="px-4">
            <div id="about" className="pt-12 pb-20 text-gray-900 dark:text-white">
              <div className="flex gap-10">
                <div>
                  <h1 className="text-4xl font-josefin-sans headerText">Hello! I'm Elizabeth, a </h1>
                  <TypewriterComponent />
                  <p className="pt-5 font-josefin-slab">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae nobis, nam quas, dolore numquam nisi libero aliquid obcaecati neque aperiam aut unde voluptatem animi odit necessitatibus iure. Illo, asperiores vel!</p>
                  <div className="pt-8 flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0">
                    <a href="#" className="text-sm inline-flex justify-center items-center py-2 px-5 text-center text-white dark:text-black rounded-md bg-black dark:bg-white hover:bg-slate-600 dark:hover:bg-slate-200 focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-400">
                      View LinkedIn
                    </a>
                    <a href="#" className="py-2 sm:ms-4 inline-flex justify-center items-center px-5 text-sm text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-600 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-500">
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
