import React from "react"
import { TopImageCard } from "../../../../../shared/components"
import styles from "./buyout-steps.module.css"

const steps = [
    {
        img: "buyout-steps/message.svg",
        title: "Обращение",
        subtitle: "Оставьте заявку или позвоните нам"
    },
    {
        img: "buyout-steps/price.svg",
        title: "Оценка",
        subtitle: "Мы предварительно оцениваем стоимость вашего авто по фото"
    },
    {
        img: "buyout-steps/deal.svg",
        title: "Встреча",
        subtitle: "Договариваемся об удобном времени для подробного осмотра"
    },
    {
        img: "buyout-steps/money.svg",
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
                            <TopImageCard item={step} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}