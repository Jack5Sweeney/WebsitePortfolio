"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";


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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
      }
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      checkScroll(); // initial check
    }

    return () => {
      if (ref) ref.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="text-white px-8 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>

      {/* Carousel Section */}
      <div className="mb-12 flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={() => scrollBy(-400)}
          disabled={!canScrollLeft}
          className={`transition-colors duration-200 ${canScrollLeft ? "text-gray-400 hover:text-white" : "text-gray-600 cursor-default"
            }`}
          aria-label="Scroll left"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>

        {/* Image Carousel */}
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
              className="flex-shrink-0 snap-start relative rounded-lg overflow-hidden flex items-center justify-center "
              style={{ maxWidth: "100%", height: "auto" }}
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
        <button
          onClick={() => scrollBy(400)}
          disabled={!canScrollRight}
          className={`transition-colors duration-200 ${canScrollRight ? "text-gray-400 hover:text-white" : "text-gray-600 cursor-default"
            }`}
          aria-label="Scroll right"
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
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
