import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({setSearchSong}) => {

  const [search, setSearch] = useState({
    artist: '',
    song: ''
  });

  const [error, setError] = useState(false);
  
  const { artist, song} = search;



  //Funcion a cada input para leer su contenido

  const updateState = e =>{
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault();

    if(artist.trim() === '' || song.trim() === ''){
      setError(true);
      return;
    }
    setError(false);

    //Pasar al componente principal
    setSearchSong(search);

  }




  return ( 
    <div className="bg-info">
      <div className="container">
        {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="artist">Artista</label>
                    <input 
                      id="artist"
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Nombre Artista"
                      onChange={updateState}
                      value={artist}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="song">Cancion</label>
                    <input 
                      id="song"
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Nombre Cancion"
                      onChange={updateState}
                      value={song}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary float-right"
              >Buscar</button>
            </fieldset>

          </form>
        </div>
      </div>
    </div>  
  );
}


Form.propTypes = {
  setSearchSong: PropTypes.func.isRequired
}

export default Form;
