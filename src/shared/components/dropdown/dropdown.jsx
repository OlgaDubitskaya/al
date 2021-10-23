import React from "react"
import styles from "./dropdown.module.css"

export const Dropdown = (props) => {
    const { item, visible, setVisible } = props
    const { id, title, subtitle } = item
    return (
        <div className={styles.item} key={id}>
            <button
                type="button"
                className={styles.button}
                onClick={() => setVisible({ ...visible, [id]: !visible[id] })}
            >
                <div className={styles.text}>{title}</div>
                {subtitle && (
                    <img src={visible[id] ? "/images/content/dropdown/minus.svg" : "/images/content/dropdown/plus.svg"} alt="plus/minus" />
                )}
            </button>
            {visible[id] && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
    )
}