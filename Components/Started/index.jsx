import React from "react";
import { motion } from "framer-motion";
import Style from "./index.module.scss";
import startedImg from "../../public/img/get-started.webp";
import { TypingText } from "@/modules/CustomText";
import { fadeIn, textVariant2 } from "@/utils/motion";
import { planetVariants } from "@/utils/motion";
import { staggerContainer } from "@/utils/motion";
import Image from "next/image";
const Started = () => {
  const started = [
    {
      id: "01",
      text: "Find a world that suits you and you want to enter"
    },
    {
      id: "02",
      text: "Enter the world by reading basmalah to be safe"
    },
    {
      id: "03",
      text: "No need to beat around the bush, just stay on the gas and have fun"
    }
  ];
  return (
    <div className={Style.started}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={Style.started_container}
      >
        <motion.div
          variants={planetVariants("left")}
          className={Style.started_container_left}
        >
          <Image
            src={startedImg.src}
            alt="get started"
            width={600}
            height={600}
          />
        </motion.div>
        <div className={Style.started_container_right}>
          <h3>
            <TypingText text="| How Metaversus Works" />
          </h3>
          <motion.h1
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            Get started with just a few clicks
          </motion.h1>
          <div className={Style.started_container_right_list}>
            {started.map((item, i) => (
              <motion.div
                variants={fadeIn("up", "spring", i * 0.75, 1)}
                className={Style.started_container_right_list_item}
              >
                <p> {item.id} </p>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={Style.started_container_spotlight}></div>
      </motion.div>
    </div>
  );
};

export default Started;
