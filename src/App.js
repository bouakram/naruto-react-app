import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header';
import Main from './components/Main';
import Search from './components/Search';
import React from 'react';

function App() {

  // data of the character
  const [data , setData] = useState([])
  // loading shows whene fetching the data
  const [isLoading , setIsLoading] = useState(true)

  // passing the search value to query
  const [query , setQuery] = useState('')

  useEffect(()=>{
    // fetching the data using axios
    const fetchitems = async ()=>{
      const result = await axios(`https://naruto-api.herokuapp.com/api/v1/characters?name=${query}`) // make query to search for the character

      // seting the data from the fetching api
      setData(result.data)
      // seting is loading to false after geting the data from the api
      setIsLoading(false)
    }
    fetchitems()
  }, [query])// will render every time query value changed so fetching againe the data with the query that past in

  return (
    <div className="App">
      <Header />
      <Search getQuery = {(q) => setQuery(q)}/>
      <Main data={data} isLoading={isLoading}/>
    </div>
  );
}

export default App;
