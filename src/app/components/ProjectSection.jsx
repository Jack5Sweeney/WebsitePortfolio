"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import ProjectDetails from "./ProjectDetails";

const projectsData = [
  {
    id: 1,
    title: "Pill-Pal",
    description:
      "A user-centric automatic pill dispenser with safety authentication system.",
    image: "/images/projects/pillPal.png",
    tag: ["All", "Hardware"],
    about: "Pill Pal is a smart and user-friendly automatic pill dispenser designed to assist families in managing their child's medication safely, affordably, and engagingly. It addresses the challenges faced by 14.5 million children who struggle with taking their medications by providing features like fingerprint authentication, LED alerts, and emergency contact integration. The device aims to give parents peace of mind by tracking medication schedules, mood patterns, and reinforcing healthy habits. With its robot-like design and interactive features, Pill Pal makes taking medication more approachable for kids while enhancing safety and convenience with features such as automated water dispensing.",
    contributions: "I conducted extensive research and selection of the components, including the fingerprint module, Arduino board, display, speakers, and LEDs ensuring the device met our performance, safety, and budget requirements. I was also responsible for the integration of hardware and software, enabling the functionality of features such as fingerprint authentication, LED alerts, and automated dispensing. Additionally, I collaborated with another group member to design and implement the user-friendly graphical interface, making it intuitive and engaging for parents and children to interact with the device.",
    images: ["public/images/pillPal1.png", "public/images/pillPal2.png"],
  },
  {
    id: 2,
    title: "Three-Trios",
    description:
      "A two-player board game built in Java using MVC design, featuring AI players and an interactive UI.",
    image: "/images/projects/threeTrios.png",
    tag: ["All", "Software"],
    about: "Three-Trios is a strategic two-player board game implemented in Java, leveraging the MVC (Model-View-Controller) architectural pattern to provide an interactive and engaging user experience. The game introduces players to a unique system of card-based strategy, where each card interacts dynamically with the board and opponents' moves. With built-in AI player strategies, players can either compete against another player or challenge the AI. The project focuses on designing a smooth, user-friendly graphical interface that enables intuitive gameplay and real-time updates through the Observer design pattern. This project was an exploration of object-oriented programming principles, software design patterns, and algorithmic problem-solving.",
    contributions: "In the development of the Three-Trios board game, I was responsible for implementing the foundational architectural design using the Model-View-Controller (MVC) framework, ensuring a clean separation between the game logic, user interface, and data management. I also employed the Observer pattern to enable real-time updates between the game state and the graphical user interface (GUI), providing players with an intuitive and interactive experience. Additionally, I introduced innovative solutions to manage dynamic rule systems by utilizing the Strategy and Decorator design patterns. These implementations allowed for flexible and extensible gameplay mechanics, supporting the combination and customization of rules to adapt to various game scenarios seamlessly. This approach not only enhanced the game's adaptability but also reinforced its scalability for future expansions and refinements.",
    images: ["/images/threeTrios1.png", "/images/threeTrios2.png"],
  },
  {
    id: 3,
    title: "Catch 'Em All",
    description:
      "Catch ‘Em All is an interactive exhibit teaching children about soil biodiversity through hands-on gameplay and colorful LEDs, making sustainability fun and engaging.",
    image: "/images/projects/catchEmAll.png",
    tag: ["All", "Hardware"],
    about: "The 'Catch ‘Em All!' museum exhibit was designed as a traveling educational tool aimed at engaging elementary school students aged 8-11 in an interactive and competitive experience. Centered around the theme of soil biodiversity and sustainability, the exhibit combines hands-on learning with the excitement of a Pokémon-themed game. Users select game pieces, each representing different soil components, and use RFID technology to measure their impact on various soil health categories. By scanning these pieces and observing changes in LED-lit progress bars, users can learn how soil biodiversity affects plant growth, environmental protection, and human health. The goal of the exhibit was to foster collaboration and competition while ensuring portability, simplicity, and educational value. Users were challenged to experiment and problem-solve, applying their newfound knowledge in an engaging and fun way. Feedback from both children and educators demonstrated that the exhibit was not only entertaining but also effective in delivering its educational objectives.",
    contributions: "In the Catch 'Em All exhibit, I played a pivotal role in designing and implementing the system's core functionality. I developed an point system that assigned unique values to each game piece, enabling dynamic interactions that varied based on the specific combinations of pieces scanned. This system encouraged strategic decision-making and reinforced the educational goals of the exhibit by demonstrating the interconnectedness of soil biodiversity elements. Additionally, I implemented RFID scanning technology to track user interactions, providing real-time LED feedback to enhance engagement. Collaborating with the team, I designed child-friendly, tactile game pieces and optimized the system for portability and accessibility, ensuring it could be enjoyed by diverse audiences across various locations. My contributions created a hands-on, immersive learning experience that made complex sustainability concepts approachable and fun.",
    images: ["/images/catchEmAll1.png", "/images/catchEmAll2.png"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setActiveProject(null);
  };

  const handleProjectClick = (project) => {
    if (activeProject?.id === project.id) {
      setIsClosing(true);
      setTimeout(() => {
        setActiveProject(null);
        setIsClosing(false);
      }, 700); // Match the duration of the animation
    } else {
      setActiveProject(project);
    }
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
              onEyeClick={() => handleProjectClick(project)}
            />
          </div>
        ))}
      </div>

      {/* Sliding Animation */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          activeProject && !isClosing
            ? "max-h-[1000px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-10"
        }`}
      >
        {activeProject && !isClosing && (
          <ProjectDetails
            project={activeProject}
            onClose={() => handleProjectClick(activeProject)}
          />
        )}
      </div>
    </>
  );
};

export default ProjectSection;
