import React from "react";

const About = () => {
  return (
    <div className="text-xl flex-grow text-center max-h-full h-screen overflow-y-scroll">
      <h1 className="text-6xl mb-4">Welcome to Fumblerooski</h1>
      <div className="text-left px-32">
        <h2 className="mb-4">The world's only college football app</h2>
        <p>So why a college football app?</p>
        <p>
          I created this app because I wanted to make a personal project that
          combined two of my biggest passions: college football and technology.
          I mainly did this as a project for me to work on while I was enjoying
          the college football season. If anyone else enjoys it that would be
          great too but if not that's okay.
        </p>
      </div>
    </div>
  );
};

export default About;
