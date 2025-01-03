"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            {/* Grid layout with fixed height */}
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-10 px-4 xl:gap-16 sm:py-16 xl:px-16 min-h-[500px]">
                {/* Fixed height for the image */}
                <div className="relative flex items-center justify-center w-[470px] h-[320px] bg-[#181818] shadow-lg rounded-lg mx-auto">
                    <Image
                        src="/images/about-image.png"
                        width={450}
                        height={450}
                        alt="About Me workspace with engineering designs"
                        className="object-contain"
                    />
                </div>
                {/* Content with fixed height */}
                <div>
                    <h2 className="text-4xl text-white font-bold mb-4 pt-10">About Me</h2>
                    <p className="text-base lg:text-lg text-slate-200 mb-4">
                    I’m Jack Sweeney, a second-year Computer Engineering student at Northeastern University with a strong passion 
                    for system integration and hardware-software projects. Throughout my journey, I’ve gained valuable 
                    experience working on diverse projects to build my hardware/software skills. I’m a quick learner who is always 
                    eager to expand my knowledge and expertise. Beyond engineering, I’m passionate about running, weightlifting, 
                    and creative endeavors such as cut-and-sew clothing design and custom computer building.
                    </p>
                    {/* Tabs */}
                    <div className="flex flex-row mt-4 space-x-4">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                    </div>
                    {/* Content area with fixed height */}
                    <div className="mt-4 min-h-[150px] text-slate-200"> {/* Fixed height here */}
                        {tab === "skills" && (
                            <div>
                                <ul>
                                    <li>Software Skills: Java, Python, C++, MATLAB</li>
                                    <li>
                                        Hardware Skills: Soldering, Circuit Analysis, Microcontroller Programming, System Integration
                                    </li>
                                </ul>
                            </div>
                        )}
                        {tab === "education" && (
                            <div>
                                <ul>
                                    <li>Bachelor's Degree in Computer Engineering</li>
                                    <li>Concentration: Computer Science</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
