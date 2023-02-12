

import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
import { color } from "@mui/system";
import { BsFillSuitHeartFill } from "react-icons/bs";


const Footer = (props) => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    style={{background: props.theme==="light" ? "#f5f0f0" : "#0d0d0d"}}
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:professorcoding123@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
            <div className={`${css.input}`}>
            <form action="https://formspree.io/f/xlekdqjw" method="POST">
                <input type="text" placeholder="Full Name" required name="fullname" autoComplete="off" />
                <input type="email" placeholder="Email" required name="email" autoComplete="off" />
                <input type="text" placeholder="Subject" required name="subject" autoComplete="off" />
                <textarea type="text" className="textarea" placeholder="Message" required name="message" autoComplete="off" />
                <br />
                <button type="submit" className="send-btn" style={{background: "orange", color: props.theme==="light" ? "#fff" : "#000"}}>Send Message</button>
                </form>
            </div>
        </div>
        
      </motion.div>
      <div className={`flexCenter ${css.final}`} >
          Developed with  <BsFillSuitHeartFill style={{margin:"0 8px", color:"red"}}/>  by studioHammad.
        </div>
    </motion.section>
  );
};

export default Footer;