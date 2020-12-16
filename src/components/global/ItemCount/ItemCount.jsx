import {useState} from 'react';
import "./ItemCount.css";

function ItemCount() {
    const [qty, setQty] = useState(1);

    const handleClickResta = () => {
        if(qty > 0) {
            setQty(qty - 1);
        }
    }
    const onAdd = () => {
        alert(`Agregaste ${qty} productos al carrito`);
    }

    return(
        <div>
        <div className="qty">
         <button 
            disabled={!qty ? 'disabled' : null } 
            onClick={handleClickResta}>
                    -
         </button>
                <input type="text" value={qty} readOnly/>
         <button onClick={() => setQty(qty + 1)}> 
                +
         </button>
         
         
        </div>
        <button className='add' onClick={onAdd}>Agregar al Carrito</button>
        </div>

    )
    
}

export default ItemCount; 