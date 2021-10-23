import React from "react"
import { setAuthorized } from "../ducks"
import { useDispatch } from "react-redux"
import { Button, Tabs } from "antd"
import { fetchApi } from "../../../shared/functions"
import { Users } from "./user"
import { SelectionOrders } from "./selection-orders"
import { BuyoutOrders } from "./buyout-orders"
import styles from "./modules.module.css"

const { TabPane } = Tabs

export const Modules = () => {
    const dispatch = useDispatch()

    const logOut = async () => {
        dispatch(setAuthorized(false))
        await fetchApi({
            url: "/api/admin/user/logout",
            method: "POST"
        })
    }

    return (
        <div class={styles.container}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Выкуп авто" key="buyoutorders">
                    <BuyoutOrders />
                </TabPane>
                <TabPane tab="Разовый осмотр" key="selectionorders">
                    <SelectionOrders />
                </TabPane>
                <TabPane tab="Пользователи" key="users">
                    <Users />
                </TabPane>
            </Tabs>
            <Button onClick={logOut}>Log out</Button>
        </div>
    )
}