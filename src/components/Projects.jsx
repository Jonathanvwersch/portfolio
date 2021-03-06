import React from "react"
import Project from "./Project"
import Dekked from "../images/dekked"
import Rocket from "../images/rocket"
import Logo from "../images/logo"
import Robot from "../images/robot"
import BTK from "../images/BTK"

const Project1 = {
  icon: [<Dekked />],
  header: "Dekked",
  text: "Dekked is an integrated flashcarding and note-taking application.",
  backgroundText: [
    "I founded Dekked last year alongside three of my friends. We have thus far raised £3250. We are currently building the beta product, with the goal to launch in March. Check out ",
    <a
      className="underline"
      target="_blank"
      rel="noreferrer"
      href="https://dekked.com"
    >
      our landing page
    </a>,
    " which I designed and built using Figma and Gatsby respectively.",
  ],
  roleText: "Developer/Designer/Head of Business",
  skillsText:
    "Figma, React.js, Node.js, Postgres, Gatsby, Typescript, Netlify, AWS, TailwindCSS, Sass, Express, management, marketing",
}

const Project2 = {
  icon: [<BTK />],
  header: "Beyond the Karman",
  text: "Beyond the Karman is your home for everything space related.",
  backgroundText: [
    "Using ",
    <a
      href="https://thespacedevs.com/llapi"
      className="underline"
      target="_blank"
      rel="noreferrer"
    >
      The Space Dev's API
    </a>,
    ", I designed and built out a website featuring the latest in space news, launches, and events. Check it out at ",
    <a
      className="underline"
      target="_blank"
      rel="noreferrer"
      href="https://beyondthekarman.com"
    >
      beyondthekarman.com
    </a>,
    ". The site is still a bit of a work in progress and although I built it primarily to familiarise myself with APIs, I do intend to keep it up and running and maintained.",
  ],
  roleText: "Developer/Designer",
  skillsText: "Figma, React.js, Gatsby, Netlify, TailwindCSS",
}

const Project3 = {
  icon: [<Rocket />],
  header: "Bath University Rocket Team",
  text:
    "Bath University Rocket (BRT) is an engineering competition that designs and builds sounding rockets",
  backgroundText: [
    " I was a part of BRT from February 2019 until March 2020. Alongside seven other engineers, I designed a sounding rocket to compete at the Spaceport America Cup, the world's largest intercollegiate rocket competition. We were in the process of building the rocket, in preparation for competing in June of 2020, until the global pandemic put an end to our efforts. I would provide a link to our website, but the new team has not done a very good job of maintaining it and it is currently broken.",
  ],
  roleText: "Project Manager/Systems Integrator",
  skillsText:
    "Autodesk Inventor, finite element modelling, management, rocket design",
}

const Project4 = {
  icon: [<Logo width={40} height={20} />],
  header: "Personal Website",
  text: "Portfolio website designed and built by me",
  backgroundText:
    "I built this website to both showcase some of the projects I've worked on, as well as to further improve my web development skills.",
  roleText: "Developer/Designer",
  skillsText: "Gatsby, React, Netlify, TailwindCSS, Javascript",
}

const Project5 = {
  icon: [<Robot />],
  header: "Soft Magnetic Robotics",
  text:
    "My thesis for the completion of an integrated masters in mechanical engineering from the University of Bath",
  backgroundText: [
    "My masters thesis was written on the topic of soft magnetic robotics under the supervision of Dr. Hamideh Khanbareh. A PDF version of my thesis can be viewed ",
    <a
      className="underline"
      href="https://drive.google.com/file/d/1l6aOb5Bc8snolIrFlfF3sPpExbmcyv3d/view?usp=sharing"
      target="_blank"
      rel="noreferrer"
      aria-label="Masters thesis download link"
    >
      here
    </a>,
    ".",
  ],
  roleText: "Engineer/Report writer",
  skillsText:
    "Mechanical engineering, materials engineering, finite element modelling, report writing",
}

function Projects() {
  return (
    <section id="projects" className="container-inner flex-col mb-64">
      <h1 className="text-white text-3xl lg:text-4xl mb-10 md:mb-15 lg:mb-20">
        Projects
      </h1>
      <Project
        icon={Project1.icon}
        header={Project1.header}
        text={Project1.text}
        backgroundText={Project1.backgroundText}
        roleText={Project1.roleText}
        skillsText={Project1.skillsText}
      />
      <Project
        icon={Project2.icon}
        header={Project2.header}
        text={Project2.text}
        backgroundText={Project2.backgroundText}
        roleText={Project2.roleText}
        skillsText={Project2.skillsText}
      />
      <Project
        icon={Project3.icon}
        header={Project3.header}
        text={Project3.text}
        backgroundText={Project3.backgroundText}
        roleText={Project3.roleText}
        skillsText={Project3.skillsText}
      />
      <Project
        icon={Project4.icon}
        header={Project4.header}
        text={Project4.text}
        backgroundText={Project4.backgroundText}
        roleText={Project4.roleText}
        skillsText={Project4.skillsText}
      />
      <Project
        icon={Project5.icon}
        header={Project5.header}
        text={Project5.text}
        backgroundText={Project5.backgroundText}
        roleText={Project5.roleText}
        skillsText={Project5.skillsText}
      />
    </section>
  )
}

export default Projects
