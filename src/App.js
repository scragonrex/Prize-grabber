import React,{useEffect, useState} from 'react';
import './App.css';
import Display from './components/Display'
import Navbar from './components/Navbar';
function App() {
 
  const [category, setcategory] = useState('');
  const [startyear, setstartyear] = useState(0);
  const [endyear, setendyear] = useState(0);
  const categoryChange=(value)=>
  {
    setcategory(value);
  }
  const yearChange=(value)=>
  {
    console.log(value);
    setstartyear(parseInt(value.slice(0,4)));
    setendyear(parseInt(value.slice(5,10)));
  }
  return (<div>
    <Navbar categoryChange={categoryChange} yearChange={yearChange}/>
    <Display category={category} startyear={startyear} endyear={endyear}/>
    </div>
  );
}

export default App;
