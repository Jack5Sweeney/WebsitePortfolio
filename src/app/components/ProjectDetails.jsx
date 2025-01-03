"use client";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProjectDetails = ({ project, onClose }) => {
    const [isExiting, setIsExiting] = useState(false);

    if (!project) return null;

    const handleClose = () => {
        setIsExiting(true);
        // Wait for the animation to finish before fully closing
        setTimeout(() => {
            setIsExiting(false);
            onClose();
        }, 700); // Match the duration of the animation (700ms)
    };

    return (
        <div
            className={`transition-all duration-700 ease-in-out transform ${isExiting
                ? "-translate-y-full opacity-0 max-h-0"
                : "translate-y-0 opacity-100 max-h-[1000px]"
                } bg-[#1c1c1c] text-white p-8 rounded-lg shadow-lg mt-8 overflow-hidden`}
        >
            <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white float-right p-2 rounded-full transition-all duration-300"
            >
                <XMarkIcon className="h-6 w-6 bg-[#2c2c2c] hover:bg-red-500 text-slate-200 hover:text-white rounded-full p-1" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Top-left: About Section */}
                <div className="text-left">
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-slate-200">{project.about}</p>
                </div>

                {/* Top-right: First Image */}
                <div className="flex justify-center items-center relative">
                    <div className="absolute bg-[#2c2c2c] rounded-lg h-[310px] w-[410px]"></div>
                    <img
                        src={project.images[0]}
                        alt="Project First"
                        className="relative rounded-lg shadow-lg object-cover h-[300px] w-[400px]"
                    />
                </div>

                {/* Bottom-left: Second Image */}
                <div className="flex justify-center items-center relative">
                    <div className="absolute bg-[#2c2c2c] rounded-lg h-[310px] w-[410px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <img
                        src={project.images[1]}
                        alt="Project Second"
                        className="relative rounded-lg shadow-lg object-cover h-[300px] w-[400px]"
                    />
                </div>


                {/* Bottom-right: My Contributions Section */}
                <div className="text-left">
                    <h4 className="text-2xl font-semibold mb-2">My Contributions</h4>
                    <p className="text-slate-300">{project.contributions}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
