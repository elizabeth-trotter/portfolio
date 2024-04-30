'use client';

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

export default function NavbarComponent() {
  return (
    <Flowbite>
        <Navbar fluid rounded className="bg-[#faf0e6] font-josefin-sans">
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link href="#home" active>Home</Navbar.Link>
            <Navbar.Link href="#about">About</Navbar.Link>
            <Navbar.Link href="#projects">Projects</Navbar.Link>
            <Navbar.Link href="#skills">Skills</Navbar.Link>
            <Navbar.Link href="#contact">Contact</Navbar.Link>
        </Navbar.Collapse>
        <DarkThemeToggle />
        </Navbar>
    </Flowbite>
  );
}
