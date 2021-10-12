import React, { useState} from 'react';
import axios from 'axios';


const addUrl = 'https://uy2hzefdoe.execute-api.us-east-1.amazonaws.com/prod/add';

export default function AddItems() {

    const [id, setID] = useState('');
    const [mname, setMname] = useState('');
    const [rating, setRating] = useState('');
    const [desc, setDesc] = useState('');

    const [message, setMessage] = useState(null);
    
    const sendData = (event) => {
        event.preventDefault();
        if (id.trim() === '' ||  mname.trim() === '' || rating.trim() === '' || desc.trim() === '') {
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
         id:id,
         mname:mname,
         rating:rating,
         desc:desc
        
        }
        axios.post(addUrl, requestBody, requestConfig).then(response => {
          setMessage('New movie added!');
        }).catch(error => {
          if (error.response.status === 401) {
            setMessage(error.response.data.message);
          } else {
            setMessage('An error occured!',error.message);
          }
        })
      }
      

    return (
        


    <div className="container">
        <h3>Add movie details</h3>
                        <form onSubmit={sendData}>
               <div className="form-group">
                    <label for="exampleInputEmail1">Movie ID</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>{
                                setID(e.target.value);
                    }} value={id}/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Movie Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>{
                                setMname(e.target.value);
                    }} value={mname}/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Ratings</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                                setRating(e.target.value);
                    }} value={rating}/>
                   
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                                setDesc(e.target.value);
                    }} value={desc}/>
                </div>
                
                <button type="submit" className="btn btn-primary">ADD</button>
                </form>
                {message && <p className="message">{message}</p>}
                
            
        </div>

    
        
    )
}