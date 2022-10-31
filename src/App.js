import React, {useState} from 'react';
import './App.css';
import Display from './components/Display'
import Navbar from './components/Navbar';
import Fourwinner from './components/FourWinner';
import LoadingBar from 'react-top-loading-bar';
  const App = () => {
    const [progress, setProgress] = useState(0)
  const [category, setcategory] = useState('');
  const [startyear, setstartyear] = useState(0);
  const [endyear, setendyear] = useState(0);
  const [filterState, setFilterState] = useState(false)

  const categoryChange=(value)=>
  {
    setcategory(value);
    setFilterState(true);
  }


  const yearChange=(value)=>
  {
    console.log(value);
    setstartyear(parseInt(value.slice(0,4)));
    setendyear(parseInt(value.slice(5,10)));
    setFilterState(true);
  }


  const filterChange=(value)=>
  {
  setFilterState(value);
  }

  const changeProgress=(progress)=>
  {
    setProgress(progress);
  }

  return (<div>
    <Navbar categoryChange={categoryChange} yearChange={yearChange} filterChange={filterChange}/>
    <LoadingBar
        color='#00619d'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={4}
      />
    <Fourwinner/>
    <Display changeProgress={changeProgress} category={category} startyear={startyear} endyear={endyear} filterState={filterState}/>
    </div>
  );
}
export default App
