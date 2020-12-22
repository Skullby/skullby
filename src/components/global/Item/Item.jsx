import './Item.css'

const Items = ({titulo, precio, stock})  => {
    
    return (
        <article className="items">
       
        <div>
            <h3>{titulo}</h3>
            <p>${precio}</p>
           
            
        
        </div>

     </article>

    );
}


export default Items; 