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
                {/* Image container - hidden on small screens */}
                <div className="relative md:flex hidden items-center justify-center w-[370px] h-[370px] bg-[#181818] shadow-lg rounded-lg mx-auto">
                    <Image
                        src="/images/headshot.png"
                        width={350}
                        height={350}
                        alt="About Me workspace with engineering designs"
                        className="object-contain rounded-lg"
                    />
                </div>
                {/* Content */}
                <div>
                    <h2 className="text-4xl text-white font-bold mb-4 pt-10">About Me</h2>
                    <p className="text-base lg:text-lg text-slate-200 mb-4">
                        I'm Jack Sweeney, a third-year Computer Engineering student at Northeastern University with a 
                        passion for bridging hardware and software. I thrive on hands-on projects that challenge me to 
                        learn quickly and deepen my technical skills. Outside the classroom, I enjoy running, weightlifting, 
                        and exploring creative outlets like custom clothing design and building personalized computer setups.
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
                    {/* Content area */}
                    <div className="mt-4 min-h-[150px] text-slate-200">
                        {tab === "skills" && (
                            <div>
                                <ul>
                                    <li>Software Skills: Java, C, C++, Python, Git</li>
                                    <li>
                                        Hardware Skills: PCB Design - Altium, Soldering, Circuit Analysis, Microcontroller Programming
                                    </li>
                                </ul>
                            </div>
                        )}
                        {tab === "education" && (
                            <div>
                                <ul>
                                    <li>Candidate for Bachelor's Degree in Computer Engineering</li>
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
