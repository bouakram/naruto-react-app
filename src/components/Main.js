import React from 'react'
import Character from './Character'

function Main(props) {
  // when fetching the data it will show Loading...
  return props.isLoading ? (<div className='center'><h1>Loading...</h1></div>) : 
   (
    <main className="App-main">
      {/* maping the data and return the character information as props inside the Character components - items containe the character information*/}
        {props.data.map(character => (
            <Character key={character.id} items = {character} />
        ))}
    </main>
  )
}

export default Main