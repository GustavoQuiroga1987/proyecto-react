import CartWidget from "./CartWidget"

const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navbar bg-primary p-3">
            <h1 className="navbar-brand fs-2 text fw-bold text-white" href="#">Outerheaven</h1>
            <div className=" justify-content-center " id="navbarNav">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <a className="nav-link active fw-semibold text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-white" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-white" href="#">Locales</a>
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
