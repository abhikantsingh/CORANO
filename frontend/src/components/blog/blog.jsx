// import { useEffect, useState } from "react";
import NavBar from "../Navbar/navbar";
import axios from "axios";
 import "../blog/blog.css";
import { useEffect, useState } from "react";
import logo from "../../images/favicon-32x32.png";

import blogimg from "../image/blog.jpg";
import HeaderRight from "../blog/HeaderRight";
import HeaderLeft from "../blog/HeaderLeft";
const Blog = () =>
{
    const [record,setRecord]= useState([]);
    const deleteBlog = (id) =>
    {
       console.log("delete");
       axios({
           method:"DELETE",
           url:`https://fast-gorge-84433.herokuapp.com/deleteBlog/${id}`,
       }).then((res) =>
       {
           setRecord(res.data.allBlog);
       })
    }
  useEffect(() => {
    axios({
        method:"GET",
        url:"https://fast-gorge-84433.herokuapp.com/allBlog"
    }).then((res) =>
    {
        setRecord(res.data.allBlog);
    })
  },[])
    return(  
        <div>
           
            <div className="blogMain">
              <a href="/"><div className="homelogo"> <img src={logo} alt="" /></div></a>
                <div className="createBlog">
                <div><img className="blogimg" src={blogimg}></img></div>
                <div>
               {/* <a href="/"><button className="toHome">BACK</button></a>  */}
               <h1>ABOUT THE JOURNEY</h1>
                <h5 style={{paddingTop:"10px"}}>✓  share about your experience</h5>
               <h5 style={{paddingTop:"10px"}}>✓   Help others by telling about your hard journey</h5>
                <p style={{paddingTop:"20px"}}><a href='/create'><button class="button-56" role="button">CREATE</button></a></p>
                </div>
                    </div>
           
           <div className="Information">
            {
            record.map((blog,idx) =>{
            return(
                idx%2==0?<HeaderRight blog={blog} fdelete={deleteBlog}></HeaderRight>:<HeaderLeft blog={blog} fdelete={deleteBlog}></HeaderLeft>    
            )})}
            </div>
         </div> 
         </div>
        
    )
}

export default Blog;