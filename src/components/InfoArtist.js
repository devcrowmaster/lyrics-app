import React from 'react';
import PropTypes from 'prop-types';

const InfoArtist = ({infoArtist}) => {
  if(Object.keys(infoArtist).length === 0 ) return null; //Evita mostrar si no hay peticion

  const { strArtistThumb,strGenre,strBiographyEN, strFacebook,strTwitter,strLastFMChart} = infoArtist;

  return ( 
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Informacion Artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo Artista"/>
        <p className="card-text">Genero: {strGenre}</p>
        <h2 className="card-text">Biografia: </h2>
        <p className="card-text">{strBiographyEN}</p>
        <p className="card-text">
        <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-lastfm"></i>
        </a>
        </p>
      </div>
    </div>

  );
}

InfoArtist.propTypes = {
  infoArtist: PropTypes.object.isRequired
}
 
export default InfoArtist;