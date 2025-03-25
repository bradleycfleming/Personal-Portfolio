import Link from "next/link";
import React from "react";

const Experience = (props) => {
  return (
    <li className="">
      <Line present={!props.start}></Line>
      <div className="timeline-start">{props.year}</div>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-end">
        <h1 className="font-bold mb-2">
          {props.title} | <Link className="hover:text-primary transition" href={props.link}  target="_blank">{props.company}</Link>
        </h1>
        <p className="mb-6">{props.description}</p>
      </div>
      <Line present={!props.end}></Line>
    </li>
  );
};

Experience.defaultProps = {
  start: false,
  end: false,
};

const Line = (props) => {
  if (props.present) {
    return <hr />;
  }
};

export default Experience;
