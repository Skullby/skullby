import {useState} from 'react';
import NavBar from '../NavBar/NavBar';
import CartWidget from '../CartWidget/CartWidget';

const NavAndWidgetCart = () => {
    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    return (
        <>  
            <NavBar titulo="Skullby" action={openWidgetCart}/>
            <CartWidget show={showWidgetCart} action={openWidgetCart} />
        </>
    )
}

export default NavAndWidgetCart;