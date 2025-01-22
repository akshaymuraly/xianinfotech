import React from 'react'
import styles from "./UserSearchBar.module.css"
import { IoSearch } from "react-icons/io5";

const UserSearchBar = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>User List</h1>
      <div className={styles.inputContainer}>
        <input type="text" />
        <button><IoSearch className={styles.searchSym}/></button>
      </div>
    </div>
  )
}

export default UserSearchBar