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
              <Dropdown.Item as={Link} href="mailto:hello@elizabeth-trotter.com" ><span className="ps-[0.1rem]"><MdOutlineAlternateEmail /></span><span className="ps-4 pt-1">Email</span></Dropdown.Item>
              {/* <Dropdown.Item as={Link} href="#" target='_blank'>Resume <FontAwesomeIcon icon={faCloudArrowDown} className='ps-2 pb-1 h-3' /></Dropdown.Item> */}
              {/* <DropdownDivider /> */}
              <Dropdown.Item as={Link} href="https://github.com/elizabeth-trotter" target='_blank'><span className="ps-[0.1rem]"><BsGithub /></span><span className="ps-4 pt-1">GitHub</span></Dropdown.Item>
              <Dropdown.Item as={Link} href="https://www.linkedin.com/in/elizabeth-trotter" target='_blank'><span className="ps-[0.1rem]"><FaLinkedinIn /></span><span className="ps-4 pt-1">LinkedIn</span></Dropdown.Item>
              <Dropdown.Item as={Link} href="https://www.codewars.com/users/elizabeth-trotter" target='_blank'><span><Image src={props.isDarkMode ? CodewarsLight : CodewarsDark} alt={"Codewars logo"} className="h-4 w-4" /></span><span className="ps-[.85rem] pt-1">Codewars</span></Dropdown.Item>
            </Dropdown>
          </li>

          {/* <Navbar.Link href="#contact">Contact</Navbar.Link> */}
          {/* <Navbar.Link id="resume-link">
            Resume{' '}
            <span>
              <FontAwesomeIcon icon={faCloudArrowDown} height={14} />
            </span>
          </Navbar.Link> */}
        </Navbar.Collapse>
        <DarkThemeToggle className="-mt-1" />
      </Navbar>

      <NavbarDrawerComponent isDarkMode={props.isDarkMode} isOpen={isOpen} handleClose={handleClose} />
    </>
  );
}