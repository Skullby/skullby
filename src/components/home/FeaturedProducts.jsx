import ProductCard from '../global/ProductCard/ProductCard';
import './FeaturedProducts.css';
import {useState, useEffect} from 'react';


const FeaturedProducts = () => {
    return(
        <section className="featuredProducts">
            <div>
                <h2>Productos Destacados</h2>
                <ul>
                    <li><ProductCard titulo="Producto 1" precio="500" stock="5" /></li>
                    <li><ProductCard titulo="Producto 2" precio="300" stock="7" /></li>
                    <li><ProductCard titulo="Producto 3" precio="750" stock="1" /></li>
                    <li><ProductCard titulo="Producto 4" precio="100" stock="4" /></li>
                </ul>

            </div>

        </section>
    )
}

export default FeaturedProducts;