import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from '../components/Header'
import NotFound from '../components/NotFound'
import Home from '../components/Home'
import AddProfile from '../components/AddProfile'
import '../styles/styles.scss'

export default() =>(
    <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/addProfile" component={AddProfile} exact={true} />
          <Route path="/" component={Home} exact={true} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>

)