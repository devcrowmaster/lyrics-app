import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';

import axios from 'axios';
import Song from './components/Song';
import InfoArtist from './components/InfoArtist';

function App() {

  const [searchSong, setSearchSong] = useState({});

  const [letter, setLetter] = useState('');
  const [infoArtist, setInfoArtist] = useState({});

  useEffect(()=>{
    if(Object.keys(searchSong).length === 0) return; //Verifica que la primera peticion no aga nada

    const consultApiLetra = async()=>{

      const {artist,song} = searchSong;
      const urlLetter = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const urlArtist = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      //Esto ejecuta las peticiones en simultaneo
      const [letter,infoArtist] = await Promise.all([
        axios(urlLetter),
        axios(urlArtist)
      ])

      // console.log(letter)
      // console.log(infoArtist)
      // console.log(letter.data.lyrics)
      // console.log(infoArtist.data.artists[0])

      setLetter(letter.data.lyrics);
      setInfoArtist(infoArtist.data.artists[0]);

    }
    consultApiLetra()

  },[searchSong,infoArtist])

  return (
    <Fragment>
      <Form
        setSearchSong={setSearchSong}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <InfoArtist
              infoArtist={infoArtist}
            />
          </div>
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
