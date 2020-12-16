import './ItemListContainer.css';
import {AiFillCloseCircle} from 'react-icons/ai';

const ItemListContainer = ({children}) => {
    return (
        <div className="overlay" id="itemlist">
            <div className="itemlist">
               

                {children}
            </div>
        </div>
    )
}

export default ItemListContainer;