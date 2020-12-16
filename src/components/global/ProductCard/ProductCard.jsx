import './ProductCard.css';
import ItemCount from '../ItemCount/ItemCount';

const ProductCard = ({titulo, precio, stock}) => {
    return(
        <article className="productCard">
            <img src="https://placehold.it/300x300" alt={titulo}/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
                <p className="stock">Stock: {stock}</p>
                <ItemCount/>
                
            
            </div>
  
        </article>
    )
}

export default ProductCard