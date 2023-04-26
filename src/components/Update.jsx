import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
export const Update = () => {
    const API ='http://localhost:3030/users'
    const {id} = useParams();
    const [inputData,setInputData] = useState({
        id:id,
        name:'',
        email:'',
    })
     useEffect(()=>{
        fetch(API+`/`+id)
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          setInputData(data);
        })
      },[])
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.put('http://localhost:3030/users/'+id,inputData)
        .then(res=>{
            alert('Data Updated Successfully! UserName'+inputData.name)
            navigate('/')
            
        })
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'> 
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
            <div>
                    <label htmlFor="id">ID:</label>
                    <input type="text" disabled name='id' className='form-control' value={inputData.id}
                     onChange={e=>setInputData({...inputData,name: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' value={inputData.name}
                     onChange={e=>setInputData({...inputData,name: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" name='phone' className='form-control' value={inputData.phone}
                     onChange={e=>setInputData({...inputData,phone: e.target.value})} />
                </div>
                <button className='btn btn-info mt-5' 
               >Update</button>
            </form>
        </div>
    </div>
  )
}
