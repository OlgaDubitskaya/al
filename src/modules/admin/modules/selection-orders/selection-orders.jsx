import React, { useState, useEffect } from "react"
import { fetchApi, success, error, warning } from "../../../../shared/functions"
import { Table, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
// import styles from "./selection-orders.module.css"

export const SelectionOrders = () => {
    const [orders, setOrders] = useState([])

    const getOrders = async () => {
        try {
            const res = await fetchApi({
                url: "/api/admin/order/selectionorders?page=1&size=25",
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
                url: "/api/admin/selectionorder",
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
            title: 'Дата',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Действие',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => {
                return (
                    <div className="">
                        <Button type="text" onClick={() => deleteOrder(record.key)}><DeleteOutlined /></Button>                    </div>
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
        </div>
    )
}