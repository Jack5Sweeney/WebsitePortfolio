"use client";
import React from "react";
import Footer from "../components/Footer";

const ResumePage = () => {
    return (
        <section className="text-white px-4 py-8 w-full flex flex-col items-center min-h-screen bg-black">
            {/* Download Button */}
            <a
                href="/downloads/S25JackSweeneyResume.pdf"
                download
                className="text-white border-2 border-slate-600 hover:border-slate-200 rounded-full px-6 py-2 text-xl cursor-pointer transition-colors duration-300 mb-10"
            >
                Download PDF
            </a>
            {/* PDF Embed – no border, centered */}
            <embed
                src="/downloads/S25JackSweeneyResume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                type="application/pdf"
                width="800px"
                height="1025px"
                className="mx-auto"
            />

            {/* Footer */}
            <Footer />
        </section>
    );
};

export default ResumePage;