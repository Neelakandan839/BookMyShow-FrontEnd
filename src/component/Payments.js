import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function Payments() {
  const [value,setValue] = useState(0)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Card sx={{ maxWidth: 600 }} style={{margin:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <CardContent>
          <h1>Payment Details</h1>
          <div style={{display:"flex"}}>
            <div style={{margin:"0 40px"}}>
              <h4>Card Number<span style={{color:'red'}}> *</span></h4>
              <TextField id="outlined-basic" type="number" label=" XXXX XXXX XXXX" variant="outlined" required/>
            </div>
            <div>
              <h4>Postal Code<span style={{color:'red'}}> *</span></h4>
              <TextField type="number"  id="outlined-basic" label=" Pincode" variant="outlined" required/>
            </div>
          </div>
          <div style={{display:"flex"}}>
            <div style={{margin:"0 40px"}}>
              <h4>Expiration Date<span style={{color:'red'}}> *</span></h4>
              <TextField type="text" id="outlined-basic"  label=" MM/YY" variant="outlined" required/>
            </div>
            <div>
              <h4>CVV<span style={{color:'red'}}> *</span></h4>
              <TextField type="number" id="outlined-basic"  label=" CVV" variant="outlined" required/>
            </div>
          </div>
          <div>
            <h4>No of Tickets<span style={{color:'red'}}> *</span></h4>
          <Button onClick={()=>setValue(value - 1)} disabled={value <= 0} variant="contained" style={{margin:"20px"}}>-</Button> {value} <Button  onClick={()=>setValue(value + 1)} disabled={value >= 100} style={{margin:"20px"}} variant="contained">+</Button><br/><br/>
          </div>
          <Button style={{width:"250px",height:"50px"}}
           disabled={value === 0}  
           variant="contained" ><Link  disabled={value === 0 } to="/ticket_confirmed" style={{textDecoration:"none",color:"white"}}>PAY ₹{value * 175}
           </Link></Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function Confirmation(){ 
  return(
<div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"50px"}}>
<img style={{width:"200px",height:"200px"}}  src="https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/success-green-check-mark.png" alt="tick"></img>
<div style={{color:"green",fontSize:"60px",margin:"30px"}}> Ticket Confirmed</div>
</div>
  )
}


          