import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';

export function ContactDetails() {
  const [values, setValues] = React.useState({
    name:'',
    email: '',
    phone: ''
  });

    var templateParams = {
      name: values.name,
      email: values.email
  };
  
  emailjs.send('service_sycfbjg','template_1rh55dq', templateParams,'user_RDFYHidLV8wl1MnOcyVwn')
    .then((response)=> {
       console.log('SUCCESS!', response.status, response.text);
    }, (err)=> {
       console.log('FAILED...', err);
    });
  
  return (
    <div className="signup">
      <Box sx={{ display: 'flex', flexDirection: "column", width: "500px", boxShadow: "1px 2px 3px 0", marginTop: "80px", marginBottom: "50px", borderRadius: "10px" }}>
        <div className="signup-form">
          <h1>Contact Details</h1>
          <TextField style={{ margin: "20px", width: "350px" }}
          className='name'
            value={values.name}
            onChange={(e) => setValues({ name: e.target.value })}
            id="outlined-basic"
            label=" Name"
            type="text" />
          <TextField style={{ margin: "20px", width: "350px" }}
            value={values.email}
            className='email'
            onChange={(e) => setValues({ email: e.target.value })}
            id="outlined-basic"
            label=" Email"
            type="email" />
          <TextField style={{ margin: "20px", width: "350px" }}
            value={values.phone} 
            onChange={(e) => setValues({ phone: e.target.value })}
            id="outlined-basic"
            className='phone'
            label=" Phone Number"
            type="number" />
          <Button style={{ width: "250px", height: "50px", border: "none", color: "white", backgroundColor: "orange", marginBottom: "10px", marginTop: "10px" }}><Link to='/payment' style={{ textDecoration: 'none', color: 'white' }}>Submit</Link></Button>
        </div>
      </Box>
    </div>
  );
}





