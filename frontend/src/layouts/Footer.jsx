import React from 'react'
import logo0 from "../assets/logo-0.png"
import styles from "./Footer.module.css"
import { LiaFacebookSquare } from "react-icons/lia";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { BsSkype } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
        <div className={styles.logoContainer}>
            <img src={logo0} alt="logo0" className={styles.logoContainer}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, est perspiciatis natus re</p>
        </div>

        <div className={styles.linksContainer}>
            <h1>Important Links</h1>
            <h2>Contact Us</h2>
            <h2>Privacy Policy</h2>
        </div>

        <div className={styles.linksContainer}>
            <h2>Terms and conditions</h2>
            <h2>Contact Support</h2>
            <div className={styles.appsContainer}>
                <LiaFacebookSquare className={styles.appsLogos}/>
                <FaSquareInstagram className={styles.appsLogos}/>
                <CiLinkedin className={styles.appsLogos}/>
                <BsSkype className={styles.appsLogos}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer