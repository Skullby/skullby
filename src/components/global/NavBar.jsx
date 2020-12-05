import { logDOM } from "@testing-library/react";

function NavBar({titulo , action}) {
    // const {titulo} = props;
    return(
        <>
        <header>
       
        <div className="container">
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