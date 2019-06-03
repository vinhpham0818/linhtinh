import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/home/home'
import ProductsPage from './pages/products/products'
import FarmsPage from './pages/farms/farms'
import BlogPage from './pages/blog/blog'
import ContactPage from './pages/contact/contact'
import ProductDetail from './pages/products/detail/detail'

const MainRouter = () => (
    
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/products' component={ProductsPage}></Route>
            <Route path='/product/:id' component={ProductDetail}></Route>
            <Route path='/farms' component={FarmsPage}></Route>
            <Route path='/blog' component={BlogPage}></Route>
            <Route path='/contact' component={ContactPage}></Route>
        </Switch>
    </main>
    
)

export default MainRouter