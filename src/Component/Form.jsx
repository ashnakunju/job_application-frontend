import React, { useState } from 'react'
import { addTrackerAPI } from '../Service/allAPI'
import { Link } from 'react-router-dom'


function Form() {

  const[userInput,setuserInput]=useState({
    company:'',
    position:'',
    status:'',
    salary:'',
    location:'',
    source:''
  })

  const handleChange=(e)=>{
    setuserInput({...userInput, [e.target.name]:e.target.value})
  }

  const handleSubmit = async()=>{
    const result = await addTrackerAPI(userInput)
    console.log(result.data);
    window.location.href = '/add';
  }
  

  return (
    <>
        <div className='border m-5 p-5 border-success'>
            <div className='text-center m-5'>
            <div><input name='company' onChange={handleChange} value={userInput.company} placeholder='Company Name' style={{width:600}}></input></div><br/>
            <div> <input name='position' onChange={handleChange} value={userInput.position} placeholder='Position' style={{width:600}}></input></div><br/>
            <div><input name='status' onChange={handleChange} value={userInput.status} placeholder='Status' style={{width:600}}></input></div><br/>
            <div><input name='salary' onChange={handleChange} value={userInput.salary} placeholder='Salary' style={{width:600}}></input></div><br/>
            <div><input name='location' onChange={handleChange} value={userInput.location} placeholder='Location' style={{width:600}}></input></div><br/>
            <div><input name='source' onChange={handleChange} value={userInput.source} placeholder='Source' style={{width:600}}></input></div>

        </div>
        <div className='text-center'>
          <button onClick={handleSubmit} className='bg-success px-4 py-2' type='button'>ADD</button>
        </div>
        </div>
    </>
  )
}

export default Form