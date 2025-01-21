import React, { useState } from 'react'
import styles from "./LoginSection.module.css"
import Button from '../components/buttons/Button'
import hero0 from "../assets/hero-0.jpg"
import InputContainer from '../components/inputs/InputContainer'
import axios from "axios"

const LoginSection = () => {
    const [inputs,setInputs] = useState({
        UserName:"",
        Password:""
    })
    const onChangeHandler = (e)=>{
        setInputs(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const onSubmitHandler = async (e)=>{
        e.preventDefault()
        try{
            const res = await axios.post("/api/user/user-login",inputs)
            // on success navigation
        }catch(err){
            console.log(err)
            // on failed navigation
        }
    }
  return (
    <div className={styles.loginContainer}>
        <div>
            <img src={hero0} alt="hero0" className={styles.loginHero}/>
        </div>
        <div className={styles.loginForm}>
            <div className={styles.headerContainer}>
                <h1>Login</h1>
                <span>Fill in your credentials and click on the the Login button</span>
            </div>
            <form action="" className={styles.loginFormContainer} onSubmit={onSubmitHandler}>
                <InputContainer Name={"UserName"} onChangeHandler={onChangeHandler}/>
                <InputContainer Name={"Password"} onChangeHandler={onChangeHandler}/>
                <button className={styles.forgotBtn}>Forgot password?</button>
                <Button name={"Login"}/>
            </form>
            <span className={styles.signupQuote}>Don't have an account? <button>Sign Up</button></span>
        </div>
    </div>
  )
}

export default LoginSection