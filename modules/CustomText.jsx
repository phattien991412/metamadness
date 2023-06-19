import React from "react";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

export const TypingText = ({ text }) => {
  let arrText = Array.from(text).map((item, i) => {
    return (
      <motion.span
        variants={fadeIn("right", "spring", i * 0.1, 0.2)}
        className="character"
      >
        {item}
      </motion.span>
    );
  });
  return arrText;
};

// export const TitleText = ({ title, textStyles }) => (
//   <motion.h2
//     variants={textVariant2}
//     initial="hidden"
//     whileInView="show"
//     className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
//   >
//     {title}
//   </motion.h2>
// );
