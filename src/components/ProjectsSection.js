import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
 {
   title: "CV - Builder",
   description:
     "Create a stunning CV that stands out in just a few minutes.",
   getImageSrc: () => require("../images/cvpic.jpg"),
  url: "https://www.veloxcv.com/",
 },
 {
   title: "Little Lemon Restaurant",
   description:
     `A handson project prepeared while learning "Meta Front End"`,
   getImageSrc: () => require("../images/photo2.jpg"),
   url: "https://github.com/rahmat131",
 },
 {
   title: "Amazon Themed My-Store",
   description:
     "Simple HTML and CSS project ",
   getImageSrc: () => require("../images/photo3.jpg"),
   url: "https://github.com/rahmat131",
 },
//  {
//    title: "Event planner",
//    description:
//      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
//    getImageSrc: () => require("../images/photo4.jpg"),
//    url: "https://github.com/rahmat131",
//  },
];

const ProjectsSection = () => {
 return (
   <FullScreenSection
     backgroundColor="#14532d"
     isDarkBackground
     p={8}
     alignItems="flex-start"
     spacing={8}
   >
     <Heading as="h1" id="projects-section">
       Featured Projects
     </Heading>
     <Box
       display="grid"
       gridTemplateColumns="repeat(2,minmax(0,1fr))"
       gridGap={8}
     >
       {projects.map((project) => (
         <Card
           key={project.title}
           title={project.title}
           description={project.description}
           url={project.url}
           imageSrc={project.getImageSrc()}
         />
       ))}
     </Box>
   </FullScreenSection>
 );
};

export default ProjectsSection;