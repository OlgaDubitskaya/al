import React from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { Page } from "./page"
import styles from "./main.module.css"

export const Main = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Page />
            <Footer />
        </div>
    )
}