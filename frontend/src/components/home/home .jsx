 import "../home/bootstrap.min.css";
 import "../home/styles.css";
 import "../home/style.css";
//  import "../home/owl.css";
//  import "../../"
import { useEffect, useState } from "react";
import axios from "axios";
  import image1 from "../image/home-1-logo-white.png";
const Home = () =>
{
    const [username,setUsername] = useState({
        name:"",
          email:"",
          phone:"",
          country:"",
          message:""
});
  const handelChange = (event) =>
 {
      const name=event.target.name;
       const value=event.target.value;
      console.log(name,value);
         setUsername({...username,[name]: value});
 }
 const onsubmit = (event) =>
 {
    console.log(username);
     event.preventDefault();
      axios({
        method:"POST",
        url:"http://localhost:8001/Contact",
        data:username
      }).then((res)=>{
        console.log(res);
        setUsername({name:"",email:"",phone:"",country:"",message:""})
     })
 }

    return (
        <>
      <div className="page_wapper">
          {/* <!--Start Preloader--> */}
          <div className="preloader">
            <div className="preloader_box">
               <div className="loader">
                  <div className="circle item0"></div>
                  <div className="circle item1"></div>
                  <div className="circle item2"></div>
               </div>
            </div>
         </div>
         {/* <!--End Preloader --> */}
         {/* <!--Header--> */}
         <header className="header_v2">
            <section className="header_top">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-8">
                        <div className="row">
                           <div className="col-lg-3 col-md-3" style={{position:"relative",right:"450px", bottom:"10px"}}>
                              <div className="heading">
                                 <h2>Today Updates</h2>
                              </div>
                           </div>
                           <div className="col-lg-9 col-md-9">
                              <div className="news_inner">
                                 <div className="owl-carousel owl-theme single_items">
                                    <div className="mid-text">
                                       <p><a href="#">Stabilitech's COVID-19 Vaccine Intended to Be Delivered in a Disruptive Thermally Stable Oral Capsule</a></p>
                                    </div>
                                    <div className="mid-text">
                                       <p><a href="#"> Controlled Release Drug Delivery Market Size Worth $69.8 Billion by 2027: Grand View Research, Inc.</a></p>
                                    </div>
                                    <div className="mid-text">
                                       <p><a href="#">  Drug Delivery Market Size Worth $69.8 Billion by 2027: Grand View Research, Inc.
                                          </a>
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4">
                        <div className="text_right">
                           <div className="social_media_icon">
                              <ul className="clearfix">
                                 <li>
                                    <a href="#" className="has-tooltip">
                                       <span className="fa fa-facebook"></span>
                                       <div className="c-tooltip">
                                          <div className="tooltip-inner">Facebook</div>
                                       </div>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#" className="has-tooltip">
                                       <span className="fa fa-twitter"></span>
                                       <div className="c-tooltip">
                                          <div className="tooltip-inner">Twitter</div>
                                       </div>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#" className="has-tooltip">
                                       <span className="fa fa-linkedin"></span>
                                       <div className="c-tooltip">
                                          <div className="tooltip-inner">Linkedin</div>
                                       </div>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="navbar_outer">
               <div className="navbar navbar-expand-lg  bsnav bsnav-sticky bsnav-sticky-slide">
                  <div className="container">


                     <a className="navbar-brand" href="index.html"><img src={require('../image/home-1-logo-white.png').default} className="img-fluid" alt="img"></img></a>
                     <button className="navbar-toggler toggler-spring"><span className="navbar-toggler-icon"></span></button>
                     <div className="collapse navbar-collapse scroll-nav">
                       <ul className="navbar-nav navbar-mobile navbar_left  ml-auto" id="nav">
                          <li className="nav-item nav_item active">
                              <a className="nav-link link_hd" href="/home">  Home  </a></li>
                           <li className="nav-item nav_item">
                              <a className="nav-link link_hd" href="/blog">  Blog  </a></li>
                  
                           <li className="nav-item nav_item"><a className="nav-link link_hd" href="/info">Information</a></li> 
                        </ul>
                     </div>
                  </div>
               </div>
            </section>
         </header>
         {/* <!--Header--> */}
         <main className="main-content" style={{}} >
           
            <section className="main-slider" style={{}}>
               <div className="main-slider-carousel main_slider owl-carousel owl-theme" style={{}}>
                  <div className="slide one" style={{}}>
                     <div className="container text-left" style={{}}>
                        <div className="row" style={{}}>
                           <div className="col-lg-7 d-flex">
                              <div className="content">
                                 <h6>Stabilitech's COVID-19 Vaccine</h6>
                                 <h1> Protective measures against the new coronavirus</h1>
                                 <div className="text">Regularly Washing your hands is best way to protect again catching COVID - 19 than wearing gloves</div>
                                 <div className="link-box">
                                    <a href="https://cdn.s3waas.gov.in/s3e56954b4f6347e897f954495eab16a88/uploads/2020/03/2020032644.pdf" className="theme_btn tp_two">Doctors</a>
                                    <a href="#" className="theme_btn tp_one two">Contact us</a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-5" style={{}}>
                              <div className="slider_image slide_image_right clearfix" style={{}}>
                                 <div className="image image_1 floating">
                                    <img src={require("../image/main-slider/home-2-slider-1-1.png").default} className="img-fluid" alt="img" />
                                 </div>
                                 <div className="image image_2 beat">
                                    <img src={require("../image/main-slider/home-2-slider-1-2.png").default} className="img-fluid" alt="img" />
                                 </div>
                              </div>
                           </div>
                        </div>
                      </div> 
                  </div>
                  <div className="slide two">
                     <div className="container text-left">
                        <div className="row">
                          
                           <div className="col-lg-6 d-flex order-last">
                              <div className="content slide_content_right">
                                 <h6>Stabilitech's COVID-19 Vaccine</h6>
                                 <h1> Stay informed <br className="md_none"/>and follow advice given by Govt</h1>
                                 <div className="text">Regularly Washing your hands is best way to protect again catching COVID - 19 than wearing gloves</div>
                                 <div className="link-box">
                                    <a href="#" className="theme_btn tp_two">Doctors</a>
                                    <a href="#" className="theme_btn tp_one two">Contact us</a>
                                 </div>
                              </div>
                           </div>

                           <div className="col-lg-6 order-first">
                              <div className="slider_image slide_image_left clearfix" style={{}}>
                                 <div className="image image_1 floating">
                                    <img src={require("../image/main-slider/home-2-slider-2-1.png").default} className="img-fluid" alt="img" />
                                 </div>
                                 <div className="image image_2 beat">
                                    <img src={require("../image/main-slider/home-2-slider-1-2.png").default} className="img-fluid" alt="img" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="slide three">
                     <div className="container text-left">
                        <div className="row">
                           <div className="col-lg-7 d-flex">
                              <div className=" content">
                                 <h6>Stabilitech's COVID-19 Vaccine</h6>
                                 <h1>Help to prevent possible spread of COVID-19</h1>
                                 <div className="text">Regularly Washing your hands is best way to protect again catching COVID - 19 than wearing gloves</div>
                                 <div className="link-box">
                                    <a href="#" className="theme_btn tp_two">Doctors</a>
                                    <a href="#" className="theme_btn tp_one two">Contact us</a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-5">
                              <div className="slider_image slide_image_right clearfix" style={{}}>
                                 <div className="image image_1 floating">
                                    <img src={require("../image/main-slider/home-2-slider-3-1.png").default} className="img-fluid" alt="img" />
                                 </div>
                                 <div className="image image_2 beat">
                                    <img src={require("../image/main-slider/home-2-slider-1-2.png").default} className="img-fluid" alt="img" />
                                 </div>
                                 <div className="image image_3 rotate-me">
                                    <img src={require("../image/main-slider/home-2-slider-3-2.png").default} className="img-fluid" alt="img" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* <!------main-slider------> */}
            {/* <!-------------welome_box----------> */}
            <section className="welcome type_one">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_one wow slideInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                           <div className="icon">
                              <img src={require("../image/svg/working-at-home.svg").default} className="img-fluid svg_image" alt="home" /> <span className="flaticon-virus"></span>
                           </div>
                           <div className="content_box">
                              <h2><a href="#">Stay at Home</a></h2>
                              <p>It is a long established fact that a reader will be distracted . </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_one wow slideInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                           <div className="icon">
                              <img src={require("../image/svg/mask-2.svg").default} className="img-fluid svg_image" alt="home" /> <span className="flaticon-virus"></span>
                           </div>
                           <div className="content_box">
                              <h2><a href="#">Protect yourself</a></h2>
                              <p>It is a long established fact that a reader will be distracted . </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_one wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                           <div className="icon">
                              <img src={require("../image/svg/sport-team.svg").default} className="img-fluid svg_image" alt="home" /> <span className="flaticon-virus"></span>
                           </div>
                           <div className="content_box">
                              <h2><a href="#">Be Supportive</a></h2>
                              <p>It is a long established fact that a reader will be distracted . </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_one last wow slideInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                           <div className="icon">
                              <img src={require("../image/svg/smartphone.svg").default} className="img-fluid svg_image" alt="svg" /> <span className="flaticon-virus"></span>
                           </div>
                           <div className="content_box">
                              <h6>Emergency Contact</h6>
                              <h2><a href="#">100</a></h2>
                              <p>Toll Free Number</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* <!-------------welome_box----------> */}
            {/* <!-------------abou us----------> */}
            <section className="about type_one">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="image_box">
                           <div className="image image_3">
                              <img src={require("../image/resources/about-3.png").default} className="img-fluid" alt="img" />
                           </div>
                           <div className="image image_4">
                              <img src={require("../image/resources/about-4.png").default} className="img-fluid" alt="img" />
                           </div>
                           <div className="image image_1">
                              <img src={require("../image/resources/about-1.png").default} className="img-fluid" alt="img" />
                           </div>
                           <div className="image image_2">
                              <img src={require("../image/resources/about-2.png").default} className="img-fluid" alt="img" />
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="heading tp_one  icon_dark" style={{position:"relative",left:"10px"}}>
                           <h6>about Corona</h6>
                           <h1>Coronavirus Disease 2019 (COVID-19)</h1>
                           <span className="flaticon-virus icon"></span>
                        </div>
                        <div className="about_content">
                           <p className="description">It is a long established fact that a reader will be distracted . The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
                              like readable English.
                           </p>
                           <div className="symptoms">
                              <h2>The best way to prevent illness is to avoid being exposed to this virus.</h2>
                              <div className="row">
                                 <div className="col-lg-6">
                                    <ul>
                                       <li>
                                          <span className="flaticon-check"></span>
                                          <p>Clean and disinfect frequently touched surfaces </p>
                                       </li>
                                       <li>
                                          <span className="flaticon-check"></span>
                                          <p>Avoid touching your eyes, nose, and mouth</p>
                                       </li>
                                       <li>
                                          <span className="flaticon-check"></span>
                                          <p>Clean your hands with a hand sanitizer </p>
                                       </li>
                                       <li>
                                          <span className="flaticon-check"></span>
                                          <p>Cover coughs and sneezes</p>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="col-lg-6">
                                    <ul>
                                       <li>
                                          <span className="flaticon-check"></span>
                                          <p>Stay home if you’re sick</p>
                                       </li>
                                       <li>
                                          <span className="flaticon-check"></span>
                                          <p>Wear a facemask if sick</p>
                                       </li>
                                       <li>
                                          <span className="flaticon-check"></span>
                                          <p>Cover your mouth and nose </p>
                                       </li>
                                       <li>
                                          <span className="flaticon-check"></span>
                                          <p>Throw used tissues in trash</p>
                                       </li>
                                       <li>
                                          <span className="flaticon-check"></span>
                                          <p>Ensure solution has at least 70% alcohol.</p>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <a href="https://www.unicef.org/coronavirus/covid-19" className="theme_btn tp_two">Read More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="symptoms type_two">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-10">
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="symptoms_box_two wow slideInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                 <p><span>Headache </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                              <div className="symptoms_box_two wow slideInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                 <p> <span>Sore Throat </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                              <div className="symptoms_box_two wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                 <p><span>Shortness Of Breath </span>Reported illnesses have ranged have ranged from mild.</p>
                              </div>
                              <div className="symptoms_box_two wow slideInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                 <p><span>Diarrhea </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="symptoms_box_two wow slideInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                 <p><span>Fever </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                              <div className="symptoms_box_two wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                 <p><span>Cough </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                              <div className="symptoms_box_two wow slideInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                 <p><span>Vomit </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                              <div className="symptoms_box_two wow slideInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                 <p> <span>Tired </span>Reported illnesses have ranged from mild have ranged from mild.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="image_box">
                           <img src={require("../image/resources/Sym-2.png").default} className="img-fluid" alt="img" />
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="funfacts type_two">
               <div className="container">
                  <div className="about_fun_facts">
                     <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                           <div className="fun_facts_box type_two">
                              <h2><span className="counter-value">434595 </span>+</h2>
                              <h6>Total Confirmed</h6>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                           <div className="fun_facts_box type_two">
                              <h2><span className="counter-value">170</span>+</h2>
                              <h6>Countries / Regions</h6>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                           <div className="fun_facts_box type_two">
                              <h2><span className="counter-value">10</span>%</h2>
                              <h6>Total Recoverd</h6>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                           <div className="fun_facts_box type_two last">
                              <h2><span className="counter-value">80</span>%</h2>
                              <h6>Confirmed Deaths</h6>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="preventions bg_white type_two">
               <div className="container">
                  <div className="row" style={{position:"relative",right:"450px"}}>
                     <div className="col-lg-12">
                        <div className="heading text-center icon_dark tp_one">
                           <h6>Prevention Coronavirus</h6>
                           <h1>How to Prevent Yourself.</h1>
                           <span className="flaticon-virus icon"></span>
                           <p>If you are healthy, you only need to wear a mask if you are taking care of a person with suspected 2019-nCoV infection.</p>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="00ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src={require("../image/svg/spongewash.svg").default} className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">Wash your hands often with soap and water</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="100ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src={require("../image/svg/man-touch.svg").default} className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">Avoid touching your eyes, nose, and mouth</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src={require("../image/svg/no.svg").default} className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">Avoid close contact with people who are sick</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="300ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src={require("../image/svg/sorethroat.svg").default} className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">Stay home if you are sick,  get medical care</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="400ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src={require("../image/svg/masksick.svg").default} className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">Cover your mouth and nose with a tissue</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="500ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src={require("../image/svg/handwashwashing.svg").default} className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">Immediately wash your hands with  water</a></h2>
                           <a href="" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="600ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src={require("../image/svg/maskmedical.svg").default} className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">If you are sick: You should wear a facemask</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="700ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src={require("../image/svg/object-hygiene.svg").default} className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">If surfaces are dirty, clean them</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="explore_more two">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="content_box text-center">
                           <h1> Basic protective measures against<br className="disp_none_md" />the <span>new coronavirus</span> </h1>
                           <a href="#" className="theme_btn tp_two">Explore Studies</a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="doctor type_two">
               <div className="container">
                  <div className="row" style={{position:"relative",right:"450px"}}>
                     <div className="col-lg-12">
                        <div className="heading  tp_one">
                           <h6>Doctors</h6>
                           <h1>Meet Our Best Doctors</h1>
                           <span className="flaticon-virus icon"></span>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-12 padding_zero">
                        <div className="owl-carousel four_items">
                           <div className="doctor_box type_two">
                              <div className="image_box">
                                 <img src={require("../image/resources/best-doctors1.jpg").default} className="img-fluid" alt="best-doctors" />
                                 <div className="overlay">
                                    <ul>
                                       <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                       <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                       <li><a href="#"><i className="fa fa-skype"></i></a></li>
                                       <li><a href="#"><i className="fa fa fa-vimeo"></i></a></li>
                                       <li><a href="#"><i className="fa fa-share-alt"></i></a></li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="content_box">
                                 <a href="#" className="contact_doctor"><span className="fa fa-phone"></span>+91 9648 47577</a>
                                 <div className="text_box">
                                    <h2> <a href="#">Dr. ganga ram </a> </h2>
                                    <small>Internal Medicine</small>
                                 </div>
                              </div>
                           </div>
                           <div className="doctor_box type_two">
                              <div className="image_box">
                                 <img src={require("../image/resources/best-doctors2.jpg").default} className="img-fluid" alt="best-doctors" />
                                 <div className="overlay">
                                    <ul>
                                       <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                       <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                       <li><a href="#"><i className="fa fa-skype"></i></a></li>
                                       <li><a href="#"><i className="fa fa fa-vimeo"></i></a></li>
                                       <li><a href="#"><i className="fa fa-share-alt"></i></a></li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="content_box">
                                 <a href="#" className="contact_doctor"><span className="fa fa-phone"></span>+91 9219 86134</a>
                                 <div className="text_box">
                                    <h2> <a href="#">rohit sharma </a> </h2>
                                    <small>Head Doctor</small>
                                 </div>
                              </div>
                           </div>
                           <div className="doctor_box type_two">
                              <div className="image_box">
                                 <img src={require("../image/resources/best-doctors3.jpg").default} className="img-fluid" alt="best-doctors" />
                                 <div className="overlay">
                                    <ul>
                                       <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                       <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                       <li><a href="#"><i className="fa fa-skype"></i></a></li>
                                       <li><a href="#"><i className="fa fa fa-vimeo"></i></a></li>
                                       <li><a href="#"><i className="fa fa-share-alt"></i></a></li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="content_box">
                                 <a href="#" className="contact_doctor"><span className="fa fa-phone"></span>+91 7646 27477</a>
                                 <div className="text_box">
                                    <h2> <a href="#">Dr. sharma rohit</a> </h2>
                                    <small>Chief Doctor </small>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="contact_form faq type_two">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6 col-md-12">
                        <div className="contact_form_box type_two">
                           <h2>Contact With Us</h2>
                           <form action="/info" method="POST" onSubmit={onsubmit}>
                              <div className="row">
                                 <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                       <label> Name</label>
                                       <input type="text" name="name" placeholder="" className="form-control" value={username.name} onChange={handelChange}></input>
                                    </div>
                                 </div>
                                 <div className="col-lg-6 col-md-6">
                                    <div className="form-group"> <label> Email</label>
                                       <input type="email" name="email" placeholder="" className="form-control" value={username.email} onChange={handelChange}></input>
                                    </div>
                                 </div>
                                 <div className="col-lg-6 col-md-6">
                                    <div className="form-group"> <label> Phone</label>
                                       <input type="number" name="phone" placeholder="" className="form-control" value={username.phone} onChange={handelChange}></input>
                                    </div>
                                 </div>
                                 <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                       <label>Country of Travel</label>
                                       <select name="country" id="country" value={username.country} onChange={handelChange}>
                                          <option selected="selected">Select Country</option>
                                          <option>Australia</option>
                                          <option>America</option>
                                          <option>South Korea</option>
                                          <option>North Korea</option>
                                          <option>Japan</option>
                                          <option>China</option>
                                          <option>England</option>
                                          <option>Netherland</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-lg-12 col-md-12">
                                    <div className="form-group"> <label> Message</label>
                                       <textarea type="text"  name="message" placeholder="" className="form-control textarea required" rows="3" value={username.message} onChange={handelChange}></textarea>
                                    </div>
                                 </div>
                                 <div className="col-lg-12 col-md-12">
                                    <div className="lower_button_box">
                                       <div className="row">
                                          <div className="col-lg-7">
                                             <div className="emergrncy_contact">
                                                <h6><span>For Emergency</span> +91 90138 68243 </h6>
                                             </div>
                                          </div>
                                          <div className="col-lg-5">
                                             <div className="form-group text-right">
                                                <button className="theme_btn tp_two" type="submit">Send Message</button>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div className="col-lg-6" style={{position:"relative",right:"450px",height:"300px"}}>
                        <div className="faq_box_outer">
                           <div className="heading tp_one">
                              <h6>Faq"s</h6>
                              <h1>Frequently Ask Questions</h1>
                              <span className="flaticon-virus icon"></span>
                           </div>
                           <h2></h2>
                           <div id="accordion">
                              <div className="card faq_box type_two"  style={{width:"100%",height:"30px",position:"relative",left:"450px",top:"10px",boxShadow:"none"}}>
                                 <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                       <button className="faq_btn" dataToggle="collapse" dataTarget="#collapseOne" ariaExpanded="true" ariaControls="collapseOne">
                                       <span className="flaticon-question-3 faq_icon"></span>  What is a novel coronavirus? 
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseOne" className="collapse show" ariaLabelledby="headingOne" dataParent="#accordion">
                                    <div className="card-body">
                                       A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two" style={{width:"100%",height:"30px", position:"relative",left:"450px",top:"70px",boxShadow:"none"}}>
                                 <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" dataToggle="collapse" dataTarget="#collapseTwo" ariaExpanded="false" ariaControls="collapseTwo">
                                       <span className="flaticon-question-3 faq_icon"></span>  Why might someone blame or avoid individuals and groups?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseTwo" className="collapse" ariaLabelledby="headingTwo" dataParent="#accordion">
                                    <div className="card-body">
                                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two" style={{width:"100%",height:"30px" ,position:"relative",left:"450px",top:"100px",boxShadow:"none"}}>
                                 <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" dataToggle="collapse" dataTarget="#collapseThree" ariaExpanded="false" aria-controls="collapseThree">
                                       <span className="flaticon-question-3 faq_icon"></span>  Can someone who has had COVID-19?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseThree" className="collapse" ariaLabelledby="headingThree" dataParent="#accordion">
                                    <div className="card-body">
                                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two" style={{width:"100%",height:"30px", position:"relative",left:"450px",top:"100px",boxShadow:"none"}}>
                                 <div className="card-header" id="headingFours">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" dataToggle="collapse" dataTarget="#collapseFour" ariaExpanded="false" aria-controls="collapseFour">
                                       <span className="flaticon-question-3 faq_icon"></span>    Why is the disease being called coronavirus disease COVID-19?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseFour" className="collapse" ariaLabelledby="headingFours" dataParent="#accordion">
                                    <div className="card-body">
                                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two" style={{width:"100%",height:"30px", position:"relative",left:"450px",top:"110px",boxShadow:"none"}}>
                                 <div className="card-header" id="headingFive">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" dataToggle="collapse" dataTarget="#collapseFive" ariaExpanded="false" aria-controls="collapseFive">
                                       <span className="flaticon-question-3 faq_icon"></span>    How can people help stop stigma related to COVID-19?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseFive" className="collapse" ariaLabelledby="headingFive" dataParent="#accordion">
                                    <div className="card-body">
                                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two" style={{width:"100%",height:"30px", position:"relative",left:"450px",top:"110px",boxShadow:"none"}}>
                                 <div className="card-header" id="headingSix">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" dataToggle="collapse" dataTarget="#collapseSix" ariaExpanded="false" aria-controls="collapseSix">
                                       <span className="flaticon-question-3 faq_icon"></span>   Can someone who has had COVID-19 spread  to others?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseSix" className="collapse" ariaLabelledby="headingSix" dataParent="#accordion">
                                    <div className="card-body">
                                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two" style={{width:"100%",height:"30px" ,position:"relative",left:"450px",top:"100px",boxShadow:"none"}}>
                                 <div className="card-header" id="headingSeven">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" dataToggle="collapse" dataTarget="#collapseSeven" ariaExpanded="false" aria-controls="collapseSeven">
                                       <span className="flaticon-question-3 faq_icon"></span>        Will warm weather stop the outbreak of COVID-19?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseSeven" className="collapse" ariaLabelledby="headingSeven" dataParent="#accordion">
                                    <div className="card-body">
                                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two" style={{width:"100%",height:"30px", position:"relative",left:"450px",top:"100px",boxShadow:"none"}}>
                                 <div className="card-header" id="headingeight">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" dataToggle="collapse" dataTarget="#collapeeight" ariaExpanded="false" aria-controls="collapeeight">
                                       <span className="flaticon-question-3 faq_icon"></span>       What temperature kills the virus that causes COVID-19?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapeeight" className="collapse" ariaLabelledby="headingeight" dataParent="#accordion">
                                    <div className="card-body">
                                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="footer type_two" style={{backgroundImage: "url(../image/resources/footer-bg1.png)",height:"250px"}}>
               <div className="footer_layer" ></div>
               <div className="container" style={{height:"400px"}}>
                  <div className="row" style={{backgroundImage: "url(../image/resources/footer-bg1.png)",height:"1000px"}}>
                     <div className="col-lg-3 col-xs-12">
                        <div className="footer_widgets tp_two first">
                           <h3 className="widgets_title logo">
                              <a href="#"><img src={require("../image/home-1-logo-white.png").default} className="img-fluid" alt="logo"></img></a>
                           
                           </h3>
                           <div className="inner_widgets">
                              <p>A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19)</p>
                              <div className="social_media_icon">
                                 <ul className="clearfix">
                                    <li>
                                       <a href="#" className="has-tooltip">
                                          <span className="fa fa-facebook"></span>
                                          <div className="c-tooltip">
                                             <div className="tooltip-inner">Facebook</div>
                                          </div>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#" className="has-tooltip">
                                          <span className="fa fa-twitter"></span>
                                          <div className="c-tooltip">
                                             <div className="tooltip-inner">Twitter</div>
                                          </div>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#" className="has-tooltip">
                                          <span className="fa fa-linkedin"></span>
                                          <div className="c-tooltip">
                                             <div className="tooltip-inner">Linkedin</div>
                                          </div>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="footer_widgets tp_two">
                           <h3 className="widgets_title">Usefull links</h3>
                           <div className="inner_widgets">
                              <ul>
                                 <li><a href="#">Situation Reports</a></li>
                                 <li><a href="#">Prevention</a></li>
                                 <li><a href="#">Coronavirus Symptoms</a></li>
                                 <li><a href="#">Donor & Partners</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12">
                        <div className="footer_widgets tp_two">
                           <h3 className="widgets_title">Contact us</h3>
                           <div className="inner_widgets">
                              <div className="text_box">
                                 <span className="fa fa-map-marker" style={{padding:"0 0 0 200px"}}></span>
                                 <p>Ajay Kumar Garg Engineering College</p>
                              </div>
                              <div className="text_box">
                                 <span className="fa fa-phone" style={{padding: "0 0 0 200px"}}></span>
                                 <p>901387238</p>
                              </div>
                        
                              
                           </div>
                        </div>
                     </div>
                  <div className="footer_last type_two">
                     <div className="row">
                        <div className="col-lg-12 text-center">
                           <p>Copyright © 2020 Corano. All Rights Reserved.</p>
                        </div>
                     </div>
                  </div>
               </div></div>
            </section>
            {/* <!-------------main-centent-end---------------> */}
         </main>
         {/* <!-------------pagewapper-end---------------> */}
      </div>
      {/* <!--Scroll to top--> */}
      <a href="#" id="scroll" className="default-bg" style={{display: "inline"}}><span className="fa fa-angle-up"></span></a>
      {/* <!---------mbile-navbar-----> */}
      <div className="bsnav-mobile">
         <div className="bsnav-mobile-overlay"></div>
         <div className="navbar">
            <button className="navbar-toggler toggler-spring mobile-toggler"><span className="fa fa-close"></span></button>
         </div>
      </div>
      {/* <!---------mbile-navbar-----> */}
      {/* <!-- /.side-menu__block --> */}
      <div className="side-menu__block">
         <div className="side-menu__block-overlay custom-cursor__overlay">
            <div className="cursor"></div>
            <div className="cursor-follower"></div>
         </div>
         {/* <!-- /.side-menu__block-overlay --> */}
         <div className="side-menu__block-inner">
            <div className="row">
               <div className="col-lg-12">
                  <div className="logo_site">
                     <a href="index.html"><img src={require("../../assets/image/home-1-logo-white.png").default} alt="logo" /></a>
                  </div>
                  <div className="side-menu__block-contact">
                     <h2>Quick Online Consultancy Only on Few Minutes</h2>
                     <div className="form_outer">
                        <form>
                           <div className="from_group">
                              <input type="text" name="name" placeholder="Name" />
                           </div>
                           <div className="from_group">
                              <input type="email" name="email" placeholder="Email" />
                           </div>
                           <div className="from_group">
                              <input type="text" name="phone" placeholder="Phone" />
                           </div>
                           <div className="from_group">
                              <textarea rows="4" placeholder="Share Your Thoughts"></textarea>
                           </div>
                           <div className="from_group">
                              <button  className="theme_btn tp_two" type="submit">Contact Us</button>
                           </div>
                        </form>
                     </div>
                  </div>
                  {/* <!-- /.side-menu__block-contact --> */}
                  <div className="side-menu__block-contact">
                     <h3 className="side-menu__block__title">Contact Us</h3>
                     {/* <!-- /.side-menu__block__title --> */}
                     <ul className="side-menu__block-contact__list">
                        <li className="side-menu__block-contact__list-item">
                           <i className="fa fa-map-marker"></i> Ajay Kumar garg Engineering College
                        </li>
                        {/* <!-- /.side-menu__block-contact__list-item --> */}
                        <li className="side-menu__block-contact__list-item">
                           <i className="fa fa-phone"></i>
                           <a href="tel:526-236-895-4732">901302983</a>
                        </li>
                        {/* <!-- /.side-menu__block-contact__list-item --> */}
                        <li className="side-menu__block-contact__list-item">
                           <i className="fa fa-envelope"></i>
                           <a href="mailto:example@mail.com">example@mail.com</a>
                        </li>
                        {/* <!-- /.side-menu__block-contact__list-item --> */}
                     </ul>
                     {/* <!-- /.side-menu__block-contact__list --> */}
                  </div>
                  {/* <!-- /.side-menu__block-contact --> */}
                  <p className="side-menu__block__text site-footer__copy-text"><a href="#">corano</a> <i className="fa fa-copyright"></i> 2020 All Right Reserved</p>
               </div>
            </div>
            {/* <!-- /.side-menu__block-inner --> */}
         </div>
      </div>
      {/* <!-- /.side-menu__block --> */}
      {/* <!-- /.search-popup --> */}
      <div className="search-popup">
         <div className="search-popup__overlay custom-cursor__overlay">
            <div className="cursor"></div>
            <div className="cursor-follower"></div>
         </div>
         {/* <!-- /.search-popup__overlay --> */}
         <div className="search-popup__inner">
            <form action="#" className="search-popup__form">
               <input type="text" name="search" placeholder="Type here to Search...."></input>
               <button type="submit"><i className="flaticon-magnifying-glass"></i></button>
            </form>
         </div>
         {/* <!-- /.search-popup__inner --> */}
      </div>
      {/* <!-- /.search-popup -->
      <!-----------------------------------script--------------------------------------> */}
      <script src="../js/jquery.js"></script>
     
      <script src="../js/owl.js"></script>
      <script src="../js/wow.js"></script>
      <script src="../js/custom.js"></script>
     {/* <!-- <script src={require("../js/app.js"></script> --> */}
   </>
    )
}

export default Home;