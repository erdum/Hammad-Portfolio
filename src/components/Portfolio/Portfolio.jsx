import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = (props) => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    style={{background: props.theme==="light" ? "#f5f0f0" : "#0d0d0d"}}
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText"><a href="#exploremore">Explore More Works</a></span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./pr1.gif" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./pr3.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./pr2.gif" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./pt4.gif" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./pr5.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./pr6.gif" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;