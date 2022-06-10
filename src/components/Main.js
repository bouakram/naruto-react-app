import React from 'react'
import Character from './Character'

function Main(props) {
  return props.isLoading ? (<div className='center'><h1>Loading...</h1></div>) : 
   (
    <main className="App-main">
        {props.data.map(character => (
            <Character key={character.id} items = {character} />
        ))}
    </main>
  )
}

export default Main