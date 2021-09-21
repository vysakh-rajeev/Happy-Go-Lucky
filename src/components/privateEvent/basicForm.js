import React from "react"
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const BasicForm = props => {
    const [eventName, setEventName] = React.useState(0);
    const handleChange = (event) => { 
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
    
        switch(name) {
            case 'eventName': setEventName(value); break;
        }
      };

     const submitForm= (event) => { 
        event.preventDefault();
    props.goToTab(1)    
        console.log(eventName);
      }
    
  return (
    <Form className="form" onSubmit={(e) =>submitForm(e)}>
    
      <FormGroup>
        <Label for="Event Name">Event Name</Label>
        <Input type="Event Name" name="eventName" id="eventName" onChange={(e) => {
                handleChange(e);
              }} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Category</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>EVENT 1</option>
          <option>EVENT 2</option>
          <option>EVENT 3</option>
          <option>EVENT 4</option>
          <option>EVENT 5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="Date">Date</Label>
        <Input type="Date" name="Date" id="Date" />
      </FormGroup>
      <FormGroup>
        <Label for="Time">Time</Label>
        <Input type="Time" name="Time" id="Time" />
      </FormGroup>
      <FormGroup>
        <Label for="Venue">Venue</Label>
        <Input type="Venue" name="Venue" id="Venue"  />
      </FormGroup>
      <FormGroup>
        <Label for="Number">Number of Guests</Label>
        <Input type="Number" name="Number" id="Number"  min="0" max="100"/>
      </FormGroup>
      
           
      <Button>Save & Proceed</Button>
    </Form>


  )

}
export default BasicForm;
