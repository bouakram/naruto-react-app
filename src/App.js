import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header';
import Main from './components/Main';
import React from 'react';

function App() {
  // https://naruto-api.herokuapp.com/api/v1/characters
  const [data , setData] = useState([])
  const [isLoading , setIsLoading] = useState(true)

  useEffect(()=>{
    const fetchitems = async ()=>{
      const result = await axios('https://naruto-api.herokuapp.com/api/v1/characters')
      setData(result.data)
      setIsLoading(false)
    }
    fetchitems()
  }, [])

  return (
    <div className="App">
      <Header />
      <Main data={data} isLoading={isLoading}/>
    </div>
  );
}

export default App;
