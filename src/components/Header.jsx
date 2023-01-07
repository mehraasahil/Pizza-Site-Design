import React from 'react'
import Navbar from './Navbar'
const Header = () => {
  return (
    <div className='banner'>
      <Navbar></Navbar>
        <div className='banner_content'>
            <div className='container'>
           <div className='banner_text'>
           <h3>Pizza Delivery</h3><br></br>
                <h1>Indian Pizza</h1>
                <p>
                I'm a thin-crust pizza guy. I respect people who
                 like thick crust, 
                 but in my view it's mostly bread.
                </p>
                <div className="banner_btn">
                  <a href="" className=' btn btn-smart'>Delevery Now</a>
                </div>
           </div>

              
            </div>
        </div>
      
    </div>
  )
}

export default Header
