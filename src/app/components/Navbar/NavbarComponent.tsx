'use client';

// External imports
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { Dropdown, Navbar, DarkThemeToggle } from 'flowbite-react';

// Internal imports
import { MdOutlineAlternateEmail, BiSolidDownArrow, SiCodewars, FaLinkedinIn, BsGithub, CodewarsDark, CodewarsLight } from "@/app/icons";
import { NavbarDrawerComponent } from "./NavbarDrawerComponent";
import { customNavbarTheme } from "../../styles/themes/CustomNavbarTheme";
import { motion } from "framer-motion";

export default function NavbarComponent(props: { isDarkMode: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Navbar theme={customNavbarTheme} fluid rounded className="bg-gray-100 dark:bg-gray-900 font-josefin-sans pt-5">
        <Navbar.Toggle onClick={() => setIsOpen(true)} />
        <Navbar.Collapse className="w-full md:block md:w-auto max-[400px]:hidden">
          <Navbar.Link href="#about" active>
            About
          </Navbar.Link>
          <Navbar.Link href="#skills">Skills</Navbar.Link>
          <Navbar.Link href="#projects">Projects</Navbar.Link>
          <li>
            <Dropdown label="connect" dismissOnClick={false} renderTrigger={() => <span className='inline cursor-pointer text-gray-700 dark:text-gray-400 dark:hover:text-white md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>Connect<BiSolidDownArrow className='inline ps-1 pb-1 w-3' /></span>}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <Dropdown.Item as={Link} href="mailto:hello@elizabeth-trotter.com" ><span className="ps-[0.1rem]"><MdOutlineAlternateEmail /></span><span className="ps-4 pt-1">Email</span></Dropdown.Item>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.15 }}>
                <Dropdown.Item as={Link} href="https://github.com/elizabeth-trotter" target='_blank'><span className="ps-[0.1rem]"><BsGithub /></span><span className="ps-4 pt-1">GitHub</span></Dropdown.Item>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}>
                <Dropdown.Item as={Link} href="https://www.linkedin.com/in/elizabeth-trotter" target='_blank'><span className="ps-[0.1rem]"><FaLinkedinIn /></span><span className="ps-4 pt-1">LinkedIn</span></Dropdown.Item>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.45 }}>
                <Dropdown.Item as={Link} href="https://www.codewars.com/users/elizabeth-trotter" target='_blank'><span><Image src={props.isDarkMode ? CodewarsLight : CodewarsDark} alt={"Codewars logo"} className="h-4 w-4" /></span><span className="ps-[.85rem] pt-1">Codewars</span></Dropdown.Item>
              </motion.div>
            </Dropdown>
          </li>
        </Navbar.Collapse>
        <DarkThemeToggle className="-mt-1" />
      </Navbar>

      <NavbarDrawerComponent isDarkMode={props.isDarkMode} isOpen={isOpen} handleClose={handleClose} />
    </>
  );
}