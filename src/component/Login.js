import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export function Login() {
  const [values, setValues] = React.useState({
    type: '',
    email: '',
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
  
   const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      var response = await axios.post('https://bookmyshow-i.herokuapp.com/auth/login', {
        type: values.type,
        email: values.email,
        password: values.password
      })
      console.log(response.data)
      if (response.data) {
        await localStorage.setItem("token", response.data)
        await localStorage.setItem("type", values.type)
        history.push('/Home')
      }
    } catch (err) {
      alert('Invalid Username or Password')
    }
  }
  
  return (
    <div className="signup">
      <Box sx={{ display: 'flex', flexDirection: "column", width: "500px", boxShadow: "1px 2px 3px 0", marginTop: "80px", marginBottom: "50px", borderRadius: "10px" }}>
        <div className="signup-form">
          <h1>LOGIN</h1>
          <FormControl style={{margin:'10px',width: "350px" }}>
            <InputLabel id="demo-simple-select-label">User Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.type}
              label="User Type"
              onChange={(e) => setValues({type: e.target.value })}
            >
              <MenuItem value='Admin'>Admin</MenuItem>
              <MenuItem value='User'>User</MenuItem>
            </Select>
          </FormControl>
          <TextField style={{ margin: "20px", width: "350px" }}
            value={values.email}
            onChange={handleChange('email')}
            id="outlined-basic"
            label=" Email"
            type="email"
          />
          <FormControl sx={{ m: 1, width: '350px' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
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
              label="Password" />
          </FormControl>

          <Button onClick={handleSubmit} style={{ width: "250px", height: "50px", border: "none", color: "white", backgroundColor: "orange", marginBottom: "10px", marginTop: "10px" }}>LOGIN</Button>

          <p>Don't have account ? <Link to="/Signup" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>Sign Up</Link></p>
        </div>
      </Box>
    </div>
  );
}
