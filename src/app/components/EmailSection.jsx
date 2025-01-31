"use client";
import React from "react";
import GitHubIcon from "/public/images/github-icon.svg";
import LinkedInIcon from "/public/images/linkedin-icon.svg";
import StravaIcon from "/public/images/strava.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div>
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-slate-200 md-4 max-w-md">
                    I'm currently looking for new Co-op opportunities for July-December of 2025, my inbox is always open. Whether you have a question or just want to say hi, I'll get back to you!
                </p>
                <div className="socials flex flex-row gap-5 mt-5">
                    <Link href="https://github.com/Jack5Sweeney">
                        <Image src={GitHubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jack-sweeney-5145002a3/">
                        <Image src={LinkedInIcon} alt="Linkedin Icon" />
                    </Link>
                    <Link href="https://www.strava.com/athletes/110351992">
                        <Image src={StravaIcon} alt="Strava Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <h5 className="text-xl font-bold text-white mb-4">Contact Me</h5>
                <p className="text-slate-200 mb-2">
                    Feel free to reach out directly at:
                </p>
                <a
                    href="mailto:sweeney.jac@northeastern.edu"
                    className="text-blue-400 hover:underline"
                >
                    sweeney.jac@northeastern.edu
                </a>
                <p className="text-slate-200 mt-4">
                    I'm always open to discussing new opportunities or answering your questions!
                </p>
            </div>
        </section>
    );
};

export default EmailSection;
