import React, { useEffect } from "react"
import { Login } from "./login"
import { Modules } from "./modules"
import { useSelector, useDispatch } from "react-redux"
import { setAuthorized } from "./ducks"
import { fetchApi } from "../../shared"
// import styles from "./admin.module.css"

export const Admin = () => {
    const { userInfo: { authorized } } = useSelector(state => state.adminModule)
    const dispatch = useDispatch()

    const checkAuth = async () => {
        const res = await fetchApi({ 
            url: "/api/admin/user/check", 
            method: "POST"
        })
        if (!res.error) dispatch(setAuthorized(true))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => checkAuth(), [])
    
    return (
        <>
            { !authorized ? <Login /> : <Modules /> }
        </>
    )
}