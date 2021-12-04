import React from "react"
import NumberFormat from 'react-number-format'
import styles from "./forms.module.css"

export const Inspection = props => {
    const {
        formData,
        changeFormData,
        errorName,
        errorPhone
    } = props

    return (
        <div className={styles.form}>
            <h3 className={styles.title}>Разовый осмотр</h3>
            <div>
                <label htmlFor="userName">Имя:<span className={styles.required}>*</span></label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={formData.userName}
                    className={errorName ? styles.input_error : ""}
                    onChange={(e) => changeFormData(e)}
                />
            </div>
            {errorName && <div className={styles.error}>Поле "Имя" обязательно для заполнения</div>}
            <div>
                <label htmlFor="phoneNumber">Номер телефона:<span className={styles.required}>*</span></label>
                <NumberFormat
                    format="+375 (##) ###-##-##"
                    mask="_"
                    name="phoneNumber"
                    id="phoneNumber"
                    allowEmptyFormatting
                    className={errorPhone ? styles.input_error : ""} 
                    onChange={(e) => changeFormData(e)}
                />
            </div>
            {errorPhone && <div className={styles.error}>Поле "Номер телефона" заполнено некорректно</div>}
        </div>
    )
}