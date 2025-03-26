"use client";
import Experience from "./components/Experience";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-base-200 antialiased">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Header */}
          <div className="flex flex-col justify-between lg:w-[48%] lg:py-24 lg:top-0 lg:flex lg:max-h-screen lg:sticky">
            {/* Title and Subtitle */}
            <div>
              <div className="relative">
                <h1 className="md:text-5xl text-4xl font-bold text-secondary/70 absolute top-0 left-0">
                  Bradley Fleming
                </h1>
                <h1 className="md:text-5xl text-4xl font-bold text-primary/80 relative top-0 left-1">
                  Bradley Fleming
                </h1>
              </div>

              <div className="mt-3 text-lg font-medium tracking-tight text-base-content flex flex-col sm:flex-row flex-start">
                <div className="flex flex-row items-center ">
                  <svg
                    className="text-base-content/80 h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7V6.2C16 5.0799 16 4.51984 15.782 4.09202C15.5903 3.71569 15.2843 3.40973 14.908 3.21799C14.4802 3 13.9201 3 12.8 3H11.2C10.0799 3 9.51984 3 9.09202 3.21799C8.71569 3.40973 8.40973 3.71569 8.21799 4.09202C8 4.51984 8 5.0799 8 6.2V7M3.02721 10.0263C3.38776 10.3719 7.28572 14 12 14C16.7143 14 20.6122 10.3719 20.9728 10.0263M3.02721 10.0263C3 10.493 3 11.0665 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 11.0665 21 10.493 20.9728 10.0263M3.02721 10.0263C3.06233 9.4241 3.14276 8.99959 3.32698 8.63803C3.6146 8.07354 4.07354 7.6146 4.63803 7.32698C5.27976 7 6.11984 7 7.8 7H16.2C17.8802 7 18.7202 7 19.362 7.32698C19.9265 7.6146 20.3854 8.07354 20.673 8.63803C20.8572 8.99959 20.9377 9.4241 20.9728 10.0263"
                    />
                  </svg>

                  <span className="text-base-content/80 mr-4">
                    Front End Developer
                  </span>
                </div>
                <div className="flex flex-row items-center">
                  <svg
                    className="text-base-content/80 h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2C8.13401 2 5 5.13401 5 9C5 13.866 12 22 12 22C12 22 19 13.866 19 9C19 5.13401 15.866 2 12 2ZM12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8C15 9.65685 13.6569 11 12 11Z"
                    />
                  </svg>
                  <span className="text-base-content/80">Huntsville, AL</span>
                </div>
              </div>
              <p className="mt-4 max-w-xs leading-normal text-base-content/70 ">
                I quickly create user-friendly websites that work well on any
                device.
              </p>
            </div>
            {/* Links */}
            <div className="flex flex-row flex-start mt-6">
              <Link
                href="https://github.com/bradleycfleming"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="mr-6"
              >
                <svg
                  className="text-base-content/80 h-6 w-6 hover:fill-primary/70 transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.997.107-.774.42-1.305.763-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.623-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.192.694.8.577C20.565 21.797 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/bradley-fleming-53a734167/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="mr-6"
              >
                <svg
                  className="text-base-content/80 h-6 w-6 hover:fill-primary/70 transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </Link>
              <Link
                href="https://bradleyflem.ing/BradleyFleming.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medium font-bold tracking-tight text-base-content/80 hover:text-primary/70 transition mr-6"
              >
                Get Resume
              </Link>
            </div>
          </div>
          <main className="pt-24 lg:w-[52%] lg:py-24">
            <section
              id="about"
              className="flex flex-col flex-start mb-16 md:mb-20 lg:mb-28"
            >
              <h1 className="text-medium font-bold uppercase tracking-widest text-base-content lg:sr-only mb-3">
                About
              </h1>
              <p className="text-base-content ">
                Hi, I'm Bradley Fleming, a front-end developer passionate about
                creating clean, responsive, and user-friendly websites. I
                specialize in JavaScript, React, and Next.js. I also work with
                tools like Tailwind CSS for efficient design. My focus is on
                building websites that look great and function smoothly across
                all devices. I’m dedicated to writing clean, accessible, and
                performance-driven code while ensuring a positive user
                experience. I enjoy collaborating with designers and back-end
                developers to bring projects to life. Let’s connect if you need 
                someone to help create a succinct and engaging digital experience.
              </p>
            </section>
            <section
              id="experience"
              className="flex flex-col flex-start mb-16 md:mb-20 lg:mb-28"
            >
              <h1 className="text-medium font-bold uppercase tracking-widest text-base-content mb-3">
                Experience
              </h1>
              <ul className="timeline timeline-vertical timeline-compact text-base-content">
                <Experience
                  title="Software Developer"
                  company=" Hexagon ALI"
                  link="https://hexagon.com/company/divisions/asset-lifecycle-intelligence"
                  year="2022-Present"
                  start="true"
                  description="Contributed to the development and enhancement of core features of the software, with a focus on improving overall functionality. HTTP requests were implemented to optimize data fetching processes, resulting in improved performance. Additionally, front-end issues were debugged and resolved, ensuring a seamless user experience and maintaining application stability."
                />
                <Experience
                  title="Software Internship"
                  company=" Hexagon ALI"
                  link="https://hexagon.com/company/divisions/asset-lifecycle-intelligence"
                  year="2021-2022"
                  description="Developed a cross-platform utility that automates the operation of UI elements, enhancing user interaction across three platforms. Created a benchmarking tool to measure and optimize the performance of a browser application. Additionally, identified and resolved errors across desktop, browser, and mobile applications, ensuring a seamless user experience on all devices."
                />
                <Experience
                  title="DevOps Internship"
                  company=" Siemens EDA"
                  link="https://eda.sw.siemens.com/en-US/"
                  year="2020-2021"
                  description="Configured client and server machines running Linux simulations for up to 200 users. Developed a utility in Node.js to classify and log errors from simulation data. Trained new hires to handle server and simulation-related errors to ensure smooth operations."
                />
                <Experience
                  title="Teaching Assistant"
                  company=" UAH"
                  link="https://www.uah.edu/"
                  year="2019-2020"
                  end="true"
                  description="Taught basic programming concepts in Python to students, guiding them through essential coding principles. Managed a group of 20 students, grading assignments and addressing questions to ensure understanding. Provided constructive feedback to help students improve their programming techniques and coding efficiency."
                />
              </ul>
            </section>
            {/* <section
              id="skills"
              className="flex flex-col flex-start mb-16 md:mb-20 lg:mb-28"
            >
              <h1 className="text-medium font-bold uppercase tracking-widest text-base-content mb-3">
                Skills
              </h1>
            </section>
            <section
              id="projects"
              className="flex flex-col flex-start mb-16 md:mb-20 lg:mb-28"
            >
              <h1 className="text-medium font-bold uppercase tracking-widest text-base-content mb-3">
                Projects
              </h1>
            </section> */}
          </main>
        </div>

        <footer className=""></footer>
      </div>
    </div>
  );
}
