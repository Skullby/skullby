import './App.css';
import NavAndWidgetCart from '../global/NavAndWidgetCart/NavAndWidgetCart';
import FeaturedProducts from '../home/FeaturedProducts';
//import {useState} from 'react';

function App() {
  //const [message, setMessage] = useState('');

  //const task = new Promise((resolve, reject) => {
    //if(true) {
      //setTimeout(() => {
        //resolve('Acá están tus datos');
      //}, 3000)
    //} else {
      //reject('Todo mal');
    //}
  //})

  //task
  //.then(rta => setMessage(rta))
  //.catch(error => console.log(error));

   
  return (
    <>

     <NavAndWidgetCart/>
     <FeaturedProducts/>
    
    </>
  );
}


export default App;
