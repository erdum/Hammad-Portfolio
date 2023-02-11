import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight, BiBrightness, BiMoon } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
// import { style } from "@mui/system";

const Header = (props) => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow, background: props.theme==='light' ? "#fff" : "#000" }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Hammad.</div>

          <ul
            className={`flexCenter ${css.menu}`}
            ref={menuRef}
            style={getMenuStyles(menuOpened)}
            background={(props.theme==="light") ? "#fff" : "#000"}
          >
            <li><a href="#experties">Services</a></li>
            <li><a href="#work">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#people">Testimonials</a></li>
            <li className={`flexCenter ${css.phone}`}>
              <p>+001 (313) 345 678</p>
              <BiPhoneCall size={"40px"} />
            </li>
          </ul>







        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />


        </div>

        {/* Light and Dark Theme Toggle */}
        <div className="themeToggle" style={{ marginLeft: "10px" }}>
          <BiBrightness className="day" size={30} style={{ marginRight: '3px', color: props.theme === 'light' ? "#000" : "#fff", cursor: "pointer", display: "none" }} onClick={props.toggleTheme} />
          <BiMoon className="night" size={30} style={{ marginRight: '3px', color: props.theme === 'light' ? "#000" : "#fff", cursor: "pointer" }} onClick={props.toggleTheme} />
        </div>




      </div>
    </motion.div>
  );
};

export default Header;