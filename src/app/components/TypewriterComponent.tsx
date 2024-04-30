'use client';

import React from 'react'
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
    return (
        <Typewriter
            options={{
                strings: ['developer based in California.', 'curious foodie explorer.', 'passionate outdoor enthusiast.', 'devoted dog parent.', 'bookworm extraordinaire.'],
                autoStart: true,
                loop: true,
                wrapperClassName: 'typeWriterText',
                cursorClassName: 'typeWriterCursor'
            }}
        />
    )
}

export default TypewriterComponent
