import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/home/home'
import ProductsPage from './pages/products/products'
import FarmsPage from './pages/farms/farms'
import BlogPage from './pages/blog/blog'
import ContactPage from './pages/contact/contact'
import ProductRau from './pages/products/rau/rau'
import GioithieuPage from './pages/gioi-thieu/gioithieu'
import LoginPage from './pages/login/login'
import Auth from './components/auth/auth-component'

const MainRouter = () => (
    
    <main>
        <Switch>
        <Route exact path='/' component={HomePage}></Route>
            <Route path="/gioi-thieu" component={GioithieuPage}></Route>
            <Route path='/products' component={ProductsPage}></Route>
            <Route path='/product/:id' component={ProductRau}></Route>
            <Route path='/farms' component={FarmsPage}></Route>
            <Route path='/blog' component={BlogPage}></Route>
            <Route path='/contact' component={ContactPage}></Route>
            <Route path='/login' component={LoginPage}></Route>
        </Switch>
    </main>
    
)

export default MainRouter