import React, { useState, useEffect } from "react"
import { MenuOutlined } from '@ant-design/icons'
import { scroll } from "../../../shared"
import styles from "./header.module.css"

const links = [
    {
        link: "main",
        title: "Главная"
    },
    {
        link: "docs",
        title: "Необходиые документы"
    },
    {
        link: "selection",
        title: "Подбор авто"
    },
    {
        link: "questions",
        title: "Ответы на вопросы"
    }
]
export const Header = () => {
    const [dropdownMenuListVisible, setDropdownMenyVisisble] = useState(false)
    const [scrollHeader, setScrollHeader] = useState(false)

    const listenScrollEvent = () => {
        if (window.scrollY > 50) {
            setScrollHeader(true)
        } else {
            setScrollHeader(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])

    return (
        <header className={`${styles.header} ${scrollHeader && styles.header__fixed}`}>
            <div className={`${styles.header__container} _container`}>
                <button onClick={() => scroll("main")} className={styles.header__logo}>
                    <img src="/images/content/logo/logo.png" alt="logo" />
                </button>
                <nav className={`${styles.header__menu} ${styles.menu}`}>
                    <ul className={styles.menu__list}>
                        {links.map(l => (
                            <li className={styles.menu__item} key={l.title}>
                                <button className={styles.menu__link} onClick={() => scroll(l.link)}>{l.title}</button>
                                {/* <a href="" className={styles.menu__link}>{l.title}</a> */}
                            </li>
                        ))}
                    </ul>
                </nav>
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
                <div className={styles.header__dropdown_menu}>
                    <button
                        type="button"
                        className={styles.dropdown_menu__button}
                        onClick={() => setDropdownMenyVisisble(!dropdownMenuListVisible)}
                    >
                        <MenuOutlined />
                    </button>
                    {dropdownMenuListVisible && (
                        <div className={styles.dropdown_menu}>
                            <nav className={styles.menu}>
                                <ul className={styles.dropdown_menu__list}>
                                    {links.map(l => (
                                        <li className={styles.dropdown_menu__item}>
                                            <a href={l.link} className={styles.menu__link}>{l.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}