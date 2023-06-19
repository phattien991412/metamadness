import React from "react";
import { motion, stagger } from "framer-motion";
import Style from "./index.module.scss";
import { BsArrowDown } from "react-icons/bs";
import { fadeIn, staggerContainer, textVariant2 } from "@/utils/motion";
import { TypingText } from "@/modules/CustomText";
const About = () => {
  return (
    <div className={Style.about}>
      <div className={Style.about_spotlight1}></div>
      <div className={Style.about_spotlight2}></div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={Style.about_container}
      >
        <h3 className={Style.about_container_title}>
          <TypingText text="| AboutMetaversus" />
        </h3>
        <motion.p variants={fadeIn("up", "tween", 0.2, 1)}>
          <span>Metaverse</span> is a new thing in the future, where you can
          enjoy the virtual world by feeling like it's really real, you can feel
          what you feel in this metaverse world, because this is really the
          <span> madness of the metaverse</span> of today, using only
          <span> VR</span> devices you can easily explore the metaverse world
          you want, turn your dreams into reality. Let's <span>explore</span>{" "}
          the madness of the metaverse by scrolling down
        </motion.p>
        <p>
          <BsArrowDown />
        </p>
      </motion.div>
    </div>
  );
};

export default About;
