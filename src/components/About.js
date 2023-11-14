import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mohammed Nayeem.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          1+ years experienced React Developer and 8+ years into Mainframe Technologies with hands-on experience in identifying web-based user interactions along with designing & implementing highly responsive user interface components by deploying React concepts.
          Proficient in translating designs & wireframes into high-quality code, and writing application interface code via Java script and React JS workflows.
          Adept at monitoring & maintaining frontend performance and troubleshooting & debugging the same to bolster overall performance.

          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Mohammed Nayeem"
            src="./ProfileLogo2.svg"
          />
        </div>
      </div>
    </section>
  );
}