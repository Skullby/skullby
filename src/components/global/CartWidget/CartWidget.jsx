import './CartWidget.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import {AiFillCloseCircle} from 'react-icons/ai';

const CartWidget = ({show, action}) => {
    return (
        <div className={`cartWidget ${show ? 'open' : 'close'}`}>

                <AiFillCloseCircle className="button" onClick={action}/>
                <ItemListContainer>
                <li>Soy un Widget</li>
                <li>Soy otro Widget</li>
                <li>Soy el tercer elemento de la lista</li>
                </ItemListContainer>
            
                
            

        </div>
    )
}

export default CartWidget;