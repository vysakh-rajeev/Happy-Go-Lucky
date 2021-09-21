import React from 'react';
import { useState } from "react";
import {Component} from "react";
import "./App.css";
import "./Tab.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { tabsClasses } from '@mui/material';


function Tabs() {
  
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <><div><h3>Create New Public Event</h3></div><div className="container">
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
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {/*// <h2>Content 1</h2>
     <hr />
     <p>
       hi
    </p> // */}

          <Box component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, width: '20ch' },
            }}
            noValidate
            autoComplete="off">
            <div>
              <TextField
                required
                id="outlined-required"
                label="Event Name" />

              <TextField
                required
                id="outlined-required"
                label="Category" />
              <TextField
                required
                id="outlined-required"
                label="Date" />
              <TextField
                required
                id="outlined-required"
                label="Time" />


            </div>
          </Box>


        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            sugam
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            alle?
          </p>
        </div>
      </div>
    </div></>
  );
}

export default Tabs;