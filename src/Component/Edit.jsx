import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateTrackerAPI } from '../Service/allAPI';

function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const { app } = location.state || {};

  const [editInput, setEditInput] = useState({
    company: '',
    position: '',
    status: '',
    salary: '',
    location: '',
    source: ''
  });

  useEffect(() => {
    if (app) {
      setEditInput(app); 
    }
  }, [app]);

  const handleChange = (e) => {
    setEditInput({ ...editInput, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await updateTrackerAPI(app.id, editInput);
    window.location.href = '/add';
  };

  return (
    <div className='border m-5 p-5 border-warning'>
      <h3 className='text-center mb-4'>Edit Application</h3>
      <div className='text-center'>
        <input name='company' value={editInput.company} onChange={handleChange} placeholder='Company' style={{ width: 600 }} /><br /><br />
        <input name='position' value={editInput.position} onChange={handleChange} placeholder='Position' style={{ width: 600 }} /><br /><br />
        <input name='status' value={editInput.status} onChange={handleChange} placeholder='Status' style={{ width: 600 }} /><br /><br />
        <input name='salary' value={editInput.salary} onChange={handleChange} placeholder='Salary' style={{ width: 600 }} /><br /><br />
        <input name='location' value={editInput.location} onChange={handleChange} placeholder='Location' style={{ width: 600 }} /><br /><br />
        <input name='source' value={editInput.source} onChange={handleChange} placeholder='Source' style={{ width: 600 }} /><br /><br />
        <button onClick={handleUpdate} className='bg-success px-4 py-2'>Update</button>
        <button onClick={() => navigate('/add')} className='mx-3 px-4 py-2'>Cancel</button>
      </div>
    </div>
  );
}

export default Edit;
