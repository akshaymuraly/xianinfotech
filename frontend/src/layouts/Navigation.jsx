import React from 'react'
import styles from "./Navigation.module.css"
import logo1 from "../assets/logo-1.png"
import { MdLogout } from "react-icons/md";

const Navigation = () => {
  return (
    <nav className={styles.container}>
        <img src={logo1} alt="logo1" className={styles.logo}/>
        <ul className={styles.navContainer}>
            <li>User List</li>
            <li>Transaction List</li>
            <li>Video Management</li>
            <li>Top Receivers Lisr</li>
            <li><MdLogout/>  Logout</li>
        </ul>
    </nav>
  )
}

export default Navigation