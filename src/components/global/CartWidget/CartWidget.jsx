import { BiCart } from 'react-icons/bi';
import './CartWidget.css';

function CartWidget({widget}) {
    return(
        <div>
            <h2><a className="cart" href='#' onClick={widget} >Carrito<BiCart/></a></h2>
        </div>
         
    )
}

export default CartWidget;