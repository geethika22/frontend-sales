import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function EditUser() {  

   let navigate=useNavigate();
   const {id}=useParams()

     const[user,setUser]= useState({
        name:"",
        customer:"",
        opportunity:"",
        amount:"",
        date:"",
        notes:"",
     });

     const{name,customer,opportunity,amount,date,notes}=user;

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});

    };
    useEffect(()=>{
        loadUsers()
    },[])
   
const onSubmit= async (e) =>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`,user)
    navigate("/")

};
const loadUsers =async ()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
}
 
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4"> Edit Sale</h2>
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                    Name
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Customer" className="form-label">
                    customer
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your customer_id"
                name="customer"
                value={customer}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="opportunity" className="form-label">
                opportunity
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your opportunity"
                name="opportunity"
                value={opportunity}
                onChange={(e)=>onInputChange(e)}
                />
                </div>
                <div className="mb-3">
                <label htmlFor= "amount" className="form-label">
                amount
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your amount"
                name="amount"
                value={amount}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">
                    date
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your date"
                name="date"
                value={date}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="notes" className="form-label">
                    notes
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your notes"
                name="notes"
                value={notes}
                onChange={(e)=>onInputChange(e)}
                />

            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to ="/">Cancel</Link>
            </form>
              </div>
            </div>
        </div>

  );
}
