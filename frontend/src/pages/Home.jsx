import React from 'react'
import styles from "./Home.module.css"
import logo from "../assets/logo-0.png"
import Button from '../components/buttons/Button'
import LoginSection from '../layouts/LoginSection'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <div className={styles.container}>
        <section className={styles.header}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <div className={styles.btnContainer}>
                <Button name={"Login"}/>
                <Button name={"Signup"}/>
            </div>
        </section>

        <section className={styles.middle}>
            <LoginSection/>
        </section>
        
        <footer className={styles.footerContainer}>
            <Footer/>
            <span className={styles.copyRight}>Copyright &copy; 2025. All rights reserved.</span>
        </footer>
    </div>
  )
}

export default Home