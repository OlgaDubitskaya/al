import React from "react"
import styles from "./page.module.css"

import {
    MainBlock,
    BuyoutConditions,
    BuyoutTransport,
    BuyoutSteps,
    BuyoutDocs,
    Questions,
    Selection,
    ModalRequest
} from "./components"

export const Page = () => {

    return (
        <div className={styles.page} >
            <MainBlock />
            <BuyoutSteps />
            <ModalRequest />
            <BuyoutTransport />
            <BuyoutConditions />
            <BuyoutDocs />
            <Selection />
            <Questions />
        </div>
    )
}