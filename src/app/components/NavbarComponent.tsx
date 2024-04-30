'use client';

import Link from "next/link";
import { useEffect } from "react";
import { Navbar } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown, faFileDownload, faFilePdf } from "@fortawesome/free-solid-svg-icons";

export default function NavbarComponent() {

    useEffect(() => {
        // Load Adobe DC View SDK script dynamically
        const script = document.createElement('script');
        script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';
        script.async = true;
        document.body.appendChild(script);
    
        // Initialize Adobe DC View SDK when it's ready
        script.addEventListener('load', () => {
          document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
            const handleResumePreview = () => {
              var adobeDCView = new AdobeDC.View({clientId: "bdb06914f3304a4096e0fe55e8c73bbd"});
              adobeDCView.previewFile({
                content:{location: {url: "/ElizabethsResume.pdf"}}, // Update this with the path to your PDF file
                metaData:{fileName: "resume.pdf"}
              }, {embedMode: "LIGHT_BOX"});
            };
      
            // Add event listener to handle resume preview
            const resumeLink = document.getElementById('resume-link');
            resumeLink?.addEventListener('click', handleResumePreview);
      
            // Clean up event listener on component unmount
            return () => {
              resumeLink?.removeEventListener('click', handleResumePreview);
            };
          });
        });
    
        // Clean up script tag on component unmount
        return () => {
          document.body.removeChild(script);
        };
      }, []);
      
  return (
    <Flowbite>
        <Navbar fluid rounded className="bg-[#faf0e6] font-josefin-sans">
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link href="#about" active>About</Navbar.Link>
            <Navbar.Link href="#projects">Projects</Navbar.Link>
            <Navbar.Link href="#skills">Skills</Navbar.Link>
            <Navbar.Link href="#contact">Contact</Navbar.Link>
            <Navbar.Link id="resume-link">Resume <span><FontAwesomeIcon icon={faCloudArrowDown} height={14}/></span></Navbar.Link>
        </Navbar.Collapse>
        <DarkThemeToggle />
        </Navbar>
    </Flowbite>
  );
}
