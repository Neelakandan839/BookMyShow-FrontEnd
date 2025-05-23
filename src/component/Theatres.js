import { Button,Card,CardContent,Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect,useState } from 'react';
import axios from 'axios';

export function Theatres(props){
    const [theatreList,setTheatreList] = useState([])
    //eslint-disable-next-line
  useEffect(async ()=>{
      var response = await axios.get('https://book-my-show-backend-rose.vercel.app/theatre/gettheatre');
      setTheatreList(response.data);
    },[])
    return(
      <><div>
             <div className="theatre"><h2>THEATRES</h2></div>
        </div>
        <div>
            {theatreList.map((theatre,index)=>(<TheatreCard name={theatre.name} address={theatre.address}/>))}
        </div>
      </>
    )
}

function TheatreCard({name,address}){
    return(
        <div> 
             <Card style={{display:"flex",flexDirection:"coloumn",margin:"5px",background:"rgb(241, 245, 245)"}} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography style={{display:"flex"}} sx={{ fontSize: 14 }}  gutterBottom>
        <h3>{name} : {address} </h3>
            <Button style={{margin:"10px"}} color="success" variant="outlined"><Link to="/seat_select" style={{textDecoration:"none",color:"green",fontSize:"17px"}}>7:30 PM</Link></Button>
              <Button style={{margin:"10px"}} color="success" variant="outlined"><Link to="/seat_select" style={{textDecoration:"none",color:"green",fontSize:"17px"}}>10:30 AM</Link></Button>
              <Button style={{margin:"10px"}} color="success" variant="outlined"><Link to="/seat_select" style={{textDecoration:"none",color:"green",fontSize:"17px"}}>4:30 PM</Link></Button>
              <Button style={{margin:"10px"}} color="success" variant="outlined"><Link to="/seat_select" style={{textDecoration:"none",color:"green",fontSize:"17px"}}>10:00 PM</Link></Button>     
        </Typography>
      </CardContent>
    </Card>   
        </div>
    )
}
