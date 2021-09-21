import MenuItem from '@material-ui/core/MenuItem';
import { Dropdown } from 'react-bootstrap';
import ReactBootstrap from 'react-bootstrap';
import Avatar from "@material-ui/core/Avatar"; 
import MenuList from '@material-ui/core/MenuList';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


//style for vertical navigationbar
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      padding : 30,
      position: "absolute",
      left: -15,
      top: 150,
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));

  
//function for vertical navigationbar
function MenuListComposition() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const navstyle ={
        color:'black'
    };
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  
    return (
      <><div className={classes.root}>
            <Paper className={classes.paper}>
                <MenuList><nav>
                    <Link to="/MyProfile">
                        <MenuItem style={navstyle}>My Profile</MenuItem>
                    </Link>
                    <Link to="/MyEvent">
                        <MenuItem style={navstyle}>My Events</MenuItem>
                    </Link>
                    <Link to="/ExploreEvent">
                        <MenuItem style={navstyle}>Explore Events</MenuItem>
                    </Link>
                    <Link to="/EventHistory">
                        <MenuItem style={navstyle}>Event History</MenuItem>
                    </Link>
                </nav>
                </MenuList>
            </Paper>

        </div><div style={{
            display: "flex",
            position: "absolute",
            right: 5,
            top: 15,
        }}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <Avatar
                            style={{ border: "1px solid black", margin: 10 }} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>

                        <Dropdown.Item>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div></>
        
    );
  }

export default MenuListComposition;