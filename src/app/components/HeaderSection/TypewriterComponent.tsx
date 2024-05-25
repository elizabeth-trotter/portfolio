'use client';

// External imports
import React from 'react';
import Typewriter from 'typewriter-effect';

// Internal imports
import './DynamicText.css';

const TypewriterComponent = () => {

    return (
        <Typewriter
            options={{
                wrapperClassName: 'typeWriterText',
                cursorClassName: 'typeWriterCursor',
                delay: 95
            }}
            onInit={(typewriter) => {
                typewriter.typeString('- a developer based in California.')
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

export default TypewriterComponent;