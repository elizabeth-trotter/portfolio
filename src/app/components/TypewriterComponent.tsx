'use client';

import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
    // const [showCursor, setShowCursor] = useState(true);

    // useEffect(() => {
    //   // Hide cursor after 5 seconds
    //   const timer = setTimeout(() => {
    //     setShowCursor(false);
    //   }, 5000);
    //   return () => clearTimeout(timer);
    // }, []);
    
    return (
        <Typewriter
            options={{
                wrapperClassName: 'typeWriterText',
                cursorClassName: 'typeWriterCursor'
            }}
            onInit={(typewriter) => {
                typewriter.typeString('- a developer based in California.')
                    .pauseFor(2500)
                    // .deleteAll()
                    .start();
            }}
        />
        // <Typewriter
        //     options={{
        //         strings: ['a developer based in California.', 'a curious foodie explorer.', 'a passionate outdoor enthusiast.', 'a devoted dog parent.', 'bookworm extraordinaire.'],
        //         autoStart: true,
        //         loop: true,
        //         wrapperClassName: 'typeWriterText',
        //         cursorClassName: 'typeWriterCursor'
        //     }}
        // />
    )
}

export default TypewriterComponent
