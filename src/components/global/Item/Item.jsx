import './Item.css'

const Items = (titulo, precio, stock)  => {
    
    return (
        <article className="items">
        <img src="https://placehold.it/100x100" alt={titulo}/>
        <div>
            <h3>{titulo}</h3>
            <p>${precio}</p>
            <p className="stock">Stock: {stock}</p>
            
            
        
        </div>

    </article>

    );
}


export default Items; 