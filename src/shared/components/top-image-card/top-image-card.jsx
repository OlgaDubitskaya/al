import React from "react"
import styles from "./top-image-card.module.css"

export const TopImageCard = props => {
    const {img, title, subtitle} = props.item
    return (
        <div className={`${styles.body}`}>
            <div className={styles.icon}>
                <img src={`/images/content/${img}`} alt={title} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.text}>{subtitle}</div>
        </div>
    )
}