import Container from "@/components/Sections/Container";
import Highlight from "@/components/Sections/Highlight";
import React, { ReactNode } from "react";

export default function About() {
  return (
    <Container header>
      <div className="text-justify">
        <h1 className={`text-2xl font-bold`}>ABOUT ME</h1>
        <p className="mt-5">
          Hi, I’m Abyan — a <Highlight>frontend developer</Highlight> from
          Jakarta with a passion for building responsive and user-friendly web
          applications. My curiosity for how things work has grown into a love
          for writing clean, efficient, and maintainable code that brings ideas
          to life. Outside of coding, I play{" "}
          <Highlight>guitar as my main instrument in a band</Highlight>, and
          music fuels my creativity much like development does. In my spare
          time, I enjoy working on free apps and web projects to sharpen my
          skills and explore new ideas.
        </p>
        <ul className="mt-5 list-disc ml-8 space-y-4">
          <li>
            In my free time, I love building and tinkering with apps and web
            projects just to keep learning and having fun.
          </li>
          <li>
            I really enjoy working with others — sharing ideas, learning
            together, and building cool things as a team.
          </li>
          <li>
            If you see something interesting in my projects or have something
            fun in mind, don’t be shy to reach out. Let’s make something awesome
            together!
          </li>
        </ul>
      </div>
    </Container>
  );
}
