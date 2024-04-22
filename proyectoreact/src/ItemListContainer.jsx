import ItemList from "./ItemList"

const ItemListContainer=({Item})=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col ">
                    <ItemList/>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer