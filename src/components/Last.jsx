import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/last.css"

function Last() {
  return (
    <div className='boxcard'>
       <div className='boxitem'>
       <h4>Thank you for choosing us</h4>
        <p>congrats!You will get your plant within a week</p>
        <button className='thankyou'><Link to="/">Back to home</Link> </button>
       </div>
    </div>
  )
}

export default Last