"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "PlaitPilot",
    slug: "plaitpilot",
    description:
      "A semi-automated hair extension dispenser, reducing hair extention preperation time from hours to minutes",
    image: "/images/projects/plaitPilot.png", // Make sure this exists
    tag: ["All", "Hardware"],
  },
  {
    id: 2,
    title: "Study Abroad Advisor",
    slug: "saa",
    description:
      "An accesable solution to finding classes abroad. Build for Khoury College, by Khoury students",
    image: "/images/projects/saa.png", // Make sure this exists
    tag: ["All", "Software"],
  },
  {
    id: 3,
    title: "Three-Trios",
    slug: "three-trios",
    description:
      "A two-player board game built in Java using MVC design, featuring AI players and an interactive UI.",
    image: "/images/projects/threeTrios.png",
    tag: ["All", "Software"],
  },
  {
    id: 4,
    title: "Pill-Pal",
    slug: "pill-pal",
    description:
      "A user-centric automatic pill dispenser with safety authentication system.",
    image: "/images/projects/pillPal.png",
    tag: ["All", "Hardware"],
  },

  {
    id: 5,
    title: "Catch 'Em All",
    slug: "catch-em-all",
    description:
      "An interactive exhibit teaching children about soil biodiversity through hands-on gameplay and colorful LEDs.",
    image: "/images/projects/catchEmAll.png",
    tag: ["All", "Hardware"],
  },

];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-5">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hardware"
          isSelected={tag === "Hardware"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software"
          isSelected={tag === "Software"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              slug={project.slug} // 🔑 pass slug here
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
