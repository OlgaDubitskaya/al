import React, { useState, useEffect } from "react"
import { fetchApi, success, error, warning } from "../../../../shared/functions"
import { Table, Image, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
// import styles from "./buyout-orders.module.css"

const buyoutKeys = {
    marka: "Марка",
    model: "Модель",
    year: "Год выпуска",
    engine: "Двигатель",
    volume: "Объем двигателя",
    transmission: "Коробка передач",
    mileage: "Пробег",
    cost: "Цена",
    description: "Описание"
}

export const BuyoutOrders = () => {
    const [orders, setOrders] = useState([])
    const [visible, setVisible] = useState(false)
    const [photoCarousel, setPhotoCarousel] = useState([])
    const getOrders = async () => {
        try {
            const res = await fetchApi({
                url: "/api/admin/order/buyoutorders?page=1&size=25",
                method: "GET"
            })
            setOrders(res.orders)
        } catch (e) {
            error()
        }
    }

    const deleteOrder = async (id) => {
        try {
            await fetchApi({
                url: "/api/admin/buyoutorder",
                method: "DELETE",
                body: { id }
            })
            await getOrders()
            success()
        } catch (error) {
            warning()
        }
    }

    const expandedRowRender = (props) => {
        const columns = [
            { title: 'Параметер', dataIndex: 'parameter', key: 'parameter' },
            { title: 'Значение', dataIndex: 'value', key: 'value' }
        ];
        const data = Object.entries(props).reduce((arr, cur) => {
            const [key, value] = cur
            if (buyoutKeys[key]) {
                arr.push({
                    parameter: buyoutKeys[key],
                    value,
                    key
                })
            }
            return arr
        }, [])
        return <Table columns={columns} dataSource={data} pagination={false}/>;
    };
    const columns = [
        {
            title: 'Имя',
            dataIndex: 'userName',
            key: 'userName'
        },
        {
            title: 'Номер телефона',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber'
        },
        {
            title: 'Дата',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: "Фото",
            dataIndex: "images",
            key: "images",
            render: (images) => {
                return (
                    <div>
                        {images && images.length && (
                            <Image
                                preview={{ visible: false }}
                                width={50}
                                src={`/images/buyout-photo/${images[0]}`}
                                onClick={() => {
                                    setPhotoCarousel(images)
                                    setVisible(true)
                                }}
                            />
                        )}
                    </div>
                )
            }
        },
        {
            title: 'Действие',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => {
                return (
                    <div className="">
                        <Button type="text" onClick={() => deleteOrder(record.key)}><DeleteOutlined /></Button>
                    </div>
                )
            }
        }
    ]

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <>
            <Table columns={columns} dataSource={orders} expandable={{ expandedRowRender }} />

            <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                    {photoCarousel.map(img => (
                        <Image src={`/images/buyout-photo/${img}`} />
                    ))}
                </Image.PreviewGroup>
            </div>
        </>
    )
}