import './ItemListContainer.css';

const ItemListContainer = ({children}) => {
    return (
        <div className="overlay" id="itemlist">
            <div className="itemlist">
                <a href="#" className="cerrar">X</a>

                {children}
            </div>
        </div>
    )
}

export default ItemListContainer;