//import './App.css';
import { RiEditBoxFill } from "react-icons/ri";
import React, { useState, useRef, useEffect } from 'react';

function MyProfile() {

  const [ firstname, setFirstname] = useState("Vijay")
  const [ lastname, setLastname] = useState("Gopal")
  const [ email, setEmail] = useState("vijay.gopal@people10.com")
  const [password, setPassword] = useState("People10@123")
  const [ newFirstName, setNewFirstName] =useState("")
  const [ newLastName, setNewLastName] =useState("")
  const [ newEmail, setNewEmail] =useState("")
  const [ newPassword, setNewPassword] =useState("")

  const submit = useRef(null);
  useEffect(() => {
    submit.current.style.display = 'none';
    
  }, []);

   function changefname()  {
    setFirstname(prevFirstname =>  <input type = "text" defaultValue = {firstname} onChange={updateFirstName}/>)
    submit.current.style.display = 'block';
    
    
  }

  function changelname(){
    setLastname(prevLirstname =>  <input type = "text" defaultValue = {lastname} onChange={updateLastName}/>)
    submit.current.style.display = 'block';
    
  }
  function changeemail(){
    setEmail(prevEmail =>  <input type = "text" defaultValue = {email} onChange={updateEmail}/>)
    submit.current.style.display = 'block';    
  }

  function changepassword(){
    setPassword(prevPassword =>  <input type = "text" defaultValue = {password} onChange={updatePassword}/>)
  }

  function updatevalue() {
    setFirstname(newFirstName)
    setLastname(newLastName)
    setEmail(newEmail)
    setPassword(newPassword)


    submit.current.style.display = 'none';
  }

  function updateFirstName(e){
    setNewFirstName(e.target.value)
  }
  
  function updateLastName(e){
    setNewLastName(e.target.value)
  }

  function updateEmail(e){
    setNewEmail(e.target.value)
  }

  function updatePassword(e){
    setNewPassword(e.target.value)
  }


  return (
    <div>
        <h3>My Profile </h3> 
        <button onClick={() => { changefname(); changelname();changeemail();changepassword();}}><RiEditBoxFill/></button>      
        {/* <button onClick = {changefname,changelname }><RiEditBoxFill/></button> */}
        <div class="row">
          <div class="col">First Name: {firstname} </div>
          <div class="col">Last Name:{lastname}</div>
          <div class="w-100"></div>
          <div class="col">Email:{email}</div>
          <div class="col">Password:{password}</div>              
      </div>
      <center ><input ref={submit} type="button" value="Update" onClick = {updatevalue}/></center>

    </div>
  );
}

export default MyProfile;












