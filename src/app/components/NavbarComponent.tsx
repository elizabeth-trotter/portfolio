import { useEffect, useState } from 'react';
import { Navbar } from 'flowbite-react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

declare const AdobeDC: any;

export default function NavbarComponent() {

  useEffect(() => {
    // Initialize Adobe DC View SDK when it's ready
    document.addEventListener('adobe_dc_view_sdk.ready', function() {
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
          <Navbar.Link href="#contact">Contact</Navbar.Link>
          <Navbar.Link id="resume-link">
            Resume{' '}
            <span>
              <FontAwesomeIcon icon={faCloudArrowDown} height={14} />
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
        <DarkThemeToggle />
      </Navbar>
    </Flowbite>
  );
}
