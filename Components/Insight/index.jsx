import React from "react";
import { motion } from "framer-motion";
import Style from "./index.module.scss";
import world6 from "../../public/img/planet-06.png";
import world7 from "../../public/img/planet-07.png";
import world8 from "../../public/img/planet-08.png";
import world9 from "../../public/img/planet-09.png";
import stamp from "../../public/img/stamp.png";
import { ImArrowUpRight2 } from "react-icons/im";
import { fadeIn, staggerContainer, textVariant2, zoomIn } from "@/utils/motion";
import { TypingText } from "@/modules/CustomText";
import Image from "next/image";

const Insight = () => {
  const insightArr = [
    {
      img: world6.src,
      title: "The launch of the Metaverse makes Elon musk ketar-ketir",
      text: "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
      icon: <ImArrowUpRight2 />
    },
    {
      img: world7.src,
      title: "7 tips to easily master the madness of the Metaverse",
      text: "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
      icon: <ImArrowUpRight2 />
    },
    {
      img: world8.src,
      title: "With one platform you can explore the whole world virtually",
      text: "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
      icon: <ImArrowUpRight2 />
    }
  ];
  return (
    <div className={Style.insight}>
      <div className={Style.insight_spotlight}></div>
      <div className={Style.insight_container}>
        <h3>
          {" "}
          <TypingText text="| Insight" />{" "}
        </h3>
        <motion.h1 variants={textVariant2} initial="hidden" whileInView="show">
          Insight about metaverse
        </motion.h1>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={Style.insight_container_list}
        >
          {insightArr.map((item, i) => (
            <motion.div
              variants={fadeIn("up", "spring", i * 0.75, 1)}
              className={Style.insight_container_list_item}
            >
              <motion.div
                variants={zoomIn(i * 0.25, 0.75)}
                className={Style.insight_container_list_item_img}
              >
                <Image
                  src={item.img}
                  alt="the world"
                  width={1000}
                  height={1000}
                />
              </motion.div>
              <div className={Style.insight_container_list_item_text}>
                <h2>{item.title}</h2>
                <p> {item.text} </p>
              </div>
              <p className={Style.insight_container_list_item_icon}>
                {item.icon}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={Style.insight_container_content}
        >
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className={Style.insight_container_content_left}
          >
            <div
              className={Style.insight_container_content_left_spotlight}
            ></div>
            <div
              variants={zoomIn(0.3, 1)}
              className={Style.insight_container_content_left_stamp}
            >
              <Image src={stamp.src} alt="stamp" height={200} width={200} />
            </div>
            <div className={Style.insight_container_content_left_detail}>
              <h2>
                <TypingText text="Samantha" />
              </h2>
              <h4>
                <TypingText text="Founder | Metaversus" />
              </h4>
              <q>
                With the development of today's technology, metaverse is very
                useful for today's work, or can be called web 3.0. by using
                metaverse you can use it as anything
              </q>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={Style.insight_container_content_right}
          >
            <Image
              src={world9.src}
              alt="the world"
              width={5000}
              height={5000}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Insight;
