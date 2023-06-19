import React from "react";
import { motion } from "framer-motion";
import Style from "./index.module.scss";
import worldMap from "../../public/img/map.png";
import people1 from "../../public/img/people-01.png";
import people2 from "../../public/img/people-02.png";
import people3 from "../../public/img/people-03.png";
import { TypingText } from "@/modules/CustomText";
import { fadeIn, staggerContainer, textVariant2 } from "@/utils/motion";
import Image from "next/image";

const AroundWorld = () => {
  const people = [
    {
      img: people1.src
    },
    {
      img: people2.src
    },
    {
      img: people3.src
    }
  ];
  return (
    <div className={Style.around}>
      <div className={Style.around_spotlight}></div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={Style.around_container}
      >
        <h3>
          <TypingText text="| People on the World" />
        </h3>
        <motion.h1 variants={textVariant2} initial="hidden" whileInView="show">
          Track friends around you and invite them to play together in the same
          world
        </motion.h1>
        <div className={Style.around_container_detail}>
          <Image
            src={worldMap.src}
            alt="the world map"
            width={500}
            height={500}
          />
          {people.map((item, i) => (
            <motion.div
              className={Style.around_container_detail_people}
              variants={fadeIn("up", "spring", i * 0.75, 1)}
            >
              <Image src={item.img} alt="people" width={90} height={90} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AroundWorld;
