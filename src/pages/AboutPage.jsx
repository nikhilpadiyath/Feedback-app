import React from 'react'
import {Link} from 'react-router-dom'
import Cards from '../components/shared/Cards'

function AboutPage() {
  return (
    <Cards>
         <div className="about">
            <h1>About this Feedback Page</h1>
            <p>This is a React app to leave feedback </p>
            <p> Version 1.0.0</p>
            <Link to="/">
                <p>Back to Home</p>
            </Link>
        </div>
    </Cards>
   
  )
}

export default AboutPage