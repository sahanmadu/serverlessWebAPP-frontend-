import React, { useState} from 'react';
import { getUser, resetUserSession } from '../services/AuthService';

export default function Account(props) {

  
    
    const user = getUser();
    const name = user !== 'undefined' && user ? user.fname : '';

    const logout = () => {
        resetUserSession();
        props.history.push('login');
    }


    const [mname, setMname] = useState('');
    const [rating, setRating] = useState('');
    const [descm, setDesc] = useState('');

    return (
        


    <div className="container">
    <h5>Hi {name} welcome to the user account section. </h5>
     <input type="button" value="logout" onClick={logout}/>
    <div className="col-lg-12">
	
		<h2 className="text-warning text-center">Account Details</h2>
		
		<table className="table table-striped table-hover " border="0">
			<tr className=" text-dark text-center">
				<th>Name</th>
				<th>Date</th>
				<th>Comment</th>
				<th>Name</th>
				<th>Date</th>
				<th>Comment</th>
                <th>Name</th>
				<th>Date</th>
				<th>Comment</th>
                <th>Update</th>
                <th>Delete</th>

			</tr>

				
			<tr className="text-center">
				
				<td>ghf</td>
				<td>hbgkj</td>
				<td>khgk</td>
                <td>ghf</td>
				<td>hbgkj</td>
				<td>khgk</td>
                <td>ghf</td>
				<td>hbgkj</td>
				<td>khgk</td>
                <td> <button class="btn-danger btn"> <a href="" class="text-white"> Delete </a>  </button> </td>
				<td><button class="btn-success btn"><a href="" class="text-white"> UPDATE</a> </button></td>
               
			
			</tr>

		</table>
    </div>

    </div>

            


    
        
    )
}