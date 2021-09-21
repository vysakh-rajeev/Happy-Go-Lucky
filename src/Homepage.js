import React from "react";
import { Col, Container, Button, Form, FormGroup, Input, Label, Row } from "reactstrap";
import './App.css';
import UserService from './services/UserService';
import img1 from'../src/image.jpg';
// import img2 from'../src/images/image1.jpg';
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends React.Component{
    
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password:'',
            emailError:'',
            passwordError:'',
            users: [],
            events: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        UserService.getUsers().then(res=>{
            this.setState({ users: res.data });            
        });

        UserService.getEvents().then(res=>{
            this.setState({ events: res.data });

            //console.log(this.state.events);
            //console.log(this.state.events[1].eventName, this.state.events[0].eventDate, this.state.events[0].eventTime, this.state.events[1].eventVenue);

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
        this.props.history.push(`/Menulist`);
        
        
    }

    render(){
        
        return(
            <div className="aligns">
                
               

                <Container style={{marginTop: "2em"}}>
                <Form onSubmit={this.handleSubmit} >
                        <FormGroup>
                            <Row style={{justifyContent:"center", padding:"1em"}}>
                                <Col sm="3">
                                    <Label for="email">Email</Label>
                                    <Input type="text" name="email" id="email" name={"email"} onChange={this.handleChange} value={this.state.email} />
                                    <div style={{color:"red"}}>{this.state.emailError}</div>
                                </Col>
                                <Col sm="3">
                                    <Label for="password">Password</Label>
                                    <Input type="text" name="password" id="password" name={"password"} onChange={this.handleChange} value={this.state.password} />
                                    <div style={{color:"red"}}>{this.state.passwordError}</div>
                                </Col>
                                <Col sm="2">
                                    <Button style={{ display : "flex",justifyContent: "absolute", marginTop:27}} >Login</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </Container>

                <br></br>
                <p style={{fontSize: "2rem"}}>Check out the following public events happening around you!</p>
                <p style={{fontSize: "2rem"}}>Login to view more! <a href="http://localhost:3000/sign-up" className="link" style={{fontSize: "1.5rem"}}> Or Sign Up here</a></p>
                <div className='card text-center'>
                <div className='overflow'>
                    <img src={img1} alt="Image 1" className='card-img-top' />
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">100m Race</h4>
                    <p className="card-text text-secondary">
                        Venue: Abhi's house
                    </p>
                    <p>Time:5:30pm Date:01/11/2021</p>
                </div>
            </div>
                
            </div>
        ); 
    }
}