import Items from "../Item/Item";
import {useState, useEffect} from 'react'; 

function ItemList ()  {
    const [items, setItems] = useState([        {
        id: 1,
        titulo: 'Producto 5',
        precio: 300,
        stock: 80,
    },
    {
        id: 2,
        titulo: 'Producto 6',
        precio: 150,
        stock: 55,
    },
    {
        id: 3,
        titulo: 'Producto 7',
        precio: 650,
        stock: 30,
    },
    {
        id: 4,
        titulo: 'Producto 8',
        precio: 8000,
        stock: 20,
    },]);

   
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items);
        }, 2000)
    })

    useEffect(() => {
        getProducts.then(rta => setItems(rta));
        
    }, []);
    

    return (
       <section>
            <div>

        { 
            items.length ? 
            <>
                <ul>

                {
                    
                        items.map((item) => (
                        <li key = {item.id}>
                            <Items 
                            titulo={item.titulo}
                            precio={item.precio}
                            stock={item.stock}/>
                        </li>
                        ))
                        
                }
                

                </ul>
            </>     : 
                    <p>Cargando Items...</p>

        }
            </div>
       </section>
        );
    }

export default ItemList;