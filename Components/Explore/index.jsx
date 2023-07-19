import React, { useState } from "react";
import { motion } from "framer-motion";
import Style from "./index.module.scss";
import world1 from "../../public/img/planet-01.webp";
import world2 from "../../public/img/planet-02.webp";
import world3 from "../../public/img/planet-03.webp";
import world4 from "../../public/img/planet-04.webp";
import world5 from "../../public/img/planet-05.webp";
import { BsHeadsetVr } from "react-icons/bs";
import { fadeIn, staggerContainer, textVariant2 } from "@/utils/motion";
import { TypingText } from "@/modules/CustomText";
import Image from "next/image";
import BlurredImage from "../CustomComponent/BlurredImage";

const Explore = () => {
  const [toggle, setToggle] = useState(1);
  const worlds = [
    {
      icon: <BsHeadsetVr />,
      sub: "ENTER THE METAVERSE",
      title: "The Hogwarts",
      img: world1.src
    },
    {
      icon: <BsHeadsetVr />,
      sub: "ENTER THE METAVERSE",
      title: "The Upside Down",
      img: world2.src
    },
    {
      icon: <BsHeadsetVr />,
      sub: "ENTER THE METAVERSE",
      title: "Kadirojo Permai",
      img: world3.src
    },
    {
      icon: <BsHeadsetVr />,
      sub: "ENTER THE METAVERSE",
      title: "Paradise Island",
      img: world4.src
    },
    {
      icon: <BsHeadsetVr />,
      sub: "ENTER THE METAVERSE",
      title: "Hawkins Labs",
      img: world5.src
    }
  ];
  return (
    <div className={Style.world}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={Style.world_container}
      >
        <h3>
          <TypingText text="| TheWorld" />
        </h3>
        <motion.h1 variants={textVariant2} initial="hidden" whileInView="show">
          Choose the world you want to explore
        </motion.h1>

        <div className={Style.world_container_list}>
          {worlds.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeIn("right", "spring", i * 0.5, 0.75)}
              className={`${Style.world_container_list_item} ${
                toggle === i ? Style.active : ""
              } `}
              onClick={(e) => setToggle(i)}
            >
              <BlurredImage src={item.img} alt="world" width={300} height={700} />
              <div className={Style.world_container_list_item_detail}>
                <p>
                  <span>{item.icon}</span>
                </p>
                <h4>{item.sub}</h4>
                <h2> {item.title} </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Explore;
