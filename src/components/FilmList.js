import React from 'react';
import Film from './Film';

const FilmList = ({ films }) => {
  const filmNodes = films.map(({ id, name, url }) => 
      <Film key={ id } url={ url }>{ name }</Film>
    )

    return (
      <div className="film-list">
        { filmNodes }
      </div>
    )
  }

export default FilmList;