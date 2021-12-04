import React from "react"
import styles from "./checkbox.module.css"

export const Checkbox = props => {
    const {
        legend = null,
        name,
        values = [],
        type = "checkbox",
        handler,
        value
    } = props
    return (
        <fieldset className={styles.fieldset}>
            {legend && <legend className={styles.legend}>{legend}</legend>}
            {values.map(i => {
                const { val, label } = i
                return (
                    <label className={styles.label} key={val}>
                        <span className={styles.label_text}>{label}</span>
                        <input 
                            type={type} 
                            name={name} 
                            value={val} 
                            className={styles.radio} 
                            onChange={handler}
                            checked={value === val}
                        />
                        <span className={styles.radion_button}></span>
                    </label>
                )
            })}
        </fieldset>
    )
}