import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal, Spin } from 'antd'
import { setBuyoutApplicationVisible } from "../../../ducks"
import { Buyout, Inspection } from "./forms"
import { fetchApi, success, error } from "../../../../../shared/functions"
import styles from "./request.module.css"

const initialState = {
    userName: "",
    phoneNumber: "",
    autoName: "",
    year: "",
    mileage: "",
    cost: "",
    images: []
}

export const ModalRequest = () => {
    const dispatch = useDispatch()
    const { modalsVisible: { buyoutApplicationVisible } } = useSelector(state => state.mainModule)
    const [formData, setFormData] = useState(initialState)
    const [isSpin, setIsSpin] = useState(false)
    const [activeTab, setActiveTab] = useState("buyout")

    const handleOk = async () => {
        setIsSpin(true)
        const url = activeTab === "buyout" ? "/api/order/buyout/create" : "/api/order/selection/create"
        const res = await fetchApi({
            url,
            method: "POST",
            body: formData
        })
        setIsSpin(false)
        if (!res.errors) {
            success()
            handleCancel()
        } else {
            error()
        }
    }

    const handleCancel = () => {
        setFormData(initialState)
        dispatch(setBuyoutApplicationVisible(false))
    }

    const changeFormData = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
    return (
        <div>
            <Modal 
                title="" 
                visible={buyoutApplicationVisible}
                onCancel={handleCancel} 
                footer={[
                    <button className={`${styles.button} ${styles.okButton}`} onClick={handleOk} key="okButton">Оформить заявку</button>,
                    <button className={`${styles.button} ${styles.closeButton}`} onClick={handleCancel} key="closeButton">Закрыть</button>
                ]}
            >
                <ul className={styles.tab}>
                    <li className={activeTab === "buyout" ? styles.active : ""} onClick={() => setActiveTab("buyout")}>Заявка на выкуп</li>
                    <li className={activeTab === "inspection" ? styles.active : ""} onClick={() => setActiveTab("inspection")}>Подбор авто</li>
                </ul>
                {isSpin && <Spin />}
                {activeTab === "buyout" ? (
                    <Buyout
                        formData={formData}
                        setFormData={setFormData}
                        changeFormData={changeFormData}
                    />
                ) : (
                    <Inspection
                        formData={formData}
                        changeFormData={changeFormData}
                    />
                )}
            </Modal>
        </div>
    )
}
