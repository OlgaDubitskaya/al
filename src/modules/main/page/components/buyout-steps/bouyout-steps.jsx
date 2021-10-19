import React from "react"
import styles from "./buyout-steps.module.css"

const steps = [
    {
        img: "message.svg",
        title: "Обращение",
        subtitle: "Оставьте заявку или позвоните нам"
    },
    {
        img: "price.svg",
        title: "Оценка",
        subtitle: "Мы предварительно оцениваем стоимость вашего авто по фото"
    },
    {
        img: "deal.svg",
        title: "Встреча",
        subtitle: "Договариваемся об удобном времени для подробного осмотра"
    },
    {
        img: "money.svg",
        title: "Продажа",
        subtitle: "Вы получаете деньги наличными на месте"
    }
]

export const BuyoutSteps = () => {
    return (
        <section className={`${styles.page__steps} ${styles.steps}`}>
            <div className={`${styles.steps__container} _container`}>
                <div className={styles.steps__body}>
                    {steps.map(step => (
                        <div className={styles.step__column} key={step.title}>
                            <div className={`${styles.step__item}`}>
                                <div className={styles.item_step__icon}>
                                    <img src={`/images/content/buyout-steps/${step.img}`} alt={step.title} />
                                </div>
                                <h3 className={styles.item_step__title}>{step.title}</h3>
                                <div className={styles.item_step__text}>{step.subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}