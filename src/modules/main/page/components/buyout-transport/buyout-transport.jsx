import React from "react"
import { BlockTitle, BottomImageCard } from "../../../../../shared/components"
import styles from "./buyout-transport.module.css"

const transport = [
    {
        img: "buyout-transport/cars.png",
        title: "Легковые автомобили",
        subtitle: "Выкупаем подержанные и новые автомобили с пробегом различных марок и моделей с любыми проблемами"
    },
    {
        img: "buyout-transport/comm.png",
        title: "Коммерческий транспорт",
        subtitle: "Выкупаем авто из-под такси, работаем с организациями любой формы собственности, индивидуальными предпринимателями и физическими лицами"
    }
]
export const BuyoutTransport = () => {
    return (
        <section className={`${styles.page__transport} ${styles.transport}`}>
            <div className={`${styles.transport__container} _container`}>
                <BlockTitle text={`Какой транспорт мы можем выкупить`} />
                <div className={styles.transport__body}>
                    {transport.map(item => (
                        <div className={styles.transport__column} key={item.title}>
                            <BottomImageCard item={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}