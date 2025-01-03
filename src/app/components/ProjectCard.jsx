"use client";
import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ imgUrl, title, description, onEyeClick }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-80 transition-all duration-400">
          <button
            onClick={onEyeClick}
            className="h-14 w-14 border-2 relative rounded-full border-slate-200 hover:border-white"
          >
            <EyeIcon className="h-10 w-10 text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white" />
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-slate-200">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
