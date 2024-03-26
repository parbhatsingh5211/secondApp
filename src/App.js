import './App.css';
import { NewProduct } from './Components/NewProduct';
import {Products} from './Components/Products';
 
function App() {
  const products = [
    {
      id: 'P1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2001,8,10)
    }, 
    {
      id: 'P2',
      title: 'Surf Excel',
      amount: 200,
      date: new Date(2014,1,28)
    },
    {
      id: 'P3',
      title: 'Tide',
      amount: 130,
      date: new Date(2018,2,3)
    },
    {
      id: 'P4',
      title: 'Wheel',
      amount: 160,
      date: new Date(2021,5,5)
    } 
  ];

  function printProductData(data){
    console.log("Inside App.js");
    console.log(data);
  }
  
  return (
    <div>
      <NewProduct printData={printProductData}/>
      <Products items={products}/>
    </div>
  );
}

export default App;
