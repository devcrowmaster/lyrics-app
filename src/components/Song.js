import React, { Fragment } from 'react';

const Song = ({letter}) => {

  if(letter.length === 0) return null; //Evita que aparezca cuando no hay peticiones
  return(
    <Fragment>
      <h2>Letra Cancion</h2>
      <p className="letra">{letter}</p>
    </Fragment>
  )
}
export default Song;