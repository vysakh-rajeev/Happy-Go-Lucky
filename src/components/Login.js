import React from "react";
import { Col, Container, Button, Form, FormGroup, Input, Label, Row } from "reactstrap";
import UserService from '../services/UserService';

export default class Login extends React.Component{
    
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password:'',
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
        let emailError = "";        
        let passwordError = "";
                
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
        
        if(emailError || passwordError){
            this.setState({emailError, passwordError});
            return false;
        }

        return true;
    };

    validate2 = () => {
        
        let emailError = this.state.emailError;        
        let passwordError = this.state.passwordError;

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

        if(emailError || passwordError){
            this.setState({emailError, passwordError});
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
                
                if(this.state.email===user.emailId)
                {
                    flag=1;
                    if(this.state.password===user.password)
                    {
                        flag=2;
                        let id = user.id;
                        alert("Login Successful of user with id = "+id)
                        this.props.history.push(`/my-profile/${id}`);
                    }
                }
            });
            
            if(flag==0)
            {                
                alert("No user exists with the email ID. Register below.");                
            }
            if(flag==1)
            {
                alert("Wrong password entered. Re-enter password below.")
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
                                <Label for="email">Email</Label>
                                <Input type="text" name="email" id="email" name={"email"} onChange={this.handleChange} value={this.state.email} />
                                <div style={{color:"red"}}>{this.state.emailError}</div>
                            </Col></Row>
                            <Row  style={{justifyContent:"center", padding:"1em"}}>
                            <Col sm="3" >
                                <Label for="password">Password</Label>
                                <Input type="text" name="password" id="password" name={"password"} onChange={this.handleChange} value={this.state.password} />
                                <div style={{color:"red"}}>{this.state.passwordError}</div>
                            </Col></Row>
                            
                            <Row style={{justifyContent:"center", padding:"1em"}}>
                                <Col sm="3" >
                                    <Button>Login</Button>
                                </Col>
                            </Row>
                            <Row style={{justifyContent:"center"}}>
                                <Col sm="3" >
                                    <a href="http://localhost:3000/sign-up" className="link" style={{fontSize: "1.25rem"}}>Register</a>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </Container>


               
                </div>
        ); 
    }
}