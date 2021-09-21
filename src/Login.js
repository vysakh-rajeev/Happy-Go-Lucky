
import { Component } from 'react';
import {
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
} from 'reactstrap';
import '../App.css';

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validate: {
        emailState: '',
        passwordState: ''
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  validateEmail(e) {
    const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const { validate } = this.state;

    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success';
    } else {
      validate.emailState = 'has-danger';
    }

    this.setState({ validate });
  }

  submitForm(e) {
    e.preventDefault();
    
    console.log(`Email: ${this.state.email}`);
  }

  validatePassword(e){
    
    const { validate } = this.state;
    console.log(validate);
    if(e.target.value.length>=8) {
      validate.passwordState = 'has-success';
    } else {
      validate.passwordState = 'has-danger';
    }
    console.log(validate);
    this.setState({ validate });
  }
  

  render() {
    const { email, password } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <h2>Event Login</h2>
        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@example.com"
              valid={this.state.validate.emailState === "has-success"}
              invalid={this.state.validate.emailState === "has-danger"}
              value={email}
              onChange={(e) => {
                this.validateEmail(e);
                this.handleChange(e);
              }}
            />
            <FormFeedback>
              Uh oh! Looks like there is an issue with your email. Please input
              a correct email.
            </FormFeedback>
            <FormFeedback valid>
              Looks Cool!!
            </FormFeedback>
            <FormText>Username Should be your email.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password"
              valid={this.state.validate.passwordState === "has-success"}
              invalid={this.state.validate.passwordState === "has-danger"}
              
              value={password}
              onChange={(e) => {
                this.validatePassword(e);
                this.handleChange(e)}}
            />
          </FormGroup>
          <Button disabled={!this.state.email||!this.state.password}>Submit</Button>
          <span>  <a href="http://localhost:3000/signup" className="link" style={{fontSize: "1.25rem"}}>Register</a></span>

        </Form>
      </div>
    );
  }
}
