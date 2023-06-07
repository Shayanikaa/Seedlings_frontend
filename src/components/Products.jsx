import React,{ useState, useEffect }  from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../img/nurser_logo.jpg"
import { faGrip as grid} from '@fortawesome/free-solid-svg-icons';
import { faStar as star } from '@fortawesome/free-solid-svg-icons';
import { faUser as profile } from '@fortawesome/free-solid-svg-icons';
import { faList as list} from '@fortawesome/free-solid-svg-icons';
import "../styles/products.css"


function Products() {
 const [view, setview] = useState(false);
  const [user, setUser] = useState([]);
  const [slider, setslider] = useState(0);
 // const [product, setProduct] = useState(null);
  //const [productId, setProductId] = useState('');
 // const [filter, setfilter] = useState('');
  //const [currentData, setcurrentData] = useState([])
  const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
  
  
    const handleClick = async (id) => {
      console.log("id is"+id);
      //setProductId(id);
      //console.log(productId);
      const response = await fetch(`https://seedlingsbackend.onrender.com/products/${id}`);
      console.log(response);
    const data = await response.json();
    //setProduct("");
    };
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
      return fetch("https://seedlingsbackend.onrender.com/products")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
      fetchData();
  }, [])


 
    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setLoggedIn(false);
        navigate("/");
    }
    const handleOnChange = (event)=>{
      setslider(event.target.value);
  }

 // function handleFilter(name) {
   // setfilter(name);
   // console.log(filter);
  //}

  //useEffect(() => {
    //if (filter.length > 0) {
      //setcurrentData(user.filter((item) =>
        //item.category.toLowerCase()===filter.toLowerCase()
      //));
    //}
    //else{
      //setcurrentData(user);
    //}
    
  //}, [])
  
  const handleView = () => {
    alert("sorry currently not available")
  }

  const userguid =()=>{
    alert("added to cart")
  }
  console.log(user)

 
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
<div className='product'>
  <div className='filters'>
    <div className='searchb'>
    <nav className="filter-navbar">
  <form className="searchform">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="mybutton btn-outline-success my-2 my-sm-0" type="submit" onClick={handleView }>Search</button>
  </form>
  <div className='filterlist'>
    <ul>
      <h5>Category</h5>
      <li><Link to="/products/Flower" style={{ color: '#000000', textDecoration:'none'}}>Flower Plant</Link></li>
      <li><Link to="/products/Indoreplants" style={{ color: '#000000', textDecoration:'none'}}>Indoor Plant</Link> </li>
      <li><Link to="/products/Cactus" style={{ color: '#000000', textDecoration:'none'}}>Cactus</Link></li>
    </ul>
    <div className='companydropdown'>
    <h5>Company</h5>
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Company
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item" type="button"><Link to="/products/Flower" style={{ color: '#000000', textDecoration:'none'}} >Flower seller</Link></button>
    <button className="dropdown-item" type="button"><Link to="/products/Indoreplants" style={{ color: '#000000', textDecoration:'none'}}>Indoor seller</Link></button>
    <button className="dropdown-item" type="button"><Link to="/products/Cactus" style={{ color: '#000000', textDecoration:'none'}}>Cactus seller</Link></button>
  </div>
</div>
  </div>
  <div className='priceRange'>
      <h5>Price</h5>
      <div className="loading-bar"> 
            <input type="range" min="1" max="2000" step="1" value={slider} onChange={handleOnChange} className="myrange"/>
            <p>₹{slider}</p> 
          </div> 
    </div>
    <div className='mybtn'>
      <button onClick={handleView }>Apply</button>
    </div>
  </div>
</nav>
    </div>
  </div>
  <div className='product-header'>
    <nav>
      <div className='prodnav'>
        <div className='icons'>
       {view === true ? (
        <>
        <button className='ibut' onClick={()=> setview(false)}><FontAwesomeIcon icon={grid} className='grid'/></button>
        </>
       ): (
        <>
        <button className='ibut' onClick={()=> setview(true)}><FontAwesomeIcon icon={list} className='list'/></button>
        </>
       )}
        </div>
      </div>
    </nav>
    <div className='main-products'>
    {view === false ? (
        <>
        <div className= 'row'>
      {user && user.length > 0 && user.map((userObj, index) => {
        return(
          <div key={index} className='col-md-4 mb-4'>
      <div class="mycard" style={{width:'20rem'}}>
        <img  className='mycardimgtop' key={index} src={userObj.image}  alt="photos" />
  <div class="card-body">
    <h5 class="card-title">{userObj.name}</h5>
    <h5 class="card-text">₹{userObj.price}</h5>
    <FontAwesomeIcon icon={star}/>{userObj.rating} rating
    <br />
    <br/>
    <button class=" mybtnn" onClick={()=>{
     // setProductId(userObj._id);
      userguid()
      handleClick(userObj._id);
    }}>Add to Cart</button>
  </div>
</div>
      </div>

        )
  
      })}
      
      </div>
      
        </>
       ): (
        <>
         <div className='col'>
      {user && user.length > 0 && user.map((userObj, index) => {
        return(
          <div key={index} className='col-md-4 mb-4'>
      <div className="mycardscolu">
        <img  className='mycardimgtop' key={index} src={userObj.image}  alt="photos" />
  <div className="mycardbody">
    <h5 className="card-title">{userObj.name}</h5>
    <h6 className='descrip'>{userObj.description}</h6>
    <h5 className="card-text">₹{userObj.price}</h5>
    <FontAwesomeIcon icon={star}/>{userObj.rating} rating
    <br />
    <br />
    <button className=" mybtnn"  onClick={()=>{
     // setProductId(userObj._id);
      handleClick();
    }}> Add to Cart</button>
  </div>
</div>
      </div>

        )
      })}

      </div>
        </>
       )}
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
    </>
  )
}

export default Products