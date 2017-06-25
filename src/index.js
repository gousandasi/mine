import  React from "react"
import {render} from "react-dom"
import {Router,Route,hashHistory,IndexRoute} from "react-router"
import Index from "./routes/Index"
import store from "./config/store"
import Home from "./routes/Home/home"
import {Provider} from "react-redux"
import ClassList from "./routes/ClassList/index"
import Cart from "./routes/Cart/cart"
import Mychawo from "./routes/Mine/mine"
import Server from "./routes/Server/server"
import ViewList from "./routes/ViewList/history"
import Signin from "./routes/Signin/signin"
import ProductList from "./routes/ProductList/list"
import DetailPage from "./routes/Details/detail"
import CartPage from "./routes/Cart/cart"
/*const App=()=> {
    return <Provider store={store}>
               <Router history={hashHistory}>
                   <Route path="/" component={Index}/>
                   <Route path="/home" component={Home}/>
                   <Route path="/list" component={ProductList}/>
                   <Route path="/cart" component={Cart}/>
                   <Route path="/mine" component={Mine}/>
                </Router>
           </Provider>
        }*/
//home提供底部
//<IndexRoute />===<Route path="/" />
//home里面有好多页面
const App=()=> {
    /*Provider 把store传递给Provider Provider会帮你把store传递给组件*/
    return <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <IndexRoute path="/(:goods_id)" component={Index} />
                <Route path="cart" component={Cart}/>
                <Route path="mine" component={Mychawo}/>
                <Route path="server" component={Server}/>
                <Route path="history" component={ViewList}/>
                <Route path="signin" component={Signin}/>
                <Route path="list/(:brand_id)" component={ProductList}/>
            </Route>
            <Route path="index" component={ClassList}/>
            <Route path="cart" component={CartPage}/>
            <Route path="detail/(:goods_id)" component={DetailPage}/>
        </Router>
    </Provider>
}
render(<App />,document.getElementById("root"))