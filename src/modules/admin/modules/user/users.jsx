import React, { useState, useEffect } from "react"
import { Button, Modal, Input, Space, Table } from "antd"
// eslint-disable-next-line no-unused-vars
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { fetchApi, success, error, warning } from "../../../../shared"
// import { setAuthorized } from "../../ducks"
// import { useDispatch } from "react-redux"


const CreateModal = ({ createModalVisible, setCreateModalVisible, getUsers, name = null }) => {
    const [userName, setUserName] = useState(name)
    const [password, setPassword] = useState(null)
    
    useEffect(()=> {
        setUserName(name)
    }, [name])
    const hideModal = () => {
        setUserName(null)
        setPassword(null)
        setCreateModalVisible(false)
    }
    const handleOk = async () => {
        try {
            const res = await fetchApi({
                url: "/api/admin/user/create",
                method: "POST",
                body: { userName, password }
            })
            if (res.error) {
                res.error.message ? error(res.error.message) : error()
                return
            }
            hideModal()
            success()
            await getUsers()
        } catch (e) {
            console.log("error", e)
            error()
        }
    }

    return (
        <Modal title="Basic Modal" visible={createModalVisible} onOk={handleOk} onCancel={hideModal}>
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
            </Space>
        </Modal>
    )
}
export const Users = () => {
    const [createModalVisible, setCreateModalVisible] = useState(false)
    const [users, setUsers] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [name, setName] = useState(null)
    const getUsers = async () => {
        try {
            const res = await fetchApi({
                url: "/api/admin/users",
                method: "GET"
            })
            console.log("res", res)
            setUsers(res.users)
        } catch (e) {
            error()
        }
    }
    const deleteUser = async (id) => {
        try {
            await fetchApi({
                url: "/api/admin/user",
                method: "DELETE",
                body: { id }
            })
            await getUsers()
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
            title: 'Действие',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => {
                return (
                    <div className="">
                        <Button type="text" onClick={() => deleteUser(record.key)}><DeleteOutlined /></Button>
                        {/* <Button type="text" onClick={() => {
                            setName(record.userName)
                            setCreateModalVisible(true)
                        }}><EditOutlined /></Button> */}
                    </div>
                )
            }
        }]
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <Button onClick={() => setCreateModalVisible(true)}>Create</Button>
            <CreateModal
                createModalVisible={createModalVisible}
                setCreateModalVisible={setCreateModalVisible}
                getUsers={getUsers}
                name={name}
            />
            <Table columns={columns} dataSource={users} />
        </div>
    )
}