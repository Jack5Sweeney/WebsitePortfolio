"use client";
import React, { useState } from "react";
import GitHubIcon from "/public/images/github-icon.svg";
import LinkedInIcon from "/public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);

        if (response.status === 200) {
            console.log('Message sent.');
            setEmailSubmitted(true);
        }
    }
    return <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 realtive">
        <div><h5 className="text-x; font-bold text-white my-2">Let's Connect</h5>
            <p className="text-slate-200 md-4 max-w-md">
                {" "}
                I'm currently looking for new Co-op opportunities for July-December of 2025, my inbox is always open.
                Whether you have a question or just want to say hi, I'll get back to you!
            </p>
            <div className="socials flex flex-row gap-5 mt-5">
                <Link href="https://github.com/Jack5Sweeney">
                    <Image src={GitHubIcon} alt="Github Icon" />
                </Link>
                <Link href="https://www.linkedin.com/in/jack-sweeney-5145002a3/">
                    <Image src={LinkedInIcon} alt="Linkedin Icon" />
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="mt-6">
                    <label htmlFor="email" className="text-white block mb-2 text-x font-bold">Your email</label>
                    <input
                        name="email"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        type="text"
                        id="email"
                        required
                        placeholder="ex: johndoe@gmail.com">
                    </input>
                </div>
                <div className="mt-6">
                    <label htmlFor="subject" className="text-white block mb-2 text-x font-bold">Subject</label>
                    <input
                        name="subject"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        type="text"
                        id="subject"
                        required
                        placeholder="">
                    </input>
                </div>
                <div className="mt-6">
                    <label htmlFor="message" className="text-white block mb-2 text-x font-bold">Message</label>
                    <textarea className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        name="message"
                        id="message"
                        required
                        placeholder="">
                    </textarea>
                </div>
                <button type="submit" className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2.5 px-5 rounded-lg w-full mt-6"> Send Message</button>
                {
                    emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">
                            Email sent successfully!
                        </p>
                    )
                }
            </form>
        </div>
    </section>;
}

export default EmailSection;