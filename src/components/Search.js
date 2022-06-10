import React , {useState} from 'react'

function Search(props) {
    const [text , setText] = useState('')
    // whene tiping in the search feild it will take the iput value and pase it in setText and get Query tho search for the input value 
    const onChange = (q)=>{
        setText(q)
        props.getQuery(q)
    }

  return (
    <section className='search'>
        <form>
            <input type="text" className='forminput' placeholder='Search the character' 
            value={text} // the input value
            onChange={(e)=> onChange(e.target.value)} // take the input value and pase it to onchange
            autoFocus
            />
        </form>
    </section>
  )
}

export default Search