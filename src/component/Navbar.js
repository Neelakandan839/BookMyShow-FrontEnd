import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import {Login} from './Login';
import { Home } from './Home';
import { Signup } from './Signup';
import { Movies } from './Movies';
import { Theatres } from './Theatres';
import { Seats } from './Seats';
import { Events } from './Events';
import { ContactUs } from './ContactUs';
import {Footer} from './Footer';
import { Payments } from './Payments';
import {Confirmation} from './Payments';
import { ContactDetails } from './ContactDetails';
import {userType} from './isAuth';
import Dashboard from './Dashboard';

export function Navbar() {
  return (
    <div className="homepage"><div className="navbar">
      <BackToTop />
    </div>
      <div style={{ marginTop: "0" }} className="route">
        <Switch>
          <Route exact path="/Home"><Home /><Footer/></Route>
          <Route exact path="/Movies"><Movies /><Footer/></Route>
          <Route exact path="/book"><Theatres/><Footer/></Route>
          <Route exact path="/Events"><Events/></Route>
          <Route exact path="/payment"><Payments/><Footer/></Route>
          <Route exact path="/contact_us"><ContactUs/><Footer/></Route>
          <Route exact path="/seat_select"><Seats /><Footer/></Route>
          <Route exact path="/Signup"><Signup /></Route>
          <Route  path='/Dashboard'><Dashboard /></Route>
          <Route exact path="/"><Login /></Route>
          <Route exact path="/contact_details"><ContactDetails /><Footer/></Route>
          <Route exact path="/ticket_confirmed"><Confirmation/><Footer/></Route>
        </Switch>
      </div>
      </div>
  );
}

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
  <>  {userType() == "Admin" ? ( <ClippedDrawer/>):(
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography style={{fontSize:'45px',fontWeight:'bold'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BOOK<span style={{color:'red'}}>MY</span>SHOW
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <ButtonGroup style={{ height: "70px" }} variant="contained" aria-label="outlined primary button group">
              <Button style={{ width: "150px", border: "none" }}><Button color="inherit"><Link to="/Home" style={{ textDecoration: "none", color: "white" }}>HOME</Link></Button></Button>
              <Button style={{ width: "150px", border: "none" }}><Button color="inherit"><Link to="/Movies" style={{ textDecoration: "none", color: "white" }}>MOVIES</Link></Button></Button>
              <Button style={{ width: "150px", border: "none" }}><Button color="inherit"><Link to="/Events" style={{ textDecoration: "none", color: "white" }}>EVENTS</Link></Button></Button>
              <Button style={{ width: "150px", border: "none" }}><Button color="inherit"><Link to="/contact_us" style={{ textDecoration: "none", color: "white" }}>CONTACT US</Link></Button></Button>
            </ButtonGroup>
          </Typography>
          <Button color="inherit"><Link to="/" style={{ textDecoration: "none", color: "white" }}>LOGOUT</Link></Button>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
    )}
    </>
  );
}

 function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography style={{fontSize:'45px',fontWeight:'bold'}} variant="h6" noWrap component="div">
          BOOK<span style={{color:'red'}}>MY</span>SHOW
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <ButtonGroup style={{ height: "70px" }} variant="contained" aria-label="outlined primary button group">
              <Button style={{ width: "150px", border: "none" }}><Button color="inherit"><Link to="/Dashboard" style={{ textDecoration: "none", color: "white" }}>DASHBOARD</Link></Button></Button>
              <Button style={{ width: "150px", border: "none" }}><Button color="inherit"><Link to="/Home" style={{ textDecoration: "none", color: "white" }}>HOME</Link></Button></Button>
              </ButtonGroup>
              </Typography>
          <Button color="inherit"><Link to="/" style={{ textDecoration: "none", color: "white" }}>LOGOUT</Link></Button>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      </Box>
    </Box>
  );
}


