import NavBar from "./components/Navbar/navbar";
import Graph from "./components/body/graph";
import Input from "./components/country/country";
import Card from "./components/card/card";
import { Component, useState,useEffect } from "react";
import "../src/App.css";
import backimage from "./images/2.jpeg";
import {BrowserRouter as Router ,Route ,Switch }from "react-router-dom";
import Abouts from "./components/Abouts/abouts";
import Contact from "./components/contact/cont";
import Blog from "./components/blog/blog";
import Create from "./components/createblog/create";
// import Home from "./components/home/home";


const App = () =>
{
  const [countries,setCountries]=useState("");
  //  const [data,setdata]=useState("");
  const handelChanges = async (country) =>
{
  // console.log(country);
  setCountries({country});
}
const [data, setData] = useState("");
const [page,setPage] = useState("");
useEffect(async () => {

  const url = 'http://localhost:8001/test';
   
    // const response=await fetch(url);

    // const data=await response.text();

    console.log(data);
    setData(data);
  
});


    return(
 
    <Router>
         <NavBar></NavBar> 
        
      <Switch>
        <Route  path="/" exact>
      <div className="main">
      <NavBar></NavBar>
      {/* <div className="data">{page}</div> */}
       <Card country={countries}></Card>
       <Input handelChanges={handelChanges}></Input>
       <Graph country={countries}></Graph>
       </div>
       </Route>
      
      
     <Route path="/about"><Blog></Blog></Route>
     <Route path="/create"><Create></Create></Route>
      {/* <Route path="/contact"><Contact></Contact></Route> */}

        </Switch>
    
    
    </Router>

   
        
      )
  
}

export default App;