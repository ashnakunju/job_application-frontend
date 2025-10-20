import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { getTrackerAPI, deleteTrackerAPI } from '../Service/allAPI';
import Edit from './Edit';



function Add_new() {
  const [selectedApp, setSelectedApp] = useState(null);


  const [applications,setapplication] = useState([])

  const getApplicaton = async()=>{
    const result = await getTrackerAPI()
    setapplication(result.data);
    
  }

  useEffect(()=>{
    getApplicaton()
  },[])

  const handleDelete = async (id) => {
  await deleteTrackerAPI(id);
  getApplicaton(); 
};


   

  return (
    <>
      <div>
        <img style={{height:300, width:'100%'}} src='https://apploye.com/blog/content/images/2025/02/track-employee-hours.jpg'></img>
      </div>
      <div>
        <h1 className='m-5'>Application Tracker</h1>
        <div>
          <table className='border m-5'>
          <thead>
            <tr className='border'>
            <th className='px-4 py-2  border'>Company</th>
            <th className='px-4 py-2  border'>Position</th>
            <th className='px-4 py-2  border'>Status</th>
            <th className='px-4 py-2  border'>Salary</th>
            <th className='px-4 py-2  border'>Location</th>
            <th className='px-4 py-2  border'>Source</th>
            <th className='px-4 py-2  border'>Edit</th>
            <th className='px-4 py-2  border'>Delete</th>
          </tr>
          </thead>

          <tbody>
            {applications.length >0?(
              applications.map((app,index)=>(
                <tr key={index}>
              <td className='px-4 py-2 border'>{app.company}</td>
              <td className='px-4 py-2 border'>{app.position}</td>
              <td className='px-4 py-2 border'>{app.status}</td>
              <td className='px-4 py-2 border'>{app.salary}</td>
              <td className='px-4 py-2 border'>{app.location}</td>
              <td className='px-4 py-2 border'>{app.source}</td>
              {/* <td><Link to='/edit'><button className='mx-4 my-2 border'><CiEdit /></button></Link></td> */}
              <td><Link to='/edit' state={{ app }}><button className='mx-4 my-2 border'><CiEdit /></button></Link></td>

              {/* <td><button className='mx-4 my-2 border'><MdDelete /></button></td> */}


              <td><button className='mx-4 my-2 border' onClick={() => handleDelete(app.id)}><MdDelete /></button></td>

            </tr>
              ))
            ):(
            <tr>
                  <td colSpan="8" className='text-center py-4'>No applications found</td>
                </tr>
            )}
           
          </tbody>
        </table>
        </div>


        {selectedApp && (<Edit app={selectedApp} onClose={() => setSelectedApp(null)} />
        
        )}


        <div  className='text-center '>
          <Link to='/form'><button className='bg-success p-2'>Add a new Job</button></Link>
        </div>
      </div>
    </>
  )
}

export default Add_new