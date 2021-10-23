import React from "react"
// eslint-disable-next-line no-unused-vars
import styles from "./image-link.module.css"

export const ImageLink = props => {
    const { src, alt } = props.img
    return (
        <img className={styles.img} src={`/images/content/${src}`} alt={alt} />
    )
}