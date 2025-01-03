"use client"
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-50 to-blue-300">
                            Hello, I'm{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Jack',
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
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        A Computer Engineering and Computer Science major at Northeastern University.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <button
                            className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-blue-50 text-white transition-all duration-500 linear hover:bg-slate-800 hover:bg-none"
                            onClick={() => {
                                window.location.href = "mailto:sweeney.jac@northeastern.edu?subject=Contact%20Request&body=Hi%20Jack,%20";
                            }}
                        >
                            Contact Me
                        </button>
                        {/* Download Resume Button */}
                        <button
                            className="relative px-6 py-3 w-full sm:w-fit mt-4 sm:mt-0 rounded-full border-2 border-white text-white hover:text-slate-200 hover:bg-slate-800 transition-all text-center"
                            onClick={async () => {
                                const response = await fetch('/downloads/JackSweeneyResume.pdf');
                                const blob = await response.blob();
                                const url = window.URL.createObjectURL(blob);
                                const link = document.createElement('a');
                                link.href = url;
                                link.download = 'JackSweeneyResume.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            Download Resume
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-10 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={280}
                            height={280}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;