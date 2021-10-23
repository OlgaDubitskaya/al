import React, { useState } from "react"
import { Dropdown, BlockTitle } from "../../../../../shared/components"
import styles from "./selection.module.css"

const list = [
    {
        id: 1,
        title: "Выезд в удобное для вас время на автомобиле эксперта для осмотра выбранного Заказчиком автомобиля",
        subtitle: "Осмотр может производится как совместно с клиентом, так и удаленно. Если удаленно, специалист все дефекты фотографирует и высылает Заказчику"
    },
    {
        id: 2,
        title: "Первичный осмотр автомобиля",
        subtitle: "Проверка кузова на предмет перекраски и ДТП, осматриваются пороги, лонжероны, стойки"
    },
    {
        id: 3,
        title: "Проверка двигателя автомобиля",
        subtitle: "Оценивается степень износа двигателя и приводных ремней, осматриваются все соединения на наличие подтеков и запотеваний, прослушивается на наличие посторонних шумов и вибраций, проверяются рабочие жидкости и их уровень"
    },
    {
        id: 4,
        title: "Считывание ошибок диагностическим оборудованием",
        subtitle: ""
    },
    {
        id: 5,
        title: "Проверка оригинальности пробега",
        subtitle: ""
    },
    {
        id: 6,
        title: "Полный осмотр и проверка всех систем автомобиля",
        subtitle: "Кондиционер, электрические стеклоподъемники, освещение автомобиля, аудио и навигационные системы, и др. ассистенты"
    },
    {
        id: 7,
        title: "Тест –драйв",
        subtitle: "Проверка рулевого управления, тормозной системы, ходовой части автомобиля"
    },
    {
        id: 8,
        title: "Оценка стоимости устранения выявленных при осмотре автомобиля неисправностей",
        subtitle: ""
    },
    {
        id: 9,
        title: "Экспертная оценка целесообразности покупки",
        subtitle: ""
    },
    {
        id: 10,
        title: "Торг с продавцом в интересах Заказчика",
        subtitle: ""
    }
]
export const Selection = () => {
    const [subtitleVisible, setSubtitleVisible] = useState(() => {
        const prep = {}
        list.forEach(l => {
            prep[l.id] = false
        })
        return prep
    })

    return (
        <div className={styles.page_selection} id="selection">
            <div className={`${styles.selection__container} _container`}>
                <BlockTitle text="Подбор авто">
                    <div className={styles.service}>
                        <div className={styles.service__item}>Разовый осмотр</div>
                        <div className={styles.service__price}>70 р.</div>
                    </div>
                    <div className={styles.description}>Осмотр автомобиля нашими экспертами даёт понять в каком техническом и косметическом состоянии находится автомобиль. И стоит ли за указанную цену рассматривать его к покупке.</div>
                </BlockTitle>
                <div className={styles.selection__body}>
                    {list.map(i => (
                        <Dropdown
                            item={i}
                            setVisible={setSubtitleVisible}
                            visible={subtitleVisible}
                        />
                    ))}
                </div>
                <div className={styles.note}>При необходимости выезда за пределы г.Бреста цена на осмотр согласовывается.</div>
            </div>
        </div>
    )
}