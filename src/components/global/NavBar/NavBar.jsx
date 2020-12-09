import { logDOM } from "@testing-library/react";
import logo from "./logo.svg"
import CartWidget from "../CartWidget/CartWidget";


function NavBar({titulo , action}) {
    // const {titulo} = props;
    const carrito = () => {
        alert('Carrito de compras');
      }
    return(
        <>

        <header>
       
        <CartWidget widget={carrito}/>
       
        
        <div className="container">
        <img src={logo}   alt='logo'/>
        <h1 >{titulo}</h1>
        <h2>Tienda E-Commerce</h2>
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={action}>Teclados</a>
                </li>
                <li>
                    <a href="#" onClick={action}>Mouses</a>
                </li>
                <li>
                    <a href="#" onClick={action}>Monitores</a>
                </li>
                <li>
                    <a href="#" onClick={action}>Placas de video</a>
                </li>
                <li>
                    <a href="#" onClick={action}>CPUs</a>
                </li>
            </ul>
        </nav>
             
        </div>


        </header>
        
        </>

    )
}
export default NavBar;