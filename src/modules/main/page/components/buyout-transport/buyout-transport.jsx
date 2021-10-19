import React from "react"
import styles from "./buyout-transport.module.css"

const transport = [
    {
        img: "cars.png",
        title: "Легковые автомобили",
        subtitle: "Выкупаем подержанные и новые автомобили с пробегом различных марок и моделей с любыми проблемами"
    },
    {
        img: "comm.png",
        title: "Коммерческий транспорт",
        subtitle: "Выкупаем авто из-под такси, работаем с организациями любой формы собственности, индивидуальными предпринимателями и физическими лицами"
    }
]
export const BuyoutTransport = () => {
    return (
        <section className={`${styles.page__transport} ${styles.transport}`}>
            <div className={`${styles.transport__container} _container`}>
                <div className={`${styles.transport__header} ${styles.header_block}`}>
                    <h2 className={styles.header_block__title}>Какой транспорт мы можем выкупить</h2>
                </div>
                <div className={styles.transport__body}>
                    {transport.map(item => (
                        <div className={styles.transport__column} key={item.title}>
                            <div className={styles.transport__item}>
                                <div className={styles.item__title}>{item.title}</div>
                                <div className={styles.item__text}>{item.subtitle}</div>
                            </div>
                            <div className={styles.transport__picture}>
                                <img src={`/images/content/buyout-transport/${item.img}`} alt={item.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}