'use client';
import Image from "next/image";
import { useEffect, useState } from 'react';
import { CustomFlowbiteTheme, Dropdown, DropdownDivider, Navbar } from 'flowbite-react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faDiagramProject, faEnvelope, faExternalLink, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SiCodewars } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { BsLinkedin, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import CodewarsDark from '@/app/assets/codewarslogodark.png';
import CodewarsLight from '@/app/assets/codewarslogolight.png';

declare const AdobeDC: any;

const customNavbarTheme: CustomFlowbiteTheme["navbar"] = {
  "collapse": {
    "base": "w-full 3xs:block 3xs:w-auto",
    "list": "mt-4 flex flex-col 3xs:mt-0 3xs:flex-row space-x-6 sm:space-x-8 md:text-sm 3xs:font-medium",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  },
  "link": {
    "base": "block py-2 pl-3 pr-4 3xs:p-0",
    "active": {
      "on": "bg-cyan-700 text-white dark:text-white 3xs:bg-transparent 3xs:text-cyan-700",
      "off": "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 3xs:border-0 3xs:hover:bg-transparent 3xs:hover:text-cyan-700 3xs:dark:hover:bg-transparent 3xs:dark:hover:text-white"
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  },
  "toggle": {
    "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 3xs:hidden",
    "icon": "h-6 w-6 shrink-0"
  }
};

export default function NavbarComponent(props: {isDarkMode: boolean}) {

  useEffect(() => {
    // Initialize Adobe DC View SDK when it's ready
    document.addEventListener('adobe_dc_view_sdk.ready', function () {
      const handleResumePreview = () => {
        var adobeDCView = new AdobeDC.View({
          clientId: 'bdb06914f3304a4096e0fe55e8c73bbd'
        });
        adobeDCView.previewFile(
          {
            content: {
              location: { url: '/ElizabethsResume.pdf' } // Update with your PDF file path
            },
            metaData: { fileName: 'ElizabethsResume.pdf' }
          },
          { embedMode: 'LIGHT_BOX' }
        );
      };

      // Add event listener to handle resume preview
      const resumeLink = document.getElementById('resume-link');
      resumeLink?.addEventListener('click', handleResumePreview);

      // Clean up event listener on component unmount
      return () => {
        resumeLink?.removeEventListener('click', handleResumePreview);
      };
    });
  }, []);

  return (
    <Flowbite>
      <Navbar theme={customNavbarTheme} fluid rounded className="bg-[#faf0e6] dark:bg-gray-900 font-josefin-sans pt-5">
        <Navbar.Toggle />
        <Navbar.Collapse className="w-full md:block md:w-auto">
          <Navbar.Link href="#about" active>
            About
          </Navbar.Link>
          <Navbar.Link href="#skills">Skills</Navbar.Link>
          <Navbar.Link href="#projects">Projects</Navbar.Link>
          <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className='inline cursor-pointer text-gray-700 dark:text-gray-400 dark:hover:text-white md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>Connect<BiSolidDownArrow className='inline ps-1 pb-1 w-3' /></span>}>
            <Dropdown.Item as={Link} href="mailto:elizabeth.dev.inquiry@gmail.com" target='_blank'><span className="ps-[0.1rem]"><MdOutlineAlternateEmail /></span><span className="ps-4 pt-1">Email</span></Dropdown.Item>
            {/* <FontAwesomeIcon icon={faEnvelope} className='ps-2 pb-1 h-3' /> */}
            {/* <Dropdown.Item as={Link} href="#" target='_blank'>Resume <FontAwesomeIcon icon={faCloudArrowDown} className='ps-2 pb-1 h-3' /></Dropdown.Item> */}
            {/* <DropdownDivider /> */}
            <Dropdown.Item as={Link} href="https://github.com/et120" target='_blank'><span className="ps-[0.1rem]"><BsGithub /></span><span className="ps-4 pt-1">GitHub</span></Dropdown.Item>
            <Dropdown.Item as={Link} href="https://www.linkedin.com/in/elizabeth-trotter" target='_blank'><span className="ps-[0.1rem]"><FaLinkedinIn /></span><span className="ps-4 pt-1">LinkedIn</span></Dropdown.Item>
            <Dropdown.Item as={Link} href="https://www.codewars.com/users/et120" target='_blank'><span><Image src={props.isDarkMode ? CodewarsLight : CodewarsDark} alt={"Codewars logo"} className="h-4 w-4" /></span><span className="ps-[.85rem] pt-1">Codewars</span></Dropdown.Item>
            {/* <FontAwesomeIcon icon={faExternalLink} className='ps-2 pb-1 h-3' /> */}
          </Dropdown>
          {/* <Navbar.Link href="#projects">GitHub</Navbar.Link>
          <Navbar.Link href="#skills">LinkedIn</Navbar.Link> */}


          {/* <Navbar.Link href="#contact">Contact</Navbar.Link> */}
          {/* <Navbar.Link id="resume-link">
            Resume{' '}
            <span>
              <FontAwesomeIcon icon={faCloudArrowDown} height={14} />
            </span>
          </Navbar.Link> */}
        </Navbar.Collapse>
        <DarkThemeToggle className="-mt-1"/>
      </Navbar>
    </Flowbite>
  );
}
