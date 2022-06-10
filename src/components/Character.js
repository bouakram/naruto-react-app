import React from 'react'

function Character({items}) {
  return (
<div className="card-container">
        <div className="card">

        {/* front of the card containe character image */}
        <figure className='front'>
          <img src={items.images[0]} alt="" />
        </figure>

        {/* back of the card containe character information */}
        <figure className='back'>
          <h3>Character information</h3>
          <hr />
          <ul>
            <li>
            <span>Name :</span> {items.name}
            </li>
            <li>
              <span>Sex : </span> {items.info.Sexo}
            </li>
            <li>
              <span>Birthday : </span> {items.info.Aniversário}
            </li>
            <li>
              <span>Age : </span> {items.info.Idade}
            </li>
            <li>
              <span>Village : </span> {items.info.Afiliação}
            </li>
            <li>
              {/* testing if ther is no data return no information */}
              <span>Patente Ninja : </span>{items.info['Patente Ninja'] ? items.info['Patente Ninja']  : "no information"}
            </li>
            <li>
              <span>Page : </span><a href={items.page} target="_blank">{items.info.Afiliação}</a> 
            </li>
          </ul>
        </figure>
        </div>
</div>

  )
}

export default Character