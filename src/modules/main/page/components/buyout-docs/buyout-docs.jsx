import React from "react"
import styles from "./buyout-docs.module.css"

const docs = [
    {
        img: "passport.svg",
        title: "Паспорт",
        subtitle: "Необходим для составления договора купли-продажи"
    },
    {
        img: "document.svg",
        title: "Документы",
        subtitle: "У каждого автомобиля должно быть свидетельство о регистрации"
    }
]
export const BuyoutDocs = () => {
    return (
        <section className={`${styles.page__docs} ${styles.docs}`} id="docs">
            <div className={`${styles.docs__container} _container`}>
            <div className={`${styles.docs__header} ${styles.header_block}`}>
                    <h2 className={styles.header_block__title}>Необходимые документы для срочного договора</h2>
                </div>
                <div className={styles.docs__body}>
                    {docs.map(doc => (
                        <div className={styles.doc__column} key={doc.title}>
                            <div className={`${styles.doc__item}`}>
                                <div className={styles.item_doc__icon}>
                                    <img src={`/images/content/buyout-docs/${doc.img}`} alt={doc.title} />
                                </div>
                                <h3 className={styles.item_doc__title}>{doc.title}</h3>
                                <div className={styles.item_doc__text}>{doc.subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}