import { BiCart } from 'react-icons/bi';
import './Cart.css';

const Cart = ({action}) => {
    return(
        <div className="cart" onClick={action}>
            <BiCart/>
            <span>0</span>
        </div>
         
    )
}

export default Cart;