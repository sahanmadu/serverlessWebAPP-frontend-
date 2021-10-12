import React, {useState} from 'react';
import axios from 'axios';
import { setUserSession } from '../services/AuthService';



const loginUrl = 'https://uy2hzefdoe.execute-api.us-east-1.amazonaws.com/prod/login';

export default function Login(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const submitLogin = (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter username and password are required');
      return;
    }
    setErrorMessage(null);
    const requestConfig = {
      headers: {
        'x-api-key': 'xsbsfCjt5P4KPGZtIaUqw6uUer0o3sSUpy5xfv5i'
      }
    }
    const requestBody = {
      username: username,
      password: password
    }

    axios.post(loginUrl, requestBody, requestConfig).then((response) => {
      setUserSession(response.data.user, response.data.token);
      props.history.push('/account');
    }).catch((error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred');
      }
    })
  }
    return (
        
      

           <div className="container" style={{height:"100px", width:"600px"}}>
                     
                        <form onSubmit={submitLogin}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>{
                                setUsername(e.target.value);
                    }} value={username}/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                                setPassword(e.target.value);
                    }} value={password}/>
                </div>
                
                <button type="submit" className="btn btn-success">Login</button>
                </form>
               
                {errorMessage && <p className="message">{errorMessage}</p>}
                
            
        </div>
    )
}
