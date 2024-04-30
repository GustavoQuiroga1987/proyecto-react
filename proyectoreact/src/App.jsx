
import ItemListContainer from './ItemListContainer.jsx'
import NavBar from './NavBar'
import Hero from './Hero.jsx'
import ItemDetailContainer from './ItemDetailContainer.jsx'
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import Error404 from './Error404.jsx'





function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Hero/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
