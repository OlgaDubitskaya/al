/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { store } from "./redux/store"
import { Navigation } from "./navigation"
import 'antd/dist/antd.css'
import "./global-style.css"

export const App = () => (
	<Provider store={store}>
		<Router>
			<Navigation />
		</Router>
	</Provider>
)