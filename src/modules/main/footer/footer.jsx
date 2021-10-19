import React from "react"
import styles from "./footer.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className={`${styles.footer_container} _container`}>
                <h3 className={styles.footer_title}>autoliderbrest.by – срочный выкуп авто в любом состоянии в Бресте с выездом по всей РБ</h3>
                <div className={styles.block}>
                    <div>
                        <img src="/images/content/phone-operators/mts.png" alt="MTS" />
                        <a href="tel:+375 (29) 243-243-5">+375 (29) 243-243-5</a>
                    </div>
                    <div>
                        <img src="/images/content/phone-operators/A1.jpg" alt="A1" />
                        <a href="tel:+375 (29) 906-70-70">+375 (29) 906-70-70</a>
                    </div>
                </div>
                <div className={styles.block}>
                    <a href="https://vk.com/widget_community.php?act=a_subscribe_box&amp;oid=-188297581&amp;state=1">
                        <img src="/images/content/socials/vk.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/autoliderbrest.by/">
                        <img src="/images/content/socials/inst.png" alt="" />
                    </a>
                </div>
            </div>
        </footer>
    )
}