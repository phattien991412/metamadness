import React from "react";
import { motion } from "framer-motion";
import Style from "./index.module.scss";
import { BsFacebook, BsHeadsetVr, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { footerVariants } from "@/utils/motion";
const Footer = () => {
  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={Style.footer}
    >
      <div className={Style.footer_container}>
        <div className={Style.footer_container_join}>
          <h1>Enter the Metaverse</h1>
          <button>
            {" "}
            <BsHeadsetVr /> <span>Enter the Metaverse</span>{" "}
          </button>
        </div>
        <div className={Style.footer_container_info}>
          <h3>Metaversus</h3>
          <p>Copyright © 2022 - 2023 Metaversus. All rights reserved.</p>
          <ul>
            <li>
              <span>
                <BsTwitter />
              </span>
            </li>
            <li>
              <span>
                <BsLinkedin />
              </span>
            </li>
            <li>
              <span>
                <AiFillInstagram />
              </span>
            </li>
            <li>
              <span>
                <BsFacebook />
              </span>
            </li>
          </ul>
          <div className={Style.footer_container_info_spotlight}></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
