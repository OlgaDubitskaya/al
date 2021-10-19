import React from "react"
import NumberFormat from 'react-number-format'
import styles from "./forms.module.css"

export const Inspection = props => {
    const {
        formData,
        changeFormData
    } = props

    return (
        <div className={styles.form}>
            <h3 className={styles.title}>Разовый осмотр</h3>
            <div>
                <label htmlFor="userName">Имя:</label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={formData.userName}
                    onChange={(e) => changeFormData(e)}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Номер телефона:</label>
                <NumberFormat
                    format="+375 (##) ###-##-##"
                    mask="_"
                    name="phoneNumber"
                    id="phoneNumber"
                    allowEmptyFormatting 
                    onChange={(e) => changeFormData(e)}
                />
            </div>
        </div>
    )
}