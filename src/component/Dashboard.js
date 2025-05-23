import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Switch,Route } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const buttons = [
    <Button style={{height:'60px'}} ><Link style={{textDecoration:'none',color:'white'}} to='/Dashboard'>Movie</Link></Button>,
    <Button style={{height:'60px'}} ><Link style={{textDecoration:'none',color:'white'}} to='/Dashboard/theatre'>Theatre</Link></Button>,
    <Button style={{height:'60px'}} ><Link style={{textDecoration:'none',color:'white'}} to='/Dashboard/bookings'>Bookings</Link></Button>,
    <Button style={{height:'60px'}} ><Link style={{textDecoration:'none',color:'white'}} to='/Dashboard/contacts'>contacts</Link></Button>,
    <Button style={{height:'345px'}} ></Button>
  ];

export default function Dashboard(){
    return(
        <div style={{marginTop:'20px'}}>
             <Box sx={{ display: 'flex' }}>
              <CssBaseline />
        <Drawer 
        variant="permanent"
        sx={{
          width: 200,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box' },
        }}
      >
        <Box  sx={{ overflow: 'auto' }}>
          <List>
          <ButtonGroup style={{marginTop:'63px',width:'199px'}}
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>     
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography component="div" sx={{ flexGrow: 1 }}>
           <Switch>
               <Route exact path='/Dashboard'><Movie/></Route>
               <Route exact path='/Dashboard/theatre'><Theatre/></Route>
               <Route exact path='/Dashboard/bookings'><Bookings/></Route>
               <Route exact path='/Dashboard/contacts'><Contacts/></Route>
           </Switch>
        </Typography>
        </Box>
      </Box>
      </div>
    )
}

function Movie(){
  const [values, setValues] = React.useState({
    name: '',
    pic: '',
    certificate: '',
    language: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      var response = await axios.post('https://book-my-show-backend-rose.vercel.app/movie/savemovie', {
        name: values.name,
        pic: values.pic,
        certificate: values.certificate,
        language: values.language
      })
      console.log(response.data)
      alert(' Movie Successfully Added')
    } catch (err) {
      alert('Invalid Input')
    }
  }
  
    return(
       <div className='movie-input'>
         <h1>ADD MOVIE</h1>
       <TextField style={{ margin: "20px", width: "350px" }}
            value={values.name}
            onChange={handleChange('name')}
            id="outlined-basic"
            label=" Movie Name"
            type="text"
          />
           <TextField style={{ margin: "20px", width: "350px" }}
            value={values.pic}
            onChange={handleChange('pic')}
            id="outlined-basic"
            label=" Movie Pic URL"
            type="text"
          />
           <TextField style={{ margin: "20px", width: "350px" }}
            value={values.certificate}
            onChange={handleChange('certificate')}
            id="outlined-basic"
            label=" Cerificate e.g(UA)"
            type="text"
          />
           <TextField style={{ margin: "20px", width: "350px" }}
            value={values.language}
            onChange={handleChange('language')}
            id="outlined-basic"
            label=" Languages"
            type="text"
          />
           <Button variant="contained" onClick={handleSubmit} style={{ width: "250px", height: "50px", border: "none", color: "white", marginBottom: "10px", marginTop: "10px" }}>ADD MOVIE</Button>
       </div>
    )
}

function Theatre(){
  const [values, setValues] = React.useState({
    name: '',
    address: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      var response = await axios.post('https://book-my-show-backend-rose.vercel.app/theatre/savetheatre', {
        name: values.name,
        address: values.address
      })
      console.log(response.data)
      alert(' Theatre Successfully Added')
    } catch (err) {
      alert('Invalid Input')
    }
  }
    return(
       <div className='theatre-input'>
         <h1>ADD THEATRE</h1>
       <TextField style={{ margin: "20px", width: "350px" }}
            value={values.name}
            onChange={handleChange('name')}
            id="outlined-basic"
            label=" Theatre Name"
            type="text"
          />
           <TextField style={{ margin: "20px", width: "350px" }}
            value={values.address}
            onChange={handleChange('address')}
            id="outlined-basic"
            label=" Theatre Address"
            type="text"
          />
           <Button variant="contained" onClick={handleSubmit} style={{ width: "250px", height: "50px", border: "none", color: "white", marginBottom: "10px", marginTop: "10px" }}>ADD THEATRE</Button>
       </div>
    )
}

function Bookings(){
    return(
       <div>
      <h1>BOOKINGS</h1>
       </div>
    )
}

function Contacts(){
  const [contactList,setContactList] = React.useState([])
  //eslint-disable-next-line
  useEffect(async ()=>{
      const response = await axios.get('https://book-my-show-backend-rose.vercel.app/contact/getcontact');
      setContactList(response.data);
    },[])
    return(
       <div>
         <h1>CONTACTS</h1>
         {contactList.map((contact)=>(
         <Card style={{margin:'10px'}} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography style={{fontWeight:'bold',color:'tomato'}} variant="h5" component="div">
          {contact.name}
        </Typography>
        <Typography variant="p" component="div">
          {contact.message}
        </Typography>
      </CardContent>
    </Card>
         ))}
       </div>
    )
}
