'use client';

import React from 'react'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

const RoughNotationComponent = (props: {isDarkMode: boolean}) => {
    
    return (
        <div className="font-josefin-slab font-semibold tracking-wide">
            <RoughNotationGroup show={true}>
                <p className="inline">I&apos;m a </p>

                <RoughNotation animationDelay={6000} type="circle" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="1">
                    <span style={{ whiteSpace: 'nowrap' }}>self-starter</span>
                </RoughNotation>

                <p className="inline"> with an aptitude for </p>

                <RoughNotation animationDelay={6000} type="underline" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="2">
                    <span style={{ whiteSpace: 'nowrap' }}>problem </span>
                </RoughNotation>
                <RoughNotation animationDelay={6000} type="underline" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="2">
                    <span style={{ whiteSpace: 'nowrap' }}>solving</span>
                </RoughNotation>

                <p className="inline"> and a passion for applying learned </p>

                <RoughNotation animationDelay={6000} type="underline" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="3">
                    <span style={{ whiteSpace: 'nowrap' }}>technologies</span>
                </RoughNotation>

                <p className="inline"> to build pixel-perfect </p>

                <RoughNotation animationDelay={6000} type="underline" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="4">
                    <span style={{ whiteSpace: 'nowrap' }}>web </span>
                </RoughNotation>
                <RoughNotation animationDelay={6000} type="underline" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="4">
                    <span style={{ whiteSpace: 'nowrap' }}>applications.</span>
                </RoughNotation>

                <p className="inline"> I graduated from CSU Long Beach, and I&apos;m excited to continue my journey of growth and </p>

                <RoughNotation animationDelay={6000} type="box" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="5">
                    <span style={{ whiteSpace: 'nowrap' }}>exploration</span>
                </RoughNotation>

                <p className="inline"> in the ever-evolving world of technology.</p>
            </RoughNotationGroup>
        </div>
    )
}

export default RoughNotationComponent
