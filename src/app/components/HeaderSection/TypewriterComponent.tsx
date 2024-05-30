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
    )
}

export default TypewriterComponent;