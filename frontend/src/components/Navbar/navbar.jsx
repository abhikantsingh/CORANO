import "./navbar.css";
import logo from "../../images/favicon-32x32.png";
import { Link } from "react-router-dom";

const NavBar = () => {
   return (
      <div className="main_nav">
         <div className="image">
           <a href="http://localhost:3000"> <img alt="logo" src={logo}></img></a>
         </div>
         {/* <div className="content"> */}
            {/* <a href="http://localhost:8080/"><div className="home">back</div></a> */}

         {/* </div> */}
         {/* <div className="home">Blog</div> */}
      </div>
     
   )
}

export default NavBar;