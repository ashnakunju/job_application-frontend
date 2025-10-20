import React from 'react'

function Footer() {
  return (
    <>
        <div className='p-5 text-white bg-dark mt-5'>
        <div className='row'>
            <div className='col-5'>
            <h5>Eassy</h5>
            <p>Job Application Tracker</p>
            <p> ©Job Application Tracker. All rights reserved.</p>
        </div>

        <div className='col-2'>
            <h5>Job Search</h5>
            <h6>Naukri</h6>
            <h6>GlassDoor</h6>
            <h6>LinkedIn</h6>
        </div>


        <div className='col-2'>
            <h5>Resume Builder</h5>
            <h6>Teal</h6>
            <h6>Novoresume</h6>
            <h6>Canva</h6>
        </div>

        <div className='col-3'>
            <h5>Interview Preparation</h5>
            <h6>Placement Preparation</h6>
            <h6>Interview Cracker</h6>
            <h6>Google Interview Warmup</h6>
        </div>
        </div>
        </div>
    </>
  )
}

export default Footer