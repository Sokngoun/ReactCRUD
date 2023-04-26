import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const API ='http://localhost:3030/db'
  const [data, setData] = useState([]);
 
  useEffect(()=>{
    fetch(API)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setData(data.users);
    })
  }, [])

  
  function handleDelete(id){
    const confirm = window.confirm('Do want to delete?');
    if(confirm){
      axios.delete('http://localhost:3030/users/'+id)
      .then(res=>{
        alert("Record Deleted")
        navigate('/')
      })
    }
    console.log(confirm)
  }

  
  return (
    <div className="container mt-5">
      {/* CRUD APP WITH JSON SERVER */}
      <h2 className="bg-success text-white p-2">Recording System</h2>
      <Link to="/create" className='btn btn-success my-3'>Create +</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
           {data.map(d=> (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.phone}</td>
              <td className="">
                <Link to={`/update/${d.id}`} className="btn btn-secondary mx-1">Update</Link>
                <button onClick={e=>handleDelete(d.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  );

};
