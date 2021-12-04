import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal, Spin } from 'antd'
import { setBuyoutApplicationVisible } from "../../../ducks"
import { Buyout, Inspection } from "./forms"
import { fetchApi, success, error } from "../../../../../shared/functions"
import styles from "./request.module.css"

const initialState = {
    userName: "",
    phoneNumber: "",
    model: "",
    marka: "",
    engine: "diesel",
    volume: "",
    transmission: "automat",
    year: "",
    mileage: "",
    cost: "",
    description: "",
    images: []
}

const checkNumber = number => {
    const cleanedNumber = number.replaceAll("+", "")
                                .replaceAll(" ", "")
                                .replaceAll("-", "")
                                .replaceAll("_", "")
                                .replaceAll("(", "")
                                .replaceAll(")", "")
    return cleanedNumber.length
}

export const ModalRequest = () => {
    const dispatch = useDispatch()
    const { modalsVisible: { buyoutApplicationVisible } } = useSelector(state => state.mainModule)
    const [formData, setFormData] = useState(initialState)
    const [isSpin, setIsSpin] = useState(false)
    const [activeTab, setActiveTab] = useState("buyout")
    const [errorName, setErrorName] = useState(false)
    const [errorPhone, setErrorPhone] = useState(false)

    const clearTab = () => {
        setFormData(initialState)
        setErrorName(false)
        setErrorPhone(false)
    }

    useEffect(() => {
        clearTab()
    }, [activeTab])

    const handleOk = async () => {
        if (!formData.userName.length && checkNumber(formData.phoneNumber) < 12) {
            setErrorName(true)
            setErrorPhone(true)
            return
        } else if (!formData.userName.length) {
            setErrorName(true)
            return
        } else if (checkNumber(formData.phoneNumber) < 12) {
            setErrorPhone(true)
            return
        }
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
        clearTab()
        dispatch(setBuyoutApplicationVisible(false))
    }

    const changeFormData = (e) => {
        if (errorName && e.target.name === "userName" && e.target.value.length) setErrorName(false)
        if (errorPhone && e.target.name === "phoneNumber" && checkNumber(e.target.value) >= 12) setErrorPhone(false)  
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
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
                    errorName={errorName}
                    errorPhone={errorPhone}
                />
            ) : (
                <Inspection
                    formData={formData}
                    changeFormData={changeFormData}
                    errorName={errorName}
                    errorPhone={errorPhone}
                />
            )}
        </Modal>
    )
}
