import CartWidget from "./CartWidget"

const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
        <div className="container-fluid bg-primary-subtle p-3">
            <a className="navbar-brand fs-2 text fw-bold" href="#">Outerheaven</a>
            <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active fw-semibold" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">Locales</a>
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
