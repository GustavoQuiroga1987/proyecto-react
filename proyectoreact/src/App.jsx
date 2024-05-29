
import ItemListContainer from './ItemListContainer.jsx'
import NavBar from './NavBar'
import Hero from './Hero.jsx'
import ItemDetailContainer from './ItemDetailContainer.jsx'
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import Error404 from './Error404.jsx'
import Cart from './Cart.jsx'
import Checkout from "./Checkout.jsx"
import CartContextProvider from "./context/CartContext"
import Footer from './Footer.jsx'





function App() {
  
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Hero/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/checkout"} element={<Checkout />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes> 
      <Footer />
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
