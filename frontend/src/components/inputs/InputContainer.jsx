import React from 'react'
import style from "./InputContainer.module.css"
import sms from "../../assets/sms-tracking.svg"
import eye from "../../assets/eye.svg"

const InputContainer = ({Name,onChangeHandler}) => {
    const image = Name==="Password"?eye:sms
  return (
    <div className={style.inputContainer}>
        <span className={style.inputName}>{Name}</span>
        <div className={style.inputBlock}>
            <input type={Name==="Password"?"password":"text"} className={style.input} onChange={onChangeHandler} name={Name}/>
            <img src={image} alt="sms" className={style.inputLogos}/>
        </div>
    </div>
  )
}

export default InputContainer