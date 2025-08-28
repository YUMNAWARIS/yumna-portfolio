import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer at PayEngine",
          "Data-Intensive ML Engineer",
          "Technical Blogger",
          "MSc Candidate Batch 2026-2027"
        ],
        autoStart: true,
        loop: true,
        delay: 50,        // typing speed
        deleteSpeed: 30,  // backspace speed
        pauseFor: 1500    // pause before deleting
      }}
    />
  );
}

export default Type;
