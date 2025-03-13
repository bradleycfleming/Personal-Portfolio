"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-base-100 antialiased">
      <div className="flex mx-auto min-h-screen max-w-screen-xl px-6 py-12">
        <header className="">
          <h1 className="text-4xl font-extrabold text-primary">
            Bradley Fleming
          </h1>
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
          <p className="mt-4 max-w-xs leading-normal text-base-content/70">
            I quickly create user-friendly websites that work well on any
            device.
          </p>
        </header>
        <main className=""></main>
        <footer className=""></footer>
      </div>
    </div>
  );
}
