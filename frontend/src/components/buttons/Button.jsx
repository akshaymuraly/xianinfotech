import React from 'react'
import styles from "./Button.module.css"

const Button = ({name}) => {
    const type = name==="Login"?styles.login:styles.signup
  return (
    <button className={`${styles.btn} ${type}`} type='submit'>{name}</button>
  )
}

export default Button