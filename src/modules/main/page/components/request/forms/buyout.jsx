import React from "react"
import { Checkbox } from "../../../../../../shared/components"
import NumberFormat from 'react-number-format'
import styles from "./forms.module.css"

export const Buyout = props => {
    const {
        formData,
        changeFormData,
        setFormData,
        errorName,
        errorPhone
    } = props

    return (
        <div className={styles.form}>
            <div>
                <label htmlFor="userName">Имя:<span className={styles.required}>*</span></label>
                <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    className={errorName ? styles.input_error : ""}
                    onChange={(e) => changeFormData(e)}
                />
                {errorName && <div className={styles.error}>Поле "Имя" обязательно для заполнения</div>}
            </div>
            <div>
                <label htmlFor="phoneNumber">Номер телефона:<span className={styles.required}>*</span></label>
                <NumberFormat
                    name="phoneNumber"
                    format="+375 (##) ###-##-##"
                    mask="_"
                    allowEmptyFormatting
                    className={errorPhone ? styles.input_error : ""}
                    onChange={(e) => changeFormData(e)}
                />
                {errorPhone && <div className={styles.error}>Поле "Номер телефона" заполнено некорректно</div>}
            </div>
            <div>
                <label htmlFor="marka">Марка:</label>
                <input
                    name="marka"
                    type="text"
                    id="marka"
                    value={formData.marka}
                    onChange={(e) => changeFormData(e)}
                />
            </div>
            <div>
                <label htmlFor="model">Модель:</label>
                <input
                    name="model"
                    type="text"
                    id="model"
                    value={formData.model}
                    onChange={(e) => changeFormData(e)}
                />
            </div>
            <div>
                <label htmlFor="year">Год выпуска:</label>
                <input
                    type="text"
                    name="year"
                    id="year"
                    value={formData.year}
                    onChange={(e) => changeFormData(e)}
                />
            </div>
            <Checkbox
                legend="Тип двигателя"
                name="engine"
                type="radio"
                value={formData.engine}
                handler={(e) => changeFormData(e)}
                values={[
                    { val: "diesel", label: "Дизель" },
                    { val: "petrol", label: "Бензин" }
                ]}
            />
            <div>
                <label htmlFor="volume">Объем двигателя, m<sup>3</sup>:</label>
                <input
                    type="text"
                    name="volume"
                    id="volume"
                    value={formData.volume}
                    onChange={(e) => changeFormData(e)}
                />
            </div>
            <Checkbox
                legend="Коробка передач"
                name="transmission"
                type="radio"
                value={formData.transmission}
                handler={(e) => changeFormData(e)}
                values={[
                    { val: "automat", label: "Автоматическая" },
                    { val: "manual", label: "Механическая" }
                ]}
            />
            <div>
                <label htmlFor="mileage">Пробег:</label>
                <input
                    type="text"
                    name="mileage"
                    id="mileage"
                    value={formData.mileage}
                    onChange={(e) => changeFormData(e)}
                />
            </div>
            <div>
                <label htmlFor="cost">Цена, рублей:</label>
                <input
                    type="text"
                    name="cost"
                    id="cost"
                    value={formData.cost}
                    onChange={(e) => changeFormData(e)}
                />
            </div>
            <div>
                <label htmlFor="description">Описание:</label>
                <textarea
                    type="text"
                    name="description"
                    id="description"
                    rows="3"
                    cols="200"
                    onChange={(e) => changeFormData(e)}
                >{formData.description}</textarea>
            </div>
        </div>
    )
}