import React from "react"
import { Route, Switch } from "react-router-dom"
import { Main, Admin } from "../../modules"

export const Navigation = () => (
	<Switch>
		<Route exact path="/admin" component={Admin} />
		<Route path="/" component={Main} />
	</Switch>
)