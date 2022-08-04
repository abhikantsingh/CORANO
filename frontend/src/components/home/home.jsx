//   import a from "../../../../frontend/public/assets/image"
import image1 from "../../images/home-1-logo.png"
// import image2 from "../../images/"


const Home = () =>
{
    return(
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
         {/* <!--End Preloader -->
         <!--Header--> */}
         <header className="header_v2">
            <section className="header_top">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-8">
                        <div className="row">
                           <div className="col-lg-3 col-md-3">
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
                     <a className="navbar-brand" href="index.html"><img src={image1} className="img-fluid" alt="img"></img></a>
                     <button className="navbar-toggler toggler-spring"><span className="navbar-toggler-icon"></span></button>
                     <div className="collapse navbar-collapse scroll-nav">
                        <ul className="navbar-nav navbar-mobile navbar_left  ml-auto" id="nav">
                           <li className="nav-item nav_item active  dropdown">
                              <a className="nav-link link_hd" href="#">  Home  </a>
                              <ul className="navbar-nav submenu">
                                 <li className="nav-item"><a className="nav-link" href="index.html">Home Default 01</a></li>
                                 <li className="nav-item"><a className="nav-link" href="index-2.html">Home Default 02 <span className="new_page">new</span></a></li>
                                 <li className="nav-item"><a className="nav-link" href="index-3.html">Home Default 03 <span className="new_page">new</span></a></li>
                                 <li className="nav-item"><a className="nav-link" href="one-page-index-1.html">Home Onepage Version</a></li>
                                 <li className="nav-item"><a className="nav-link" href="rtl/index.html" target="_blank">Home Default RTL </a></li>
                                 <li className="nav-item"><a className="nav-link" href="rtl/one-page-index-1.html">Home Onepage RTL</a></li>
                              </ul>
                           </li>
                           <li className="nav-item nav_item"><a className="nav-link link_hd" href="about.html">About </a></li>
                           <li className="nav-item nav_item dropdown">
                              <a className="nav-link link_hd" href="#">  Prevention  </a>
                              <ul className="navbar-nav submenu">
                                 <li className="nav-item"><a className="nav-link" href="prevention.html">Prevention</a></li>
                                 <li className="nav-item"><a className="nav-link" href="prevention-single.html">Prevention Detail</a></li>
                              </ul>
                           </li>
                           <li className="nav-item nav_item"><a className="nav-link link_hd" href="team.html">Doctors</a></li>
                           <li className="nav-item nav_item"><a className="nav-link link_hd" href="faq.html">Faq's</a></li>
                           <li className="nav-item nav_item dropdown">
                              <a className="nav-link link_hd" href="#">  Blog  </a>
                              <ul className="navbar-nav submenu">
                                 <li className="nav-item dropdown">
                                    <a className="nav-link arrow" href="#">Blog Grid </a>
                                    <ul className="navbar-nav child_menu">
                                       <li className="nav-item"><a className="nav-link" href="blog-three-column.html">Blog Three Column</a></li>
                                       <li className="nav-item"><a className="nav-link" href="blog-four-column.html">Blog Four Column</a></li>
                                       <li className="nav-item"><a className="nav-link" href="blog-single.html">Blog With Sidebar</a></li>
                                    </ul>
                                 </li>
                                 <li className="nav-item dropdown">
                                    <a className="nav-link arrow" href="#">Blog Details </a>
                                    <ul className="navbar-nav child_menu">
                                       <li className="nav-item"><a className="nav-link" href="blog-detail-sidebar.html">With Sidebar</a></li>
                                       <li className="nav-item"><a className="nav-link" href="blog-detail.html">Without Sidebar</a></li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           {/* <!--erase--> */}
                           {/* <!--<li className="nav-item nav_item dropdown">
                              <a className="nav-link link_hd" href="#">  Shop  </a>
                              <ul className="navbar-nav submenu">
                                 <li className="nav-item"><a className="nav-link" href="shop.html">Shop</a></li>
                                 <li className="nav-item"><a className="nav-link" href="product-details.html">Product Details</a></li>
                                 <li className="nav-item"><a className="nav-link" href="shop-cart.html">cart</a></li>
                                 <li className="nav-item"><a className="nav-link" href="checkout.html">checkout</a></li>
                              </ul>
                           </li>--> */}
                           {/* <li className="nav-item nav_item"><a className="nav-link link_hd" href="contact.html">Contact</a></li>
                        </ul>
                       <!-- <ul className="navbar-nav navbar-mobile navbar_right">
                           <li className="nav-item  dropdown">
                              <a href="#" className="cart_btn"><i className="flaticon-add-to-cart icon"></i></a>
                           </li>
                           <li className="nav-item  dropdown">
                              <a href="#" className="topbar-one__search search-popup__toggler"><i className="flaticon-search icon"></i></a>
                           </li>--> */}
                          {/* <!--<li className="nav-item  dropdown">
                           
                              <a href="#" className="site-header__sidemenu-nav side-menu__toggler">
                                 <span className="site-header__sidemenu-nav-line"></span>
                                
                                 <span className="site-header__sidemenu-nav-line"></span>
                                 
                                 <span className="site-header__sidemenu-nav-line"></span>
                                
                              </a>
                           </li>-->  */}
                        </ul>
                     </div>
                  </div>
               </div>
            </section>
         </header>
         {/* <!--Header--> */}
         <main className="main-content">
            {/* <!------main-content------>
            <!------main-slider------> */}
            <section className="main-slider">
               <div className="main-slider-carousel main_slider owl-carousel owl-theme">
                  <div className="slide one">
                     <div className="container text-left">
                        <div className="row">
                           <div className="col-lg-7 d-flex">
                              <div className="content">
                                 <h6>Stabilitech's COVID-19 Vaccine</h6>
                                 <h1> Protective measures against the new coronavirus</h1>
                                 <div className="text">Regularly Washing your hands is best way to protect again catching COVID - 19 than wearing gloves</div>
                                 <div className="link-box">
                                    <a href="#" className="theme_btn tp_two">Doctors</a>
                                    <a href="#" className="theme_btn tp_one two">Contact us</a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-5">
                              <div className="slider_image slide_image_right clearfix">
                                 <div className="image image_1 floating">
                                    <img src="assets/image/main-slider/home-2-slider-1-1.png" className="img-fluid" alt="img" />
                                 </div>
                                 <div className="image image_2 beat">
                                    <img src="assets/image/main-slider/home-2-slider-1-2.png" className="img-fluid" alt="img" />
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
                              <div className="slider_image slide_image_left clearfix">
                                 <div className="image image_1 floating">
                                    <img src="assets/image/main-slider/home-2-slider-2-1.png" className="img-fluid" alt="img" />
                                 </div>
                                 <div className="image image_2 beat">
                                    <img src="assets/image/main-slider/home-2-slider-1-2.png" className="img-fluid" alt="img" />
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
                              <div className="slider_image slide_image_right clearfix">
                                 <div className="image image_1 floating">
                                    <img src="assets/image/main-slider/home-2-slider-3-1.png" className="img-fluid" alt="img" />
                                 </div>
                                 <div className="image image_2 beat">
                                    <img src="assets/image/main-slider/home-2-slider-1-2.png" className="img-fluid" alt="img" />
                                 </div>
                                 <div className="image image_3 rotate-me">
                                    <img src="assets/image/main-slider/home-2-slider-3-2.png" className="img-fluid" alt="img" />
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
                              <img src="assets/image/svg/working-at-home.svg" className="img-fluid svg_image" alt="home" /> <span className="flaticon-virus"></span>
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
                              <img src="assets/image/svg/mask-2.svg" className="img-fluid svg_image" alt="home" /> <span className="flaticon-virus"></span>
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
                              <img src="assets/image/svg/sport-team.svg" className="img-fluid svg_image" alt="home" /> <span className="flaticon-virus"></span>
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
                              <img src="assets/image/svg/smartphone.svg" className="img-fluid svg_image" alt="svg" /> <span className="flaticon-virus"></span>
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
                              <img src="assets/image/resources/about-3.png" className="img-fluid" alt="img" />
                           </div>
                           <div className="image image_4">
                              <img src="assets/image/resources/about-4.png" className="img-fluid" alt="img" />
                           </div>
                           <div className="image image_1">
                              <img src="assets/image/resources/about-1.png" className="img-fluid" alt="img" />
                           </div>
                           <div className="image image_2">
                              <img src="assets/image/resources/about-2.png" className="img-fluid" alt="img" />
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="heading tp_one  icon_dark">
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
                           <a href="#" className="theme_btn tp_two">Read More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="symptoms type_two">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6">
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
                           <img src="assets/image/resources/Sym-2.png" className="img-fluid" alt="img" />
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
                  <div className="row">
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
                              <img src="assets/image/svg/spongewash.svg" className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">Wash your hands often with soap and water</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="100ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src="assets/image/svg/man-touch.svg" className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">Avoid touching your eyes, nose, and mouth</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src="assets/image/svg/no.svg" className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">Avoid close contact with people who are sick</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="300ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src="assets/image/svg/sorethroat.svg" className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">Stay home if you are sick,  get medical care</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="400ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src="assets/image/svg/masksick.svg" className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">Cover your mouth and nose with a tissue</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="500ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src="assets/image/svg/handwashwashing.svg" className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">Immediately wash your hands with  water</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="600ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src="assets/image/svg/maskmedical.svg" className="img-fluid svg_icon" alt="img" />
                           </div>
                           <h2><a href="prevention-single.html">If you are sick: You should wear a facemask</a></h2>
                           <a href="prevention-single.html" className="read_more tp_two">Read More <span className="flaticon-arrow"></span></a>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="icon_box type_three wow fadeIn" data-wow-delay="700ms" data-wow-duration="1500ms">
                           <div className="icon_box">
                              <img src="assets/image/svg/object-hygiene.svg" className="img-fluid svg_icon" alt="img" />
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
                  <div className="row">
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
                                 <img src="assets/image/resources/best-doctors1.jpg" className="img-fluid" alt="best-doctors" />
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
                                 <img src="assets/image/resources/best-doctors2.jpg" className="img-fluid" alt="best-doctors" />
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
                                 <img src="assets/image/resources/best-doctors3.jpg" className="img-fluid" alt="best-doctors" />
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
            {/* <!--erase--> */}
           {/* <!-- <section className="blog type_two">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="heading text-center icon_dark tp_one">
                           <h6>Blog</h6>
                           <h1>Worldwide Latest News </h1>
                           <span className="flaticon-virus icon"></span>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-12 padding_zero">
                        <div className=" owl-carousel three_items">
                           <div className="blog_box type_two">
                              <div className=" image_box">
                                 <img src="assets/image/resources/blog-1.jpg" className="img-fluid" alt="img" />
                                 <div className="overlay">
                                    <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" data-fancybox="gallery" data-caption="">
                                    <span className="flaticon-video-camera"></span>
                                    </a>
                                 </div>
                              </div>
                              <div className="content_box">
                                 <a href="#" className="category">Viruses</a>
                                 <div className="title_box">
                                    <div className="post-date">
                                       <p><span className="fa fa-clock-o"></span>01 Jan 2020</p>
                                    </div>
                                    <h2><a href="blog-single.html">How we can tak care of our health against  </a></h2>
                                 </div>
                                 <p>Masks are effective only when used in combination with frequent .</p>
                                 <a href="blog-single.html" className="read_more tp_two">Read More<span className="flaticon-arrow"></span></a>
                              </div>
                           </div>
                           <div className="blog_box type_two">
                              <div className="image_box">
                                 <img src="assets/image/resources/blog-2.jpg" className="img-fluid" alt="img" />
                                 <div className="overlay">
                                    <a href="assets/image/resources/blog-3.jpg" data-fancybox="gallery" data-caption="">
                                    <span className="flaticon-image zoom_icon"></span>
                                    </a>
                                 </div>
                              </div>
                              <div className="content_box">
                                 <a href="#" className="category">Viruses</a>
                                 <div className="title_box">
                                    <div className="post-date">
                                       <p><span className="fa fa-clock-o"></span>01 Jan 2020</p>
                                    </div>
                                    <h2><a href="blog-single.html">CDC has deployed multidisciplinary teams </a></h2>
                                 </div>
                                 <p>Masks are effective only when used in combination with frequent .</p>
                                 <a href="blog-single.html" className="read_more tp_two">Read More<span className="flaticon-arrow"></span></a>
                              </div>
                           </div>
                           <div className="blog_box type_two">
                              <div className="image_box">
                                 <img src="assets/image/resources/blog-4.jpg" className="img-fluid" alt="img" />
                                 <div className="overlay">
                                    <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" data-fancybox="gallery" data-caption="">
                                    <span className="flaticon-video-camera"></span>
                                    </a>
                                 </div>
                              </div>
                              <div className="content_box">
                                 <a href="#" className="category">Viruses</a>
                                 <div className="title_box">
                                    <div className="post-date">
                                       <p><span className="fa fa-clock-o"></span>01 Jan 2020</p>
                                    </div>
                                    <h2><a href="blog-single.html">Americans overseas who have been affected by COVID-19.  </a></h2>
                                 </div>
                                 <p>Masks are effective only when used in combination with frequent .</p>
                                 <a href="blog-single.html" className="read_more tp_two">Read More<span className="flaticon-arrow"></span></a>
                              </div>
                           </div>
                           <div className="blog_box type_two">
                              <div className="image_box">
                                 <img src="assets/image/resources/blog-3.jpg" className="img-fluid" alt="img" />
                                 <div className="overlay">
                                    <a href="assets/image/resources/blog-3.jpg" data-fancybox="gallery" data-caption="">
                                    <span className="flaticon-image zoom_icon"></span>
                                    </a>
                                 </div>
                              </div>
                              <div className="content_box">
                                 <a href="#" className="category">Viruses</a>
                                 <div className="title_box">
                                    <div className="post-date">
                                       <p><span className="fa fa-clock-o"></span>01 Jan 2020</p>
                                    </div>
                                    <h2><a href="blog-single.html">How we can tak care of our health against  </a></h2>
                                 </div>
                                 <p>Masks are effective only when used in combination with frequent .</p>
                                 <a href="blog-single.html" className="read_more tp_two">Read More<span className="flaticon-arrow"></span></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>--> */}
            <section className="contact_form faq type_two">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6 col-md-12">
                        <div className="contact_form_box type_two">
                           <h2>Contact With Us</h2>
                           <form>
                              <div className="row">
                                 <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                       <label> Name</label>
                                       <input type="text" name="form_name" placeholder="" className="form-control">
                                          </input>
                                    </div>
                                 </div>
                                 <div className="col-lg-6 col-md-6">
                                    <div className="form-group"> <label> Email</label>
                                       <input type="email" name="form_email" placeholder="" className="form-control"></input>
                                    </div>
                                 </div>
                                 <div className="col-lg-6 col-md-6">
                                    <div className="form-group"> <label> Phone</label>
                                       <input type="text" name="form_phone" placeholder="" className="form-control"></input>
                                    </div>
                                 </div>
                                 <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                       <label>Country of Travel</label>
                                       <select name="country" id="country">
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
                                       <textarea name="form_message" placeholder="" className="form-control textarea required" rows="3"></textarea>
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
                     <div className="col-lg-6">
                        <div className="faq_box_outer">
                           <div className="heading tp_one">
                              <h6>Faq"s</h6>
                              <h1>Frequently Ask Questions</h1>
                              <span className="flaticon-virus icon"></span>
                           </div>
                           <h2></h2>
                           <div id="accordion">
                              <div className="card faq_box type_two">
                                 <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                       <button className="faq_btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       <span className="flaticon-question-3 faq_icon"></span>  What is a novel coronavirus? 
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                       A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two">
                                 <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       <span className="flaticon-question-3 faq_icon"></span>  Why might someone blame or avoid individuals and groups?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two">
                                 <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       <span className="flaticon-question-3 faq_icon"></span>  Can someone who has had COVID-19?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two">
                                 <div className="card-header" id="headingFours">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                       <span className="flaticon-question-3 faq_icon"></span>    Why is the disease being called coronavirus disease COVID-19?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseFour" className="collapse" aria-labelledby="headingFours" data-parent="#accordion">
                                    <div className="card-body">
                                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two">
                                 <div className="card-header" id="headingFive">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                       <span className="flaticon-question-3 faq_icon"></span>    How can people help stop stigma related to COVID-19?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                    <div className="card-body">
                                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two">
                                 <div className="card-header" id="headingSix">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                       <span className="flaticon-question-3 faq_icon"></span>   Can someone who has had COVID-19 spread  to others?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                                    <div className="card-body">
                                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two">
                                 <div className="card-header" id="headingSeven">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                       <span className="flaticon-question-3 faq_icon"></span>        Will warm weather stop the outbreak of COVID-19?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                                    <div className="card-body">
                                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                 </div>
                              </div>
                              <div className="card faq_box type_two">
                                 <div className="card-header" id="headingeight">
                                    <h5 className="mb-0">
                                       <button className="faq_btn collapsed" data-toggle="collapse" data-target="#collapeeight" aria-expanded="false" aria-controls="collapeeight">
                                       <span className="flaticon-question-3 faq_icon"></span>       What temperature kills the virus that causes COVID-19?
                                       </button>
                                    </h5>
                                 </div>
                                 <div id="collapeeight" className="collapse" aria-labelledby="headingeight" data-parent="#accordion">
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
            <section className="footer type_two">
               <div className="footer_layer" style={{backgroundImage: "url(assets/image/resources/footer-bg1.png)"}}></div>
               <div className="container">
                  <div className="row">
                     <div className="col-lg-3 col-xs-12">
                        <div className="footer_widgets tp_two first">
                           <h3 className="widgets_title logo">
                              <a href="index.html"><img src="assets/image/home-1-logo-white.png" className="img-fluid" alt="logo"></img></a>
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
                                 <li><a href="#">Advice For Public</a></li>
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
                                 <span className="fa fa-map-marker"></span>
                                 <p>Ajay Kumar Garg Engineering College</p>
                              </div>
                              <div className="text_box">
                                 <span className="fa fa-phone"></span>
                                 <p>901387238</p>
                              </div>
                              {/* <!--<div className="text_box">
                                 <span className="fa fa-clock-o"></span>
                                 <p>Mon - Fri: 09.00 to 18.00</p>
                              </div>--> */}
                              <div className="text_box">
                                 <span className="fa fa-envelope"></span>
                                 <p>support@corano.com</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <!--<div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                        <div className="footer_widgets tp_two">
                           <h3 className="widgets_title">Newsletter</h3>
                           <div className="inner_widgets">
                              <p className="sub_description">Subscribe Us &amp; Recive Our Offers and Updates i Your Inbox Directly.</p>
                              <form>
                                 <input type="email" name="email" placeholder="Email Address..." />
                                 <button className="sub_btn" type="submit"><span className="flaticon-paper-plane"></span></button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>--> */}
                  <div className="footer_last type_two">
                     <div className="row">
                        <div className="col-lg-12 text-center">
                           <p>Copyright © 2020 Corano. All Rights Reserved.</p>
                        </div>
                     </div>
                  </div>
               </div>
               </div>
            </section>
            {/* <!-------------main-centent-end---------------> */}
         </main>
         {/* <!-------------pagewapper-end---------------> */}
      </div>
      {/* <!--Scroll to top--> */}
      <a href="#" id="scroll" className="default-bg" style={{display:"inline"}}><span className="fa fa-angle-up"></span></a>
      {/* <!---------mbile-navbar-----> */}
      <div className="bsnav-mobile">
         <div className="bsnav-mobile-overlay"></div>
         <div className="navbar">
            <button className="navbar-toggler toggler-spring mobile-toggler"><span className="fa fa-close"></span></button>
         </div>
      </div>
      
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
                     <a href="index.html"><img src="assets/image/home-1-logo.png" alt="logo" /></a>
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
                        {/* <!--erase--> */}
                       {/* <!-- <li className="side-menu__block-contact__list-item">
                           <i className="fa fa-clock-o"></i> Week Days: 09.00 to 18.00 Sunday: Closed
                        </li>--> */}
                        {/* <!-- /.side-menu__block-contact__list-item --> */}
                     </ul>
                     {/* <!-- /.side-menu__block-contact__list --> */}
                  </div>
                  {/* <!-- /.side-menu__block-contact --> */}
                  <p className="side-menu__block__text site-footer__copy-text"><i className="fa fa-copyright"></i> 2020 All Right Reserved</p>
               </div>
            </div>
            {/* <!-- /.side-menu__block-inner --> */}
         </div>
      </div>
    
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
      {/* <!-- /.search-popup --> */}
      {/* <!-----------------------------------script--------------------------------------> */}
    
      </>
    )
}
export default Home;