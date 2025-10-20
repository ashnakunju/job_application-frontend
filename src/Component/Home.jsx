import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
       <div className='row'>
         <div className='m-5 col-5'>
            <h6>Job Application Tracker</h6>
        <h1>Track & Organize Your Job Search</h1>
        <p>The leading tool for organizing, tracking, and managing all of your job applications in one place.</p>
        <p>The Job Application Tracker is the ultimate platform for job seekers who want to stay organized, focused, and confident throughout their job hunt. Whether you're applying to internships, entry-level roles, or experienced positions, this tool helps you manage every detail with ease.</p>
        <br/>
        <Link to="/add"><button className='p-3 text-white' style={{borderRadius:10, backgroundColor:'green'}}>Start Now</button></Link>
        </div>


        <div className='col-6'>
            <img className='m-5 ' style={{height:500 , width:700}} src='https://images.cakeresume.com/images/9924a7b1-7592-4f69-abaf-c7251a98f477.jpg'></img>
        </div>

       </div>

       <br/>

    <div className='text-center m-5'>
        <h1>Stay organized with Eassy's<br/>
         all-in-one job tracker.</h1>

        <p>No more messy spreadsheets. Eassy's job tracker helps you manage and <br/>prioritize jobs to make sure you put your best foot forward in every interview.</p>



    </div>

    <br/>
       
       <div className='row m-5'>
        <div className='col-6'>
            <img src='https://i0.wp.com/jobcopilot.com/wp-content/uploads/2024/10/5-2.png?fit=640%2C377&ssl=1'></img>
        </div>

        <div className='col-5'>
            <h1>See all your applications in one place</h1>
            <p>Every job you apply to using Simplify is automatically saved to your job tracker. Our tracker makes it easy update your status for each job and generate follow-up emails to recruiters.</p>
            <Link to='/add'><button className='p-3 text-white' style={{borderRadius:10, backgroundColor:'green'}}>Start Tracking</button></Link>
        </div>
       </div>

       <br/>


       <div className='mt-5'>
        <h1 className='text-center'>Job Tracker Features</h1>
        <div className='row m-5'>
          <div className='col-5 m-5 p-4 border border-success'>
            <h3>Centralized Job Management</h3>
            <p>Keep all your job applications in one organized dashboard. Easily add new opportunities, update statuses, and view your entire job search at a glance—no more juggling spreadsheets or scattered notes.</p>
          </div>


          <div className='col-5 m-5 p-4 border border-success'>
            <h3>Status Tracking & Reminders</h3>
            <p>Track each application’s progress from “Applied” to “Interviewed” to “Offer.” Set reminders for follow-ups so you never miss a chance to reconnect with recruiters or hiring managers.</p>
          </div>
        </div>



         <div className='row m-5'>
          <div className='col-5 m-5 mt-0 p-4 border border-success'>
            <h3>Interview Notes & Feedback</h3>
            <p>Log interview questions, recruiter feedback, and your own reflections. This helps you prepare better for future interviews and refine your approach over time.</p>
          </div>


          <div className='col-5 m-5 mt-0 p-4 border border-success'>
            <h3>Progress Insights</h3>
            <p>Visualize your job hunt with charts and summaries. See how many applications you’ve sent, how many interviews you’ve landed, and where you’re getting traction.</p>
          </div>
        </div>

       </div>

    </>
  )
}

export default Home