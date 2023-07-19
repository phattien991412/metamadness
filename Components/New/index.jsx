import React from "react";
import { motion } from "framer-motion";
import Style from "./index.module.scss";
import newImg from "../../public/img/whats-new.webp";
import { BsHeadsetVr, BsImage } from "react-icons/bs";
import {
  fadeIn,
  planetVariants,
  staggerContainer,
  textVariant2
} from "@/utils/motion";
import { TypingText } from "@/modules/CustomText";
import Image from "next/image";
const New = () => {
  const newArr = [
    {
      icon: <BsImage />,
      title: "Title A new world",
      text: "We have the latest update with new world for you to try never mind"
    },
    {
      icon: <BsHeadsetVr />,
      title: "Title More realistic",
      text: "In the latest update, your eyes are narrow, making the world more realistic than ever"
    }
  ];
  return (
    <div className={Style.new}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={Style.new_container}
      >
        <div className={Style.new_container_left}>
          <h3>
            {" "}
            <TypingText text="| Whats New?" />{" "}
          </h3>
          <motion.h1
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            What's new about Metaversus?
          </motion.h1>
          <div className={Style.new_container_left_list}>
            {newArr.map((item, i) => (
              <motion.div
                className={Style.new_container_left_list_item}
                variants={fadeIn("up", "spring", i * 0.75, 1)}
              >
                <p> {item.icon} </p>
                <p>{item.title}</p>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          variants={planetVariants("right")}
          className={Style.new_container_right}
        >
          <Image src={newImg.src} alt="what's new" width={600} height={600} />
        </motion.div>

        <div className={Style.new_container_spotlight}></div>
      </motion.div>
    </div>
  );
};

export default New;
