import './styles/App.css';
import'./styles/NavBar.css';

import Footer from './components/global/Footer';
import NavBar from './components/global/NavBar';

function App() {
  const cartelSaludo = () => {
    alert('Hola mundo');
  }
  const logo = () => {
    <img src="%PUBLIC_URL%/skullby-logo.jpg" alt=""/>
  }
  return (
    <>
     <NavBar titulo="Skullby" action={cartelSaludo}/>
     
     <Footer/>
     
    </>
  );
}


export default App;
