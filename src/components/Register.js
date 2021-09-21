import React from "react";
import { Col, Container, Button, Form, FormGroup, Input, Label, Row } from "reactstrap";
import '../App.css';
import UserService from '../services/UserService';

const intialState = {
    fName:'',
    lName:'',
    email:'',
    password:'',
    fNameError:'',
    lNameError:'',
    emailError:'',
    passwordError:''
};

export default class Register extends React.Component{
    
    constructor(props) {
        super(props)

        this.state = {
            fName:'',
            lName:'',
            email:'',
            password:'',
            fNameError:'',
            lNameError:'',
            emailError:'',
            passwordError:'',
            users: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        UserService.getUsers().then(res=>{
            this.setState({ users: res.data });
        });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
        this.validate();
    }

    validate = () => {
        let fNameError = "";
        let lNameError = "";
        let emailError = "";        
        let passwordError = "";
                

        if(this.state.fName)
        {
            if(this.state.fName.length > 15 || this.state.fName.length < 3)
            {
                fNameError="Name Length: 3-15 characters";
                document.getElementById("firstName").setAttribute('style','border-color:red; border-width:3.5px;');
            }
            else
            {
                this.setState({fNameError:''});              
                document.getElementById("firstName").setAttribute('style','border-color:lightgray; border-width:0.5px;');
            }
        }

        if(this.state.lName)
        {
            if (this.state.lName.length > 15 || this.state.lName.length < 3)
            {
                lNameError="Name Length: 3-15 characters";
                document.getElementById("lastName").setAttribute('style','border-color:red; border-width:3.5px;');
            }
            else
            {
                this.setState({lNameError:''});
                document.getElementById("lastName").setAttribute('style','border-color:lightgray; border-width:0.5px;');
            }
        }

        if(this.state.email)
        {
            var emailFormat = new RegExp(/^[^0-9\ \-\_\.\<\>\(\)\[\]\;\:\,\~\!\#\$\%\^\&\*\?\,\`\\]+[a-zA-Z0-9\.\-\_]+@[a-zA-Z0-9\.\-\_]+\.[A-Za-z]+$/);
            
            if (!emailFormat.test(this.state.email)) 
            {
                emailError="Wrong Mail format";
                document.getElementById("email").setAttribute('style','border-color:red; border-width:3.5px;');
            }
            else
            {
                this.setState({emailError:''});
                document.getElementById("email").setAttribute('style','border-color:lightgray; border-width:0.5px;');
            }
        }

        if(this.state.password)
        {
            var symbols = new RegExp(/[^A-Z a-z0-9]/);
            var caps = new RegExp(/[A-Z]/);

            if(this.state.password.length > 15 || this.state.password.length < 8)
            {
                passwordError="Password Length: 8-15 characters";
                document.getElementById("password").setAttribute('style','border-color:red; border-width:3.5px;');
            }
            else if(!symbols.test(this.state.password))
            {
                passwordError="Enter at least 1 Special Character";
                document.getElementById("password").setAttribute('style','border-color:red; border-width:3.5px;');
            }
            else if(!caps.test(this.state.password))
            {
                passwordError="Enter at least 1 Capital Letter";
                document.getElementById("password").setAttribute('style','border-color:red; border-width:3.5px;');
            }
            else
            {
                this.setState({passwordError:''});
                document.getElementById("password").setAttribute('style','border-color:lightgray; border-width:0.5px;');
            }
        }
        
        if(emailError || fNameError || lNameError || passwordError){
            this.setState({emailError, fNameError, lNameError, passwordError});
            return false;
        }

        return true;
    };

    validate2 = () => {
        
        let fNameError = this.state.fNameError;
        let lNameError = this.state.lNameError;
        let emailError = this.state.emailError;        
        let passwordError = this.state.passwordError;

        if(this.state.fName=='' || this.state.fName==null)
        {
            fNameError="Cannot be blank";
            document.getElementById("firstName").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        if(this.state.lName=='' || this.state.lName==null)
        {
            lNameError="Cannot be blank";
            document.getElementById("lastName").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        if(this.state.email=='' || this.state.email==null)
        {
            emailError="Cannot be blank";
            document.getElementById("email").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        if(this.state.password=='' || this.state.password==null)
        {
            passwordError="Cannot be blank";
            document.getElementById("password").setAttribute('style','border-color:red; border-width:3.5px;');
        }

        if(emailError || fNameError || lNameError || passwordError){
            this.setState({emailError, fNameError, lNameError, passwordError});
            return false;
        }

        return true;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        const isValid2 = this.validate2();
        if(isValid && isValid2)
        {   
            let flag=0;

            this.state.users.map( user=>{
                
                if(this.state.fName===user.firstName && this.state.lName===user.lastName && this.state.email===user.emailId)
                {
                    alert("User already exists. Login below.");
                    flag=1;
                }
                if(this.state.email===user.emailId)
                {
                    alert("The entered email ID already exists.");
                    flag=1;
                }
            });
            
            if(flag==0)
            {                
                let user = {firstName: this.state.fName, lastName: this.state.lName, emailId: this.state.email, password: this.state.password};

                UserService.addUser(user).then(res => {
                    this.props.history.push('/my-events');
                });
            }
        }
    }

    render(){
        
        return(
            <div className="aligns">
                
                <h1 style={{fontSize: "3rem"}}>Happy Go Lucky</h1>

                <Container style={{marginTop: "5em"}}>
                    <Form onSubmit={this.handleSubmit} >
                        <FormGroup>
                            <Row style={{justifyContent:"center", padding:"1em"}}>
                            <Col sm="3" >
                                <Label for="firstName">First Name</Label>
                                <Input type="text" name="fName" id="firstName" name={"fName"} onChange={this.handleChange} value={this.state.fName} />
                                <div style={{color:"red"}}>{this.state.fNameError}</div>
                            </Col>
                            <Col sm="3" >
                                <Label for="lastName">Last Name</Label>
                                <Input type="text" name="lName" id="lastName" name={"lName"} onChange={this.handleChange} value={this.state.lName} />
                                <div style={{color:"red"}}>{this.state.lNameError}</div>
                            </Col>
                            </Row>
                            <Row style={{justifyContent:"center", padding:"1em"}}>
                            <Col sm="3" >
                                <Label for="email">Email</Label>
                                <Input type="text" name="email" id="email" name={"email"} onChange={this.handleChange} value={this.state.email} />
                                <div style={{color:"red"}}>{this.state.emailError}</div>
                            </Col>
                            <Col sm="3" >
                                <Label for="password">Password</Label>
                                <Input type="text" name="password" id="password" name={"password"} onChange={this.handleChange} value={this.state.password} />
                                <div style={{color:"red"}}>{this.state.passwordError}</div>
                            </Col>
                            </Row>
                            <Row style={{justifyContent:"center", padding:"1em"}}>
                                <Col sm="3" >
                                    <Button>Register</Button>
                                </Col>
                            </Row>
                            <Row style={{justifyContent:"center"}}>
                                <Col sm="3" >
                                    <a href="http://localhost:3000/login" className="link" style={{fontSize: "1.25rem"}}>Login</a>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </Container>


               
                </div>
        ); 
    }
}