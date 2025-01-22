import React from 'react'
import Navigation from '../layouts/Navigation'
import ContentBlock from '../layouts/ContentBlock'
import styles from "./BusinessPromoters.module.css"

const BusinessPromoters = () => {
  return (
    <div className={styles.container}>
        <Navigation/>
        <ContentBlock/>
    </div>
  )
}

export default BusinessPromoters