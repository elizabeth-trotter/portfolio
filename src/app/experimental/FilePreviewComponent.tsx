import React, { useEffect } from 'react';

declare const AdobeDC: any;

const FilePreviewComponent = () => {

    useEffect(() => {
        // Initialize Adobe DC View SDK when it's ready
        document.addEventListener('adobe_dc_view_sdk.ready', function () {
          const handleResumePreview = () => {
            var adobeDCView = new AdobeDC.View({
              clientId: 'key'
            });
            adobeDCView.previewFile(
              {
                content: {
                  location: { url: '/Resume.pdf' } // Update with your PDF file path
                },
                metaData: { fileName: 'Resume.pdf' }
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
    <div>
      
    </div>
  )
}

export default FilePreviewComponent;