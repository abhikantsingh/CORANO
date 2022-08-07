import React from 'react'
import "../blog/blog.css";
export default function HeaderRight({blog,fdelete}) {
  return (
    <div className='backColor1'>
       <button className="deleteButton" onClick={() => fdelete(blog._id)}>X</button>
    <div className='headerRight'>
        {/* <div className='header'></div> */}
        <div className='header'>
          <h1 style={{fontFamily: "'Pacifico', cursive",color:"grey"}}>{blog.fname}{" "}{blog.lname}</h1>
        </div>
        <div className='blogContent2'>
        <a><h10>{"✓ "}{blog.email}</h10></a>
          <h8 style={{fontFamily: "'Poppins', sans-serif"}}>{"✓ "}{blog.phone}</h8>
          <h7 style={{fontFamily: "'Poppins', sans-serif"}}>{"✓ "}{blog.content}</h7>
          </div>
    </div>
    </div> 
  )
}
