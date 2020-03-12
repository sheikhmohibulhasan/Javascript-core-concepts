import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
                                            //Example of passing object usings map ; Dianamicly
 const products = [
   {name: 'Photoshop', price: '$99', button: 'Buy Now'},
   {name: 'Ilasstator', price: '$88', button: 'Go Now'},
   {name: 'Design', price: '$77', button: 'Take Now'},
   {name: 'Premier', price: '$349', button: 'Gola kata'}
  ];  
  return (
    <div className="App">
      <header className="App-header">
        <p>Please hover those Button to see Magic!</p>
        <Counter></Counter>
        {/* {
          products.map(item => <Product item = {item}></Product>)
        } */}
      </header>
    </div>
  );
}
function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '300px',
    float: 'left',
    color: 'blue'
  }
  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'tomato',
    color: 'yellow',
    maxWidth: '100px',
    height: '50px',
    cursor: 'pointer',
    borderRadius: '8px'
    
  }
  const {name, price, button}= props.item;
  return(
    <div style = {productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button style = {buttonStyle}>{button}</button>
    </div>
  )

}
function Hero (props){
  const personStyle = {
    border: '2px solid yellow', 
    padding: '10px', 
    margin: '5px', 
    borderRadius: '10px'
  }
  console.log(props);
  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
  <h2>Speciality: {props.speciality}</h2>
   
  </div> 
  )
}
function Counter (){
  const [myCount, setCount] = useState(0);
  //const handleIncrease = () => setCount(myCount + 2);
  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'tomato',
    color: 'yellow',
    maxWidth: '100px',
    height: '50px',
    cursor: 'pointer',
    borderRadius: '8px',
    margin: '0px 20px'
  }
  return(
    <div >
      <h1>Count: {myCount}</h1>
      <button onMouseMove = { () => setCount(myCount + 1)} style= {buttonStyle}>Increase</button>
      <button onMouseMove= { () => setCount(myCount - 1)} style= {buttonStyle}>Decrease</button>
    </div>
  )
}

export default App;
