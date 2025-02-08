import React from "react"
import { Route, Switch } from "react-router-dom"
import { Main } from "../../modules"

export const Navigation = () => (
	<Switch>
		<Route path="/" component={Main} />
	</Switch>
)