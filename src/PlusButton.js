import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { Link } from 'react-router-dom';
import PrivateEvent from './PrivateEvent';
import PublicEvent from './PublicEvent';




function AddButton(){
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const navstyle ={
      color:'black'
  };
  
  return(
  <div style={{ display: 'flex',
  position: "absolute",
  right: 100,
  bottom: 100,
  }}>
    <Button variant="primary" size="lg" fontSize="large" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
    <AddCircleOutlineRoundedIcon size="large"/>
    </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > <nav>
          <Link to="/PrivateEvent">
            <MenuItem style= {navstyle} onClick={handleClose}>New Private Event</MenuItem>
          </Link>
        <Link to="/PublicEvent">
            <MenuItem style= {navstyle}  onClick={handleClose}>New Public Event</MenuItem>
        </Link>
        </nav>
      </Menu>
     
    </div>
  )
}
export default AddButton;