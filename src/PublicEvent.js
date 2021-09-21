import React from 'react';
import { useState } from "react";
import {Component} from "react";
import "./App.css";
import "./tabs.css";
import Box from '@mui/material/Box';//import for box
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import Button from '@mui/material/Button'; //import for save and proceed button
import Stack from '@mui/material/Stack'; 

import { styled } from '@mui/material/styles'; //import for image tab
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';



const Input = styled('input')({
  display: 'none',
}); //const for image tab


function PublicTabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
  <div className="container">
    <h3><center>Create  Public Event</center></h3>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Basic
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Image
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Confirm
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
          <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '24ch' },}}
               noValidate
              autoComplete="off">
            <div>
            <TextField
              required
              id="outlined-required"
              label="Event Name"
             />  
            <TextField
              required
              id="outlined-required"
              label="Category"
            />  
            <TextField
              required
              id="outlined-required"
              type = "Date"
           />  
            
            <TextField
              required
              id="outlined-required"
              type = "Time"
            />  
            <TextField
              required
              id="outlined-required"
              label="Venue"
            />  
            <TextField
              required
              id="outlined-required"
              label="No of participants"
              min="1" max="100"
            /> 
            
            <Stack direction="row" spacing={2}
              style = {{ display : "flex",justifyContent: "center",
              alignItems: "center"}}>
              <Button variant="contained" onClick={() => toggleTab(2)}>Save and proceed</Button>
              
            </Stack>

            

            </div> 
          </Box>
      </div>

      <div 
        className={toggleState === 2 ? "content  active-content" : "content"}>
        <Box  component="form" sx={{'& .MuiTextField-root': { m: 1, width: '24ch' },}}
            noValidate
            autoComplete="off">
          <div>
            <Stack direction="row" alignItems="center" spacing={2}
            style = {{ display : "flex",justifyContent: "center",
            alignItems: "center"}}>
              <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                   Browse
                </Button>
             </label>
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
                </IconButton>
              </label>
              <Button variant="contained" onClick={() => toggleTab(3)}>Save and proceed </Button>
            </Stack>
         
         
          </div> 

        </Box>

      </div>

      <div
        className={toggleState === 3 ? "content  active-content" : "content"}>
        <Box  component="form" sx={{'& .MuiTextField-root': { m: 1, width: '24ch' },}}
          noValidate
          autoComplete="off">
          <div>
          <TextField
            required
            id="outlined-required"
            label="Event Name"
            //defaultValue="Hello World"
          />  

         <TextField
           required
           id="outlined-required"
           label="Category"
          />  
         
          
         </div> 
       </Box>

      </div>

    </div>

  </div>
  );
}










export default PublicTabs;