"use client";

import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden text-left max-w-full px-10 justify-center mx-auto items-center"
    >
      {/* Experience Header */}
      <h3 className="absolute top-16 md:top-20 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Experience
      </h3>

      {/* Experience Cards Container */}
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
        className="w-screen h-full flex overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80 mt-32 md:mt-40"
      >
        {experiences
          ?.slice()
          .sort(
            (a, b) =>
              new Date(b.dateStarted).getTime() -
              new Date(a.dateStarted).getTime()
          )
          .map((experience) => (
            <motion.div
              key={experience._id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-screen h-[400px] flex justify-center items-center snap-center" // Card width to 100vw and height to 400px
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
}
