import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const Create = () => {
    const [inputData,setInputData] = useState({
        name:'',
        email:'',
    })
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:3030/users',inputData)
        .then(res=>{
            alert('Data Posted Successfully!')
            navigate('/')
        })
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'> 
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control'
                     onChange={e=>setInputData({...inputData,name: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" name='phone' className='form-control'
                     onChange={e=>setInputData({...inputData,phone: e.target.value})} />
                </div>
                <button className='btn btn-info mt-5' 
               >Submit</button>
            </form>
        </div>
    </div>
  )
}
