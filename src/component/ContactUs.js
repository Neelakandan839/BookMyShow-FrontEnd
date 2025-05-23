import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from 'axios';

export function ContactUs() {
  const [user,setUser] = React.useState({ 
    name:'',
    email:'',
    message:''
})
const handleChange = (prop) => (event) => {
  setUser({ ...user, [prop]: event.target.value });
};

const submit = async(e)=>{
 e.preventDefault()
try {
var response = await axios.post("https://book-my-show-backend-rose.vercel.app/contact/savecontact", user )
console.log(response)
alert('Successfully send')
}
catch(err){
   alert("Invalid input") 
   console.log(user.name)
   console.log(user.email)
   console.log(user.message)
}
}
  return (
    <div className="contact_us">
      <h1 style={{ fontSize: "50px", marginBottom: "0" }}>CONTACT</h1>
      <h4 style={{ fontSize: "30px", marginBottom: "0", marginTop: "15px" }}>We'd <span style={{color:'red'}}>❤️</span> to help!</h4>
      <h6 style={{ fontSize: "15px", marginBottom: "0", marginTop: "15px" }}>We like to create things with fun, Open-minded people, Feel free to say hello!</h6>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", margin: "50px", alignItems: "center", background: "skyblue", width: "450px", borderRadius: "10px" }}>
          <TextField value={user.name} onChange={handleChange('name')} style={{ margin: "15px", width: "300px", background: "white", marginTop: "40px" }} id="outlined-basic" label="Your Name" variant="outlined" />
          <TextField value={user.email} onChange={handleChange('email')} style={{ margin: "15px", width: "300px", background: "white" }} id="outlined-basic" label="Email" variant="outlined" />
          <TextareaAutosize
          value={user.message} onChange={handleChange('message')}
            aria-label="minimum height"
            minRows={10}
            placeholder="  Message"
            style={{ width: 300, margin: "15px" }} /><br />
          <Button onClick={submit} style={{ margin: "15px", width: "150px", background: "black" }} variant="contained">SEND</Button>
        </div>
        <div style={{ margin: "50px", alignItems: "center" }}>
          <div>
            <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
            <h4>BOOK MY SHOW, Columbia, SC</h4><br /> 
          </div>
          <div>
            <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
            <h4>(617)312-2190</h4>
          </div>
          <div>
            <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
            <h4>Dommy@BookMyShow.com</h4>
          </div>

          <hr />
          <div>
            <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            <i className="fa fa-google-plus fa-2x" aria-hidden="true"></i>
          </div>
          <h3>BookMyShow on Thumbtack</h3>
        </div>
      </div>
    </div>
  )
}
 
