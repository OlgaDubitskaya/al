import React from "react"
import { useDispatch } from "react-redux"
import { setBuyoutApplicationVisible } from "../../../ducks"
import styles from "./main-block.module.css"

export const MainBlock = () => {
    const dispatch = useDispatch()

    return (
        <div className={styles.main_block} id="main">
            <div className={`${styles.main_block__container} _container`}>
                <div className={styles.main_block_body}>
                    <h1 className={styles.main_block__title}>Купим ваш авто</h1>
                    <div className={styles.main_block__text}>
                        Быстрый выкуп автомобилей в любом состоянии, онлайн оценка на сайте, работаем по всей РБ
                    </div>
                    <h3 className={styles.main_block__second_title}>Подбор авто</h3>
                    <div className={styles.main_block__text}>
                        Комплексная диагностика выбранного Вами автомобиля
                    </div>
                    <div className={styles.main_block__buttons}>
                        <button
                            type="button"
                            className={`${styles.main_block__button} ${styles.main_block__button_orange}`}
                            onClick={() => dispatch(setBuyoutApplicationVisible(true))}
                        >
                            Оставить заявку
                        </button>
                        {/* <a href="" className={`${styles.main_block__button} ${styles.main_block__button_border}`}>
                            Learn More
                        </a> */}
                    </div>
                </div>
            </div>
            <div className={`${styles.main_block__image} _ibg`}>
                <img src="/images/content/background/bg.png" alt="background" />
            </div>
        </div>
    )
}