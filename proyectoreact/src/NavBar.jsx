import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navbar bg-primary p-3">
            <h1 className="navbar-brand fs-2 text fw-bold text-white" >Outerheaven</h1>
            <div className=" justify-content-center " id="navbarNav">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <NavLink className="nav-link active fw-semibold text-white" aria-current="page" to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold text-white" to={"/category/Samsung"}>Samsung</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold text-white"to={"/category/Motorola"}>Motorola</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold text-white" to={"/category/Xiaome"}>Xiaome</NavLink>
              </li>
            </ul>
          </div>
          <div className=" text-end">
                <CartWidget />
              </div>
        </div>
      </nav>
    )
}

export default NavBar
