import React from "react"
import styles from "./block-title.module.css"

export const BlockTitle = ({ text, children }) => (
    <div className={styles.block}>
        <h2 className={styles.block_title}>{text}</h2>
        {children}
    </div>
)