// import logo from './logo.svg';
// import './App.css';
// import Tabs from 'react-bootstrap/Tabs'

// function PrivateEvent() {
//   return (
//     <div>
//         <h3>Create New Private Event</h3>
    
//      </div>
//   );
// }

// export default PrivateEvent;
import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { TabPanel } from '@mui/lab';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import BasicForm from "./components/privateEvent/basicForm";
import GuestsForm from "./components/privateEvent/guestsForm";




 

const App = () => {
  

  
const [value, setValue] = React.useState(0);
const goToTab = index => {
  setValue(index);
}
const renderTabContent = index => {
  switch(index) {
      case 0: return <BasicForm goToTab={goToTab} />; break;
      case 1: return <GuestsForm />; break;
      default: return <></>; break;
  }
}



return (
  <div><h3><center>Create  Private Event</center></h3>
 
	<div
      style={{
        marginLeft: "10%",
      }}

    > 
		<Paper >
		<Tabs
		value={value}
		textColor="primary"
		indicatorColor="primary"
		onChange={(event, newValue) => {
			//setValue(newValue);
		}}
		>
		<Tab label="Basic" />
		<Tab label="Guests" />
		<Tab label="Image"  disabled/>
		<Tab label="Confirm" disabled/>
		</Tabs>
    {
      renderTabContent(value)
    }
	</Paper>
  
 


  </div>

	 </div>



    

)}



export default App;
