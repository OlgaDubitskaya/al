import React from "react"
import styles from "./bottom-image-card.module.css"

export const BottomImageCard = props => {
    const { title, subtitle, img } = props.item
    return (
        <>
        <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{subtitle}</div>
    </div>
    <div className={styles.picture}>
        <img src={`/images/content/${img}`} alt={title} />
    </div>
</>
    )
}
