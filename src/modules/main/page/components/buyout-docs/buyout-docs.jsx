import React from "react"
import { BlockTitle, TopImageCard } from "../../../../../shared/components"
import styles from "./buyout-docs.module.css"

const docs = [
    {
        img: "buyout-docs/passport.svg",
        title: "Паспорт",
        subtitle: "Необходим для составления договора купли-продажи"
    },
    {
        img: "buyout-docs/document.svg",
        title: "Документы",
        subtitle: "У каждого автомобиля должно быть свидетельство о регистрации"
    }
]
export const BuyoutDocs = () => {
    return (
        <section className={`${styles.page__docs} ${styles.docs}`} id="docs">
            <div className={`${styles.docs__container} _container`}>
                    <BlockTitle text={`Необходимые документы для срочного договора`} />
                <div className={styles.docs__body}>
                    {docs.map(doc => (
                        <div className={styles.doc__column} key={doc.title}>
                            <TopImageCard item={doc} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}