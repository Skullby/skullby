import './ItemWidget.css';
import {FaRegListAlt} from 'react-icons/fa'; 

const ItemWidget = ({show, action}) => {
    return (
        <>
        <div className={`itemWidget ${show ? 'open' : 'close'}`}>

            <FaRegListAlt className="button" onClick={action}/>
            

        </div>
        </>
    )
}


export default ItemWidget;