import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';

import axios from 'axios';

function App() {

  const [searchSong, setSearchSong] = useState({});

  const [letter, setLetter] = useState('');

  useEffect(()=>{
    if(Object.keys(searchSong).length === 0) return; //Verifica que la primera peticion no aga nada

    const consultApiLetra = async()=>{

      const {artist,song} = searchSong;

      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const result = await axios(url)  //axios.get(url);
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
    </Fragment>
  );
}

export default App;
