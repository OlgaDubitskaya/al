import React, { useState, useEffect } from "react"
import { fetchApi, success, error, warning } from "../../../../shared/functions"
import { Table, Image, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
// import styles from "./buyout-orders.module.css"


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
            console.log("res", res)
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
            title: 'Наименование авто',
            dataIndex: 'autoName',
            key: 'autoName'
        },
        {
            title: 'Год выпуска',
            dataIndex: 'year',
            key: 'year'
        },
        {
            title: 'Пробег',
            dataIndex: 'mileage',
            key: 'mileage'
        },
        {
            title: 'Цена',
            dataIndex: 'cost',
            key: 'cost'
        },
        {
            title: 'Описание',
            dataIndex: 'description',
            key: 'description'
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
        <div>
            <Table columns={columns} dataSource={orders} />
            <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                    {photoCarousel.map(img => (
                        <Image src={`/images/buyout-photo/${img}`} />
                    ))}
                </Image.PreviewGroup>
            </div>
        </div>
    )
}