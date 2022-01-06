import React from 'react';
import Slideshow from './ImageSlider';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router';

export function Home() {
  const history = useHistory();
  const [movieList,setMovieList] = useState([])
  const token = localStorage.getItem('token')
//eslint-disable-next-line
  useEffect( async()=>{
    var decoded = jwt.decode(token)
    console.log(decoded)
    if(decoded.exp *1000 <= Date.now()){
       history.push('/')
    }else{
      var response = await axios.get('https://bookmyshow-i.herokuapp.com/movie/getmovie');
      setMovieList(response.data);
    }
    //eslint-disable-next-line
    },[])
  
  return (
    <div className="home">
     <Slideshow/>
     <div className="movie"><h2>MOVIES</h2></div> 
     <div className="movie-card">
       {movieList.map((movie,index)=>(<Movies key={index} name={movie.name} certificate={movie.certificate} language={movie.language} pic={movie.pic}/>))}
     </div>
      </div>
  );
} 

  function Movies({name,certificate,language,pic}){
  return(
    <div className="card">
      <img className="movie-pic" src={pic} alt={name}/>
      <h3>{name}</h3>
      <p>{certificate}</p>
      <p>{language}</p>
      <Button style={{ width: "250px", height: "50px", border: "none", color: "white", backgroundColor: "orange", marginBottom: "20px",position:"static" }}><Link to="/book" style={{ textDecoration: "none", color: "white" }}>BOOK NOW</Link></Button>
    </div>
  )
}



