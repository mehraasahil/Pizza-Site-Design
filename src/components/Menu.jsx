import React from 'react'

const Menu = () => {
  return (
    <div className='about'>
         <div className="container">
           <div className="row">
           <div className="col-6">
                <div className="about_img">
                    <img src='/img/pizza.jpg' alt="" />
                </div>

            </div>
            <div className="col-6 p-25" >
            <h3>The Pizza Menu</h3>
            <h1>Welcome TO Indian Pizza</h1>
            <p>I'm a thin-crust pizza guy. I respect people who
                 like thick crust, 
                 but in my view it's mostly bread.
            </p>
            <div className="about_btn">
                <a href="" className='btn btn-smart'>
                    View More
                </a>
                </div>

            </div>
           
           </div>
            </div>
      
    </div>
  )
}

export default Menu
