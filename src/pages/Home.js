import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {

    const [users,setUsers]=useState([]);
    const {id}=useParams()

    useEffect(()=>{
        loadUsers();
        
    },[]);

    const loadUsers=async()=>{
        const result= await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };
    const deleteUser=async (id)=> {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    } 
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">customer </th>
      <th scope="col">opportunity </th>
      <th scope="col">Amount</th>
      <th scope="col">Date</th>
      <th scope="col">Notes</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
      <th scope="row"key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.customer}</td>
      <td>{user.opportunity}</td>
      <td>{user.amount}</td>
      <td>{user.date}</td>
      <td>{user.notes}</td>
      <td>
        
        <Link className="btn btn-outline-primary mx-2"to={`/edituser/${user.id}`}
        >Edit</Link>
      
        <button className="btn btn-danger mx-2"
        onClick={()=>deleteUser(user.id)} >Delete</button>
      </td>
    </tr>
        ))
    }
    
    
  </tbody>
</table>
        </div>
    </div>
  )
}
