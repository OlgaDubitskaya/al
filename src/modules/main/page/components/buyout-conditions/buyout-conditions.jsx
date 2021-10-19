import React from "react"
import styles from "./buyout-conditions.module.css"

const conditions = [
    "Новые",
    "На ходу",
    "После ДТП",
    "Залоговые",
    "Без документов",
    "На запчасти"
]
export const BuyoutConditions = () => {
    return (
        <section className={`${styles.page__conditions} ${styles.conditions}`}>
            <div className={`${styles.conditions__container} _container`}>
                <div className={`${styles.conditions__header} ${styles.header_block}`}>
                    <h2 className={styles.header_block__title}>В любом состоянии</h2>
                </div>
                <div className={styles.conditions__body}>
                    {conditions.map(condition => (
                        <div className={styles.condition__column} key={condition}>
                        <div className={`${styles.condition__item}`}>
                            <div className={styles.item_condition__icon}>
                                <img src="/images/content/buyout-conditions/check.svg" alt={condition} />
                            </div>
                            <h3 className={styles.item_condition__title}>{condition}</h3>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}