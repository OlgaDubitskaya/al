import React from "react"
import { ImageLink } from ".."
import styles from "./phone-input.module.css"

export const InputPhone = props => {
    const { img, phone } = props.item
    return (
        <div className={styles.block}>
            <ImageLink img={img}/>
            <a href={`tel:${phone}`}>{phone}</a>
        </div>
    )
}