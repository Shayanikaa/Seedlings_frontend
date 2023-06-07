import React,  { useState, useEffect } from 'react'
import "../styles/Navbar.css"
import homeImg from "../img/homeImg.jpg"
import picture2 from "../img/picture2.jpg"
import logo from "../img/nurser_logo.jpg"
import ourjourneyimage from "../img/Our-journey-image.jpg"
import ourjourneyimage2 from "../img/our-journey-image2.jpg"
import plant2 from "../img/plant-product.jpg"
import plant1 from "../img/plant-product1.jpg"
import plant3 from "../img/plant-product3.jpg"
import plnat4 from "../img/plant-product4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import {  faIndianRupeeSign  as rupeesign} from '@fortawesome/free-solid-svg-icons';
import chosseusImage from "../img/chooseusImage.jpg"
import { faUser as profile } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
 
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }
        else {
            setLoggedIn(false);
        }
    }, []);
 
 
    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setLoggedIn(false);
        navigate("/");
    }
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light ">
  <img src={logo} alt="photos" className='logoimg' />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item px-2 active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item px-2 active">
        <Link className="nav-link" to="/products">Products</Link>
      </li>
      <li className="nav-item px-2">
        <Link className="nav-link active" to="https://linktr.ee/_seedlings">About us</Link>
      </li>
      <li className="nav-item px-2">
        <Link className="nav-link active" to="/contact">Contact us</Link>
      </li>
    </ul>
  </div>
  <div className="button-group">
  {!loggedIn ? (<>
                            <button className='btn1' type='submit'><Link to="/signin"> Signup</Link></button>
                            <button className='btn2' type='submit'><Link to="/login">Login</Link></button>
                        </>
                        ) : (<><button className='btn2' onClick={handleLogout}>LOG OUT</button>
                        <div className='dropdown'><button className='dropbtn'>
                            <FontAwesomeIcon icon={profile} className='profile'/>
                            <div class="dropdown-content">
   <h4>welcome!</h4>
    <Link to="/cart">Your Cart</Link>
  </div>
    </button></div></>)}
    </div>
</nav>
<div className="body">
    <div className="main-pictures">
    <div className="picture1">
        <img src={homeImg} alt="Photos" />
    </div>
    <div className="headings">
        <h1>Make your day feel good with beautiful plants
        </h1>
    </div>
    <div className="text-part">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam, alias, cumque vel magni autem quis qui, harum nesciunt voluptatum velit molestiae fuga iste labore?</p>
    </div>
    <div className="picture2">
        <img src={picture2} alt="Photos" />
    </div>

    <div className="headings-button">
        <button className='head-btn'><Link to="/products">Get Started</Link></button>
    </div>
    </div>
    <div className="ourJourney-part">
      <div className="picture-part1">
        <img src={ourjourneyimage} alt="Photos" />
      </div>
     <div className="picture-part2">
        <img src={ourjourneyimage2} alt="Photos" />
      </div>
      <div className="ourjourney-heading">
        <h1>Our Journey</h1>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque consectetur <br/> id dolore nostrum incidunt amet doloribus quaerat quasi voluptatum.</p>
        <br />
        <button className='aboutbtn'><Link to="https://linktr.ee/_seedlings">Read More</Link></button>
      </div>
     </div>
     <div className="coleection-part">
      <h1>Choose your desired from our collection</h1>
      <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={plant1} alt="Photos"/>
    <button className="wishlist-button">
        <FontAwesomeIcon icon={solidHeart} />
      </button>
    <div className='product-price-p'>
    <p>Chinese Money Plant <br /><span><FontAwesomeIcon icon={rupeesign} />340.00</span></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={plant2} alt="Photos"/>
    <button className="wishlist-button">
        <FontAwesomeIcon icon={solidHeart} />
      </button>
    <div className='product-price-p'>
    <p>Chrysanthemum Plant <br /><span><FontAwesomeIcon icon={rupeesign} />240.00</span></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={plant3} alt="Photos"/>
    <button className="wishlist-button">
        <FontAwesomeIcon icon={solidHeart} />
      </button>
    <div className='product-price-p'>
    <p>Pancake Plant <br /><span><FontAwesomeIcon icon={rupeesign} />440.00</span></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={plnat4} alt="Photos"/>
    <button className="wishlist-button">
        <FontAwesomeIcon icon={solidHeart} />
      </button>
    <div className='product-price-p'>
    <p>Garden grape-hyacinth Plant <br /><span><FontAwesomeIcon icon={rupeesign} />540.00</span></p>
    </div>
  </div>
</div>
<button className='shop-now-button'><Link to="/products"> Shop all</Link></button>

     </div>
     <div className='chooseus-part'>
      <div className='imagepart'> 
      <img src={chosseusImage} alt="Photos" />
      </div>
      <div className='textpart'>
        <h1>Why Shop With Us?</h1>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Incidunt quisquam tenetur tempore sint dolores architecto. <br /> Officia, et, error cumque doloribus omnis cupiditate porro nisi nemo quis <br /> doloremque id nihil consequuntur rem reprehenderit maiores iure odio vero.</p>
        <br />
        <div className='ordered-list'>
         <div className='numbers'>
          <h5><b>01.</b></h5>
         </div>
          <div className='points'>
            <h3>Free</h3>
            <p>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit.</p>
          </div>
        </div>
        <br />
        <div className='ordered-list'>
         <div className='numbers'>
          <h5><b>02.</b></h5>
         </div>
          <div className='points'>
            <h3>Free</h3>
            <p>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
     </div>
     <div className='footer'>
        <div className='footer-part1'>
          <h3>Newsletter</h3>
          <br />
          <p>Lorem ipsum dolor sit amet.</p>
          <div className='email-box'>
      <input type="text" className="email" placeholder="Enter your email"/>
      <button type="submit" className="emailButton">Subscribe
     </button>
          </div>

        </div>
        <div className='footer-part2'>
          <h4>Navigation</h4>
          <br />
          <div className='ul-items'>
            <ul>
              <li>Home</li>
              <li>Product</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className='footer-part3'>
          <h4>About us</h4>
          <br />
          <div className='ul-items'>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Addresses</li>
            </ul>
          </div>

        </div>
        <div className='footer-part4'>
          <h4>Help</h4>
          <br />
          <div className='ul-items'>
            <ul>
              <li>Customer Servics</li>
              <li>FAQ</li>
              <li>We are hiring</li>
            </ul>
          </div>

        </div>
     </div>
</div>
   </>
  )
}

export default Navbar