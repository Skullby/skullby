import './App.css';
import './components/global/NavBar/NavBar.css';

import Footer from './components/global/Footer/Footer';
import NavBar from './components/global/NavBar/NavBar';
import ItemListContainer from './components/global/ItemListContainer/ItemListContainer';

function App() {
  const cartelSaludo = () => {
    alert('Hola mundo');
  }
  
  
  return (
    <>
     <NavBar titulo="Skullby" action={cartelSaludo}/>
     
     <a href="#itemlist" className="itemlist">Abrir lista de Items</a>
     <ItemListContainer>
       <p>Aca estan los Items</p>
     </ItemListContainer>
    
     <Footer/>
     
    </>
  );
}


export default App;
