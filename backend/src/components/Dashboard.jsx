import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
                <ul>
                <li>
                        <Link to={'/educations'}>Add Educations</Link>
                    </li>
                    <li>
                        <Link to={'/experiences'}>Add Experiences</Link>
                    </li>
                    <li>
                        <Link to={'/skills'}>Add Skill</Link>
                    </li>
                    <li>
                        <Link to={'/projects'}>Add Projects</Link>
                    </li>
                </ul>
            </div>
            <div className='col-md-9'></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

