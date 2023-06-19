import React from "react";
import { motion } from "framer-motion";
import Style from "./index.module.scss";
import stamp from "../../public/img/stamp.png";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import Image from "next/image";
const Banner = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={Style.banner}
      >
        <motion.h1 variants={textVariant(1.2)} className={Style.banner_title}>
          METAVERSE <br /> MA<span></span>NESS
        </motion.h1>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className={Style.banner_bg}
        >
          <div className={Style.banner_bg_stamp}>
            <Image src={stamp.src} alt="stamp" width={170} height={170} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
