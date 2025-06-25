"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

interface ProjectDetailsProps {
  title: string;
  images: string[];
  problem: string;
  solution: string;
  skills: string[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  images,
  problem,
  solution,
  skills = [],
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
      setScrollX(scrollRef.current.scrollLeft + offset);
    }
  };

  return (
    <section className="text-white px-8 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>

      {/* Image Carousel */}
      <div className="relative mb-12">
        {/* Left Arrow */}
        {scrollX > 0 && (
          <button
            onClick={() => scrollBy(-400)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black bg-opacity-40 hover:bg-white hover:bg-opacity-30 transition-colors duration-300 flex items-center justify-center"
          >
            <span className="text-white text-lg">&#x25C0;</span>
          </button>
        )}

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scroll-smooth"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-start relative rounded-lg overflow-hidden"
              style={{ maxWidth: '100%', height: 'auto' }}
            >
              <img
                src={src}
                alt={`${title} image ${i + 1}`}
                className="rounded-lg object-contain max-h-[400px]"
              />
            </div>
          ))}

        </div>

        {/* Right Arrow */}
        {images.length > 2 && (
          <button
            onClick={() => scrollBy(400)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black bg-opacity-40 hover:bg-white hover:bg-opacity-30 transition-colors duration-300 flex items-center justify-center"
          >
            <span className="text-white text-lg">&#x25B6;</span>
          </button>
        )}
      </div>

      {/* Problem Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Problem</h2>
        <p className="text-gray-300">{problem}</p>
      </div>

      {/* Solution Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Solution</h2>
        <p className="text-gray-300">{solution}</p>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Skills Gained</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetails;
