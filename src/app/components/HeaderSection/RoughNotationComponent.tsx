'use client';

// External imports
import React from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

// Internal imports
import './DynamicText.css';

const RoughNotationComponent = (props: {isDarkMode: boolean}) => {
    
    return (
        <div className="font-josefin-sans text-lg 2xs:text-base sm:text-lg 3xl:text-xl 4xl:text-2xl 2xs:font-josefin-slab 2xs:font-semibold 2xs:tracking-wide">
            <RoughNotationGroup show={true}>
                <p className="inline">I&apos;m a </p>

                <RoughNotation animationDelay={4000} type="circle" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="1">
                    <span style={{ whiteSpace: 'nowrap' }}>self-starter</span>
                </RoughNotation>

                <p className="inline"> with an aptitude for </p>

                <RoughNotation animationDelay={4000} animationDuration={500} type="underline" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="2">
                    <span style={{ whiteSpace: 'nowrap' }}>problem </span>
                </RoughNotation>
                <RoughNotation animationDelay={4000} animationDuration={500} type="underline" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="2">
                    <span style={{ whiteSpace: 'nowrap' }}>solving</span>
                </RoughNotation>

                <p className="inline"> and a passion for applying learned </p>

                <RoughNotation animationDelay={4000} type="underline" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="3">
                    <span style={{ whiteSpace: 'nowrap' }}>technologies</span>
                </RoughNotation>

                <p className="inline"> to build full stack </p>

                <RoughNotation animationDelay={4000} animationDuration={600} type="underline" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="4">
                    <span style={{ whiteSpace: 'nowrap' }}>web </span>
                </RoughNotation>
                <RoughNotation animationDelay={4000} animationDuration={600} type="underline" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="4">
                    <span style={{ whiteSpace: 'nowrap' }}>applications.</span>
                </RoughNotation>

                <p className="inline"> I graduated from CSU Long Beach, and I&apos;m excited to continue my journey of growth and </p>

                <RoughNotation animationDelay={4000} type="box" color={`${props.isDarkMode ? 'lightgrey' : 'red'}`} order="5">
                    <span style={{ whiteSpace: 'nowrap' }}>exploration</span>
                </RoughNotation>

                <p className="inline"> in the ever evolving world of technology.</p>
            </RoughNotationGroup>
        </div>
    )
}

export default RoughNotationComponent;