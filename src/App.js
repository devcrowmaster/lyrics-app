import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';

import axios from 'axios';
import Song from './components/Song';

function App() {

  const [searchSong, setSearchSong] = useState({});

  const [letter, setLetter] = useState('');

  useEffect(()=>{
    if(Object.keys(searchSong).length === 0) return; //Verifica que la primera peticion no aga nada

    const consultApiLetra = async()=>{

      const {artist,song} = searchSong;
      const urlLetter = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const urlArtist = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      //PROBLEMA: ESTO HACE QUE PRIMERO SE OBTENGA LA PETICION DE LETRAS LUEGO CUANDO ACABE SE EJECUTA LA DE ARTISTA
      const result = await axios(urlLetter)  //axios.get(url);
      const result2 = await axios(urlArtist)  //axios.get(url);

      // console.log(result);
      // console.log(result.data.lyrics);
      setLetter(result.data.lyrics);

    }
    consultApiLetra()

  },[searchSong])

  return (
    <Fragment>
      <Form
        setSearchSong={setSearchSong}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <Song
              letter={letter}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
