"use client";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import '../globals.css';


const experiences = [
  {
    title: "Computer Engineer",
    company: "MASSA Products Corporation",
    date: "July 2025 - December 2025",
    image: "/images/experiences/MASSA.png",
    link: "https://www.massa.com/", // <-- link here
  },
  {
    title: "Electrical/Computer Engineer",
    company: "Generate",
    date: "January 2025 - April 2025",
    image: "/images/experiences/generate.png",
    link: "https://generatenu.com/", // <-- another link
  },
  {
    title: "Product Lab Member",
    company: "Forge",
    date: "September 2024 - December 2024",
    image: "/images/experiences/forge.png",
    link: "https://www.forgenu.com/home", // example
  },
];


const ExperienceCard = ({ title, company, date, image, link }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#181818", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #181818" }}
    date={date}
    iconStyle={{ background: "#232631" }}
    icon={
      <div className="relative flex h-full w-full items-center justify-center">
        <Image src={image} alt={company} fill className="object-cover rounded-full" />
      </div>
    }
  >
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="group relative p-4 rounded-md transition-all duration-300 bg-[#181818]">
        <h3 className="text-[24px] font-bold text-white">
          {title}
        </h3>
        <p className="text-secondary text-[16px] font-semibold mt-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#7baeff]" style={{ margin: 0 }}>
          {company}
        </p>

      </div>
    </a>



  </VerticalTimelineElement>
);






export default function ExperienceTimeline() {
  return (
    <div className="text-left pt-24">
      <div id="experience-header" className="mt-4 ml-4">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-left">
          What Have I Done?
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-left">
          Experience
        </h2>
      </div>
      <div className="mt-8">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
