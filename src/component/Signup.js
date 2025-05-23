import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export function Signup() {
  const [values, setValues] = React.useState({
    amount: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const history = useHistory()

    const [user,setUser] = useState({
        type:'',
        username:"",  
        name:"",
        email:"",
        phone:"",
        password: ""
    })
    const handleChange = (prop) => (event) => {
      setUser({ ...user, [prop]: event.target.value });
    };
  
   const egister = async(e)=>{
     e.preventDefault()
   try {
    var response = await axios.post("https://book-my-show-backend-rose.vercel.app/auth/register", user )
    console.log(response)
    if(response.data){
      await localStorage.setItem("token",response.data)
      history.push('/')
    }
   }
   catch(err){
       alert("Invalid input") 
   }
  }
  return (
    <div className="signup">
      <Box sx={{ display: 'flex', flexDirection: "column", width: "500px", boxShadow: "1px 2px 3px 0", marginTop: "30px", marginBottom: "50px", borderRadius: "10px" }}>
        <div className="signup-form">
          <h1>SIGN UP</h1>
          <FormControl style={{margin:'10px',width: "350px" }}>
            <InputLabel id="demo-simple-select-label">User Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user.type}
              label="User Type"
              onChange={(e) => setUser({type: e.target.value})}
            >
              <MenuItem value='Admin'>Admin</MenuItem>
              <MenuItem value='User'>User</MenuItem>
            </Select>
          </FormControl>
          <TextField style={{ margin: "10px", width: "350px" }}
            id="outlined-basic" variant="outlined"
            value={user.username} onChange={handleChange('username')}
            label=" Username"
            type="text"
             />
          <TextField style={{ margin: "10px", width: "350px" }}
            id="outlined-basic" variant="outlined"
            value={user.name} onChange={handleChange('name')}
            label=" Name"
            type="text"
            />
          <TextField style={{ margin: "10px", width: "350px" }}
            id="outlined-basic" variant="outlined"
            value={user.email} onChange={handleChange('email')}
            label=" Email"
            type="email"
             />
          <TextField style={{ margin: "10px", width: "350px" }}
            id="outlined-basic" variant="outlined"
            value={user.phone} onChange={handleChange('phone')}
            label=" Phone Number"
            type="number"
             />
           <FormControl sx={{ m: 1, width: '350px' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Create Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={user.password} onChange={handleChange('password')}
              endAdornment={<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}
              label=" Password" />
          </FormControl><br />
          <Button onClick={egister} style={{ width: "250px", height: "50px", border: "none", color: "white", backgroundColor: "orange", marginBottom: "20px" }}>SIGN UP</Button>
        </div>
      </Box>
    </div>
  );
}
