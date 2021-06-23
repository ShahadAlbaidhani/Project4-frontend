import React, { Component } from 'react'
import {Redirect, Route} from "react-router-dom"

export default function Protect({component: Component , isLogin ,path , ...rest}) {
    return (
        <div>
            <Route exact path={path}
            render = {() => isLogin ? <Component {...rest} /> : <Redirect to="singin" /> }
            />
        </div>
    )
}
