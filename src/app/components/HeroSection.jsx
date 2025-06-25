"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDownIcon } from "@heroicons/react/24/solid";


const HeroSection = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center text-center min-h-[70vh]">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-50 to-blue-300">
                        Hello, I'm{" "}
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Jack Sweeney',
                            2000,
                            'A Computer Engineer',
                            2000,
                            'A Computer Scientist',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-2xl">
                    A Computer Engineering and Computer Science major at Northeastern University.
                </p>
            </div>
            {/* View More Prompt */}
            <div className="flex flex-col items-center animate-bounce duration-[20.0s] mt-6">
                <p className="text-lg font-medium mb-1">View More</p>
                <ChevronDownIcon className="h-6 w-6 text-white" />
            </div>
        </section>
    );
};

export default HeroSection;