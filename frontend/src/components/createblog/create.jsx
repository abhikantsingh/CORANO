import { useEffect, useState } from "react";

const Create = () =>
{
    let [name,setname] = ([]);
  const handelChange = (event) =>
 {
    //  name=event.target.value;
    //   setname(name);
 }
    return (
        <div>
            <form action="/about" method="POST">
        <label for="fname">First name:</label><br></br>
        <input type="text" id="fname" name="fname" value={name} onChange={handelChange}></input><br></br>
        <label for="lname">Last name:</label><br></br>
        <input type="text" id="lname" name="lname"></input>
          <button>SUBMIT</button>
         </form> 
        </div>
        
    )
}
export default Create;