
import React from 'react';
 import "../blog/blog.css";
 import Blog from "../blog/blog"
 import { useEffect, useState } from "react";
 import axios from "axios";
//  import {setRecord} from "../blog/blog"
export default function HeaderLeft({blog,fdelete}) {
  
  return (
    <div className='backColor2'>
    <button className="deleteButton" onClick={() => fdelete(blog._id)}>X</button>
    <div className='headerLeft'>
       
        <div className='header'>
          <h1 style={{fontFamily: "'Pacifico', cursive",color:"white"}}>{blog.fname}{" "}{blog.lname}</h1>
        </div>
        <div className='blogContent1'>
          <a><h10 style={{fontFamily: "'Poppins', sans-serif"}}>{" ✓ "} {blog.email}</h10></a>
          <h8 style={{fontFamily: "'Poppins', sans-serif"}}>{" ✓ "}{blog.phone}</h8>
          <h7 style={{fontFamily: "'Poppins', sans-serif"}}>{" ✓ "}{blog.content}</h7>
          </div>
    </div>
    </div>
  )
}
