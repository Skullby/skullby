import Items from "../Item/Item";
import {useState, useEffect} from 'react'; 

const ItemList=() => {
    const [items, setItems] = useState([]);
   
    const products = [
        {
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
        },
    ];
   
   
    const getPromise = () => new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(products)
        }, 2000)
    });

    useEffect(() => {
        getPromise(products).then(rta => setItems(rta));
        
    }, []);
        
    
    
    useEffect(() => {
        console.log(items);
        items.map(item => console.log(item));
    }, [items]);

    return (
    <section className="itemList">
        <div>
        {items.length > 0 && (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <Items
                            titulo={item.titulo}
                            precio={item.precio}
                        />
                    </li>
                ))}
            </ul>
            )   }
            {items.length === 0 && <p>Cargando items...</p>}
        </div>
    </section>
        );
    }

export default ItemList;