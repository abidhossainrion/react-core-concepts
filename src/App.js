import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const nayoks = ['Razzak','Alomgir','Salam','Bappi','Shuvo']
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator',price:'$60.99'},
    {name:'PDF Reader',price:'$6.99'},
    {name:'Premiere Elements',price:'$249.99'},
  ]
  
  
  return (
    <div className="App">
      <header className="App-header">

        <p>I am a React Person</p>
     
        
      

        
        <Counter> </Counter>
        <Counter2> </Counter2>
        <Users> </Users>
        <ul>
          {
            nayoks.map(nayok=><li style={{color:'red'}}> {nayok} </li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
          
        </ul>
        {
          products.map(product=><Product myproduct={product}> </Product>)
        }

        
        {/* <Product product={products[0]}> </Product>
        <Product product={products[1]}> </Product> */}
       <Person name={nayoks[0]} profession="programmer"> </Person>
       <Person name={nayoks[1]} profession="Programmer"> </Person> 
      
      </header>
    </div>
  );
}


const Counter  = () =>{
  const [count,setCount] = useState(10);
  
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={() =>setCount(count + 1)}>Increase</button>
      </div>
  )
}


const Users = () =>{

  const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
      {
        users.map(users=><li> {users.name} </li>)
      }
      </ul>
      </div>
  )
}


const Counter2 = ()=>{
  const [count,setCount] =  useState(0);


 

    return (
      <div>
        <h1>Count:{count}</h1>
        <button onMouseOver={()=>setCount(count+1)}>Increase</button>
        <button style={{margin:'20px'}} onClick={()=>setCount(count-1)}>Decrease</button>
        </div>
    )
  
  
}

    




const Product = (props) =>{
  console.log(props)
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'orange',
    height:'200px',
    width:'200px',
    float:'left'
  }
  
  const {name,price} = props.myproduct;
  console.log(name,price);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h1>{price} </h1>
      <button>By Now</button>
      </div>
  )
}

function Person(props){
  return (
    <div style={{border:'2px solid red',margin:'10px',width:'400px'}}>
      <h3>My Name:{props.name} </h3>
      <p>My Profession: {props.profession}</p>
      </div>
  )
}
export default App;
