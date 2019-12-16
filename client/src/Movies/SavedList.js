import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { NONAME } from 'dns';
import { generateKeyPair } from 'crypto';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`} activeStyle = {{
        fontWeight: "bold",
        textDecoration: "none",
        color: "grey"
        
      }}>
        <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}
    <Link to="/">
      <div className="home-button">Home</div>
    </Link>
    

   
  </div>
);

export default SavedList;
