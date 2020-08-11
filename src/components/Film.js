import React from 'react';

const Film = ({ children, url }) => {
  return (
    <div className="film">
      <ul>
      <a href = { url }>
        <li>{ children }</li>
      </a>
      </ul>
    </div>
  )
}

export default Film;