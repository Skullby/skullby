import './CartWidget.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import {AiFillCloseCircle} from 'react-icons/ai';
import ItemList from '../ItemList/ItemList';

const CartWidget = ({show, action}) => {
    return (
        <>
        <div className={`cartWidget ${show ? 'open' : 'close'}`}>

            <AiFillCloseCircle className="button" onClick={action}/>
            

        </div>
        </>
    )
}

export default CartWidget;