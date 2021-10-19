import React from "react"
import { Upload } from 'antd'
import { UploadOutlined } from "@ant-design/icons"
import NumberFormat from 'react-number-format'
import styles from "./forms.module.css"

export const Buyout = props => {
    const {
        formData,
        changeFormData,
        setFormData
    } = props

    return (
        <div className={styles.form}>
            <div>
                <label htmlFor="userName">Имя:</label>
                <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={(e) => changeFormData(e)}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Номер телефона:</label>
                <NumberFormat
                    name="phoneNumber"
                    format="+375 (##) ###-##-##"
                    mask="_"
                    allowEmptyFormatting
                    onChange={(e) => changeFormData(e)}
                />
            </div>
            <div>
                <label htmlFor="autoName">Наименование авто:</label>
                <input
                    name="autoName"
                    type="text"
                    id="autoName"
                    value={formData.autoName}
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
                <Upload
                    name="User Defined"
                    listType="picture"
                    beforeUpload={() => false}
                    fileList={formData.images}
                    className="upload-list-inline"
                    onChange={async info => {
                        setFormData({ ...formData, images: info.fileList })
                    }}
                    maxCount={5}
                    multiple
                >
                    <span className={styles.upload}><UploadOutlined /> Загрузить фото</span>
                </Upload>
            </div>
        </div>
    )
}