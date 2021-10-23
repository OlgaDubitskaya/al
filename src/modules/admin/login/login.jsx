import React, { useState } from "react"
import { Input, Space, Button } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons'
import { useDispatch } from "react-redux"
import { setAuthorized } from "../ducks"
import { fetchApi } from "../../../shared/functions"
import styles from "./login.module.css"

export const Login = () => {
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const dispatch = useDispatch()

    const handlerClick = async () => {
        const res = await fetchApi({
            url: "/api/admin/user/login",
            method: "POST",
            body: { userName, password }
        })
        if (!res.error) dispatch(setAuthorized(true))
    }

    return (
        <div class={styles.container}>
            <div>
                <Space direction="vertical">
                    <Input
                        value={userName}
                        placeholder="Enter your username"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Input.Password
                        value={password}
                        placeholder="Enter password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handlerClick}>Log in</Button>
                </Space>
            </div>
        </div>
    )
}