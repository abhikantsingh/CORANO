import { useEffect, useState } from "react";
import NavBar from "../Navbar/navbar";
const Blog = () =>
{
    return(
        <div>
            <div> <NavBar></NavBar></div>
          
            <a href="/create">CREATE</a>
            <div>Title</div>
            <div>
                About
            </div>
        </div>
    )
}

export default Blog;