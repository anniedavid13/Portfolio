import React from 'react';
import "./Footer.scss"
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import {   FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
    >
      <div className="copyright">
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
        <div className="social_icons" >
                <div>
                  <a href='https://github.com/anniedavid13'>
                  <FaGithub />
                  </a>
                </div>
                <div>
                  <a href='https://www.instagram.com/unlikeannaaa/'>
                  <FaInstagram />
                  </a>
                </div>
                <div>
                  <a href='https://www.linkedin.com/in/annie-david-b36431215/'>
                  <FaLinkedin />
                  </a>
                </div>
              </div>
          </div>
      </div>
    </motion.div>
  )
}

export default Footer