import React from 'react';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import { useEffect,useState} from 'react';
import axios from 'axios';

export function Movies() {
  const [movieList,setMovieList] = useState([])
  //eslint-disable-next-line
  useEffect(async ()=>{
      const response = await axios.get('https://book-my-show-backend-rose.vercel.app/movie/getmovie');
      setMovieList(response.data);
    },[])
    return (
      <div className="home">
       <div className="movie"><h2>Movies</h2></div> 
       <div className="movie-card">
         {movieList.map((movie,index)=>(<Movie key={index} name={movie.name} certificate={movie.certificate} language={movie.language} pic={movie.pic} id={index}/>))}
       </div>
        </div>
    );
  } 

function Movie({name,certificate,language,pic,id}){ 
    return(
      <div className="card">
        <img className="movie-pic" src={pic} alt={name}/>
        <h3>{name}</h3>
        <p>{certificate}</p>
        <p>{language}</p>
        <Button  style={{ width: "250px", height: "50px", border: "none", color: "white", backgroundColor: "orange", marginBottom: "20px",position:"static" }}><Link to="/book" style={{ textDecoration: "none", color: "white" }}>BOOK NOW</Link></Button>
      </div>
    )
  }
  

  
