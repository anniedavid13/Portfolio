import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {   FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jlkm33h', 'template_8qv05ps', form.current, 'D2NXUtDZaZ4reogBE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'></p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
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
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Get In Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last name'/>
          </div>
          <div className="row">
            <input type="text" placeholder='Phone' />
            <input type="email" placeholder='Email' />
          </div>
          <div className="row">
            <textarea placeholder='message'></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
            <a href="#">Send</a>
          </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
    
  )
}

export default Contact