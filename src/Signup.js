import React from "react";
import { Col, Container, Button, Form, FormGroup, Input, Label, Row } from "reactstrap";
import './App.css';
import UserService from './services/UserService';

class DemoForm extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["Firstname"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Demo Form is submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["Firstname"]) {
        isValid = false;
        errors["Firstname"] = "Please enter your Firstname.";
      }
  
      if (typeof input["Firstname"] !== "undefined") {
        const re = /^\S*$/;
        if(input["Firstname"].length < 6 || !re.test(input["Firstname"])){
            isValid = false;
            errors["Firstname"] = "Please enter valid username.";
        }
      }
      if (!input["Lastname"]) {
        isValid = false;
        errors["Lastname"] = "Please enter your Lastname.";
      }
  
      if (typeof input["Lastname"] !== "undefined") {
        const re = /^\S*$/;
        if(input["Lastname"].length < 6 || !re.test(input["Lastname"])){
            isValid = false;
            errors["Lastname"] = "Please enter valid username.";
        }
      }
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
     
  
      if (typeof input["password"] !== "undefined") {
        if(input["password"].length < 6){
            isValid = false;
            errors["password"] = "Please add at least 6 charachter.";
        }
      }
        
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (<div style={{
      margin: 'auto',
      marginLeft: '500px',
      display: "flex",
         }}>
      <div>
        <form onSubmit={this.handleSubmit}>
  
          <div class="form-group">
            <label for="Firstname">Firstname:</label>
            <input 
              type="text" 
              name="Firstname" 
              value={this.state.input.username}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Firstname" 
              id="Firstname" />
  
              <div className="text-danger">{this.state.errors.username}</div>
          </div>

          <div class="form-group">
            <label for="Lastname">Lastname:</label>
            <input 
              type="text" 
              name="Lastname" 
              value={this.state.input.username}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Firstname" 
              id="Lastname" />
  
              <div className="text-danger">{this.state.errors.username}</div>
          </div>
  
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter email" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
  
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
                      
          <input type="Submit" value="Register" class="btn btn-success" />
          <span>  <a href="http://localhost:3000/login" className="link" style={{fontSize: "1.25rem"}}>Login</a></span>
        </form>
      </div>
      </div>
    );
  }
}
  
export default DemoForm;
