import React from 'react'
import { Route } from 'dva/router'


export default function SubRoutes(route) {
    console.log(route)
    return (
        <Route
            render={props => <route.component {...props} routes={route.routes}/>}
        />
    )
}
