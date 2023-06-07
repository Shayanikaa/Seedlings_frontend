import React, { useState, useEffect } from 'react'
import logo from "../img/nurser_logo.jpg"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../styles/Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash as trash} from '@fortawesome/free-solid-svg-icons';


function Cart() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [cart, setcart] = useState([]);
    const[increment, setIncrement] = useState(false);
    const navigate = useNavigate();
    var total = 1;
    var minus = 0;
    const incrementcount =(id,qty,cost)=>{
      console.log("cost is"+cost+"qty is"+qty);
        setIncrement(true);
          total = total+1;
          var totalcost = cost*total;
          qty = qty+1;        
        fetch(`http://localhost:5000/cart/update/${id}/${qty}/${totalcost}`, {
            method: "PUT",
        })
        .then(() => fetchData());
        alert("Product Updated in Cart");
    }
    const decrementcount =(id,qty,cost)=>{
      console.log("cost is"+cost+"qty is"+qty);
        setIncrement(true);
          minus = minus+1;
          var sum = total-minus;
          cost = cost*sum;
          qty = qty-1;        
        fetch(`http://localhost:5000/cart/update/${id}/${qty}/${cost}`, {
            method: "PUT",
        })
        .then(() => fetchData());
        alert("Product Updated in Cart");
    }
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }
        else {
            setLoggedIn(false);
        }
    }, []);
 
    const fetchData = () => {
        return fetch("https://seedlingsbackend.onrender.com/cart")
            .then((response) => response.json())
            .then((data) => setcart(data));
    }
  
    useEffect(() => {
        fetchData();
    }, [])
    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setLoggedIn(false);
        navigate("/");
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE",
        }).then(() => fetchData());
        alert("Product Deleted from Cart");
    }

    useEffect(() => {
        fetch('https://seedlingsbackend.onrender.com/products') 
          .then(response => response.json())
          .catch(error => console.error(error));
      }, []);
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
                        </>)}
    </div>
</nav>
<div className='main-products'>
    <div className='col'>
        {cart.length === 0 && <h1 className='textcenter'>No Products in Cart</h1>}
    {cart && cart.length > 0 && cart.map((cartObj, index) => {
        return(
          <div key={index} className='col-md-4 mb-4'>
      <div class="mycardscolu" >
        <img  className='mycardimgtop' key={index}  src={cartObj.image} alt="photos" />
  <div class="mycardbody">
    <div className='namecard'>
    <h5 class="card-title">{cartObj.name}</h5>
    <FontAwesomeIcon icon={trash} onClick={()=>{handleDelete(cartObj._id)}} className='trash'  />
    </div>
    <h6 className='descrip'>{cartObj.description}</h6>
    <div className='iconbut'>
        <button onClick={()=>{incrementcount(cartObj._id,cartObj.quantity,cartObj.price)}}>+</button>
       <button>{increment === true ? (cartObj.quantity) : (cartObj.quantity)}</button>
        <button onClick={()=>{
            decrementcount(cartObj._id,cartObj.quantity,cartObj.price);
        }}> - </button>
    </div>
    <br />
    <h5 class="card-text">₹{increment === true ? (cartObj.price * total) : (cartObj.price)}</h5>
    <button class=" mybtnn"><Link to="/thankyou"> Buy Now</Link></button>
  </div>
</div>
      </div>

        )
      })}
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
    </>
  )
}

export default Cart