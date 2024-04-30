'use client';

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown, faFileDownload } from "@fortawesome/free-solid-svg-icons";

export default function NavbarComponent() {
  return (
    <Flowbite>
        <Navbar fluid rounded className="bg-[#faf0e6] font-josefin-sans">
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link href="#about" active>About</Navbar.Link>
            <Navbar.Link href="#projects">Projects</Navbar.Link>
            <Navbar.Link href="#skills">Skills</Navbar.Link>
            <Navbar.Link href="#contact">Contact</Navbar.Link>
            <Navbar.Link href="">Resume <FontAwesomeIcon icon={faCloudArrowDown} /></Navbar.Link>
        </Navbar.Collapse>
        <DarkThemeToggle />
        </Navbar>
    </Flowbite>
  );
}
