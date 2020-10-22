import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import CreateClient from './pages/CreateClient'
import CreateProduct from './pages/CreateProduct'
import ListProducts from './pages/ListProducts'

const Routes = () => {
    return (
        <BrowserRouter>
        <Route component={Home} exact path="/" />
        <Route component={CreateClient} path="/create-client" />
        <Route component={CreateProduct} path="/create-product" />
        <Route component={ListProducts} path="/products" />
        </BrowserRouter>
    )
}
export default Routes;