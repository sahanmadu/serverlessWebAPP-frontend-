
import React, { useState } from 'react';
import axios from 'axios';


const signupUrl = 'https://uy2hzefdoe.execute-api.us-east-1.amazonaws.com/prod/register';

export default function Signup() {


    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [pnumber, setPnumber] = useState('');
    
    const [message, setMessage] = useState(null);
  
    const sendData = (event) => {
      event.preventDefault();
      if (username.trim() === '' || email.trim() === '' || fname.trim() === '' || lname.trim() === '' || password.trim() === '' || cpassword.trim() === ''
      || dob.trim() === '' || country.trim() === '' || state.trim() === '' || pnumber.trim() === '') {
        setMessage('All fields are required');
        return;
      }
      setMessage(null);
      const requestConfig = {
        headers: {
          'x-api-key': 'xsbsfCjt5P4KPGZtIaUqw6uUer0o3sSUpy5xfv5i'
        }
      }
      const requestBody = {
       fname:fname,
       lname:lname,
       username:username,
       password:password,
       cpassword:cpassword,
       dob:dob,
       email:email,
       country:country,
       state:state,
       pnumber:pnumber
      }
      axios.post(signupUrl, requestBody, requestConfig).then(response => {
        setMessage('Registeration Successful');
      }).catch(error => {
        if (error.response.status === 401) {
          setMessage(error.response.data.message);
        } else {
          setMessage('An error occured!');
        }
      })
    }
    
    return (
                        <div className="container" style={{height:"200px", width:"600px"}}>
                        <form onSubmit={sendData}>
                <div className="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>{
                                setFname(e.target.value);
                    }} value={fname} placeholder="ex- jon "/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Last Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                                setLname(e.target.value);
                    }} value={lname}  placeholder="ex-  doe"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Username</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                                setUsername(e.target.value);
                    }} value={username}  placeholder="ex- jon123"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                                setPassword(e.target.value);
                    }} value={password}  placeholder="enter your password"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Confirm Passwotd</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                                setCpassword(e.target.value);
                    }} value={cpassword}  placeholder="Re-type your password"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">DOB</label>
                    <input type="date" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                                setDob(e.target.value);
                    }} value={dob}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                                setEmail(e.target.value);
                    }} value={email}  placeholder="ex- jondoe@gmail.com"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Country</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                                setCountry(e.target.value);
                    }} value={country}  placeholder="ex- Sri Lanka"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">State</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                                setState(e.target.value);
                    }} value={state}  placeholder="ex- western province"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Phone number</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                                setPnumber(e.target.value);
                    }} value={pnumber}  placeholder="ex- 0713456789"/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                </form>
                {message && <p className="message">{message}</p>}
                </div>
    )
}



