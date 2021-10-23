import React from "react"
import { ImageLink, InputPhone } from "../../../shared/components"
import { phones, socials } from "../../../shared/constants"
import styles from "./footer.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className={`${styles.footer_container} _container`}>
                <h3 className={styles.footer_title}>autoliderbrest.by – срочный выкуп авто в любом состоянии в Бресте с выездом по всей РБ</h3>
                <div className={styles.block}>
                    {
                        phones.map(i => (
                            <InputPhone item={i} />
                        ))
                    }
                </div>
                <div className={styles.block}>
                    {socials.map(i => (
                        <a href={i.href}>
                            <ImageLink img={i.img} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}