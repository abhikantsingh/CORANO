import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "../createblog/create.css";

const Create = () =>
{
    const [username,setUsername] = useState({
        fname:"",
          lname:"",
          email:"",
          phone:"",
          experience:""
});
  const handelChange = (event) =>
 {
      const name=event.target.name;
       const value=event.target.value;
      console.log(name,value);
         setUsername({...username,[name]: value});
 }
 const [record,setRecord]= useState([]);
 const onsubmit = (event) =>
 {
    history.push(`/blog`);
    console.log(username);
     event.preventDefault();
      axios({
        method:"POST",
        url:"http://localhost:8001/Blog",
        data:username
      }).then((res)=>{
        console.log(res);
        setRecord(res.data.allBlog);
     })
 }

//  const deleteBlog = (id) =>
//  {
//     console.log("delete");
//     axios({
//         method:"DELETE",
//         url:`http://localhost:8001/deleteBlog/${id}`,
//     }).then((res) =>
//     {
//         setRecord(res.data.allBlog);
//     })
//  }
  
  useEffect(() => {
    axios({
        method:"GET",
        url:"http://localhost:8001/allBlog"
    }).then((res) =>
    {
        setRecord(res.data.allBlog);
    })
  },[])
  const history = useHistory();
    return (
        <div className="outterBody">
<div class="containeR">
  <div class="brand-logo"></div>
  <div class="brand-title">Thank You</div>
  <div class="inputs">
    <label>FIRST NAME</label>
    <input type="text" name="fname" value={username.fname} onChange={handelChange} placeholder="first name" />
    <label>LAST NAME</label>
    <input type="text" name="lname" value={username.lname} onChange={handelChange}  placeholder="last name" />
    <label>EMAIL</label>
    <input type="email" name="email" value={username.email} onChange={handelChange}  placeholder="example@test.com" />
    <label>PHONE</label>
    <input type="Number" name="phone" value={username.phone} onChange={handelChange}  placeholder="phone number" />
    <label>EXPERIENCE</label>
    <textarea className="expArea" type="text" name="experience" value={username.experience} onChange={handelChange} ></textarea>
    <button className="submitButton" type="submit" onClick={onsubmit}>SUBMIT</button>
  </div>
</div>
</div>
        
    )
}
export default Create;