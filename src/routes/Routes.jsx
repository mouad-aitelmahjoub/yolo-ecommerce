import { Route, Switch } from "react-router-dom"
import Home from "../pages/Home"
import Catalogue from "../pages/Catalogue"
import Cart from "../pages/Cart"
import Product from "../pages/Product"

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalogue/:slug" exact component={Catalogue} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/product" exact component={Product} />
    </Switch>
  )
}

export default Routes
