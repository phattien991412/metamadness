import React from "react";
import { motion } from "framer-motion";
import Style from "./index.module.scss";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";

const Header = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className={Style.header}
      >
        <nav className={Style.header_container}>
          <p>
            <BiSearchAlt2 />
          </p>
          <p>METAVERSUS</p>
          <p>
            <HiBars3BottomRight />
          </p>
          <div className={Style.header_container_bg}></div>
        </nav>
      </motion.div>
    </section>
  );
};

export default Header;
