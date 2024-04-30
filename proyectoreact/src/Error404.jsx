import { Link } from "react-router-dom"

const Error404=()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>-Error-</h1>
                    <h2>404</h2>
                    <p>La pagina que estas buscando no existe</p>
                    <p><Link to={"/"} className="btn bg-black text-white">Volver a la pagina principal</Link></p>

                </div>

            </div>

        </div>
    )
}
export default Error404