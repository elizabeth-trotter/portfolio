'use client';

import { useEffect, useState } from 'react';
import { Dropdown, DropdownDivider, Navbar } from 'flowbite-react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faEnvelope, faExternalLink, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";


declare const AdobeDC: any;

export default function NavbarComponent() {

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
      <Navbar fluid rounded className="bg-[#faf0e6] font-josefin-sans">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#about" active>
            About
          </Navbar.Link>
          <Navbar.Link href="#projects">Projects</Navbar.Link>
          <Navbar.Link href="#skills">Skills</Navbar.Link>
          <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className='text-gray-700 dark:text-gray-400 dark:hover:text-white md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>External Links</span>}>
            <Dropdown.Item as={Link} href="#">Email <FontAwesomeIcon icon={faEnvelope} className='ps-2 pb-1 h-3' /></Dropdown.Item>
            <Dropdown.Item as={Link} href="#">Resume <FontAwesomeIcon icon={faCloudArrowDown} className='ps-2 pb-1 h-3' /></Dropdown.Item>
            <DropdownDivider />
            <Dropdown.Item as={Link} href="#">GitHub <FontAwesomeIcon icon={faExternalLink} className='ps-2 pb-1 h-3' /></Dropdown.Item>
            <Dropdown.Item as={Link} href="#">LinkedIn <FontAwesomeIcon icon={faExternalLink} className='ps-2 pb-1 h-3' /></Dropdown.Item>
            <Dropdown.Item as={Link} href="#">Codewars <FontAwesomeIcon icon={faExternalLink} className='ps-2 pb-1 h-3' /></Dropdown.Item>
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
        <DarkThemeToggle />
      </Navbar>
    </Flowbite>
  );
}
