import React ,{ useState, useContext }from 'react';
import { Form, Nav, Navbar ,FormControl, Button, Col} from 'react-bootstrap';
import './LoginPage.css';

import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFrameWork, handleGoogleSignIn, handleSignOut, handleSignInFacebook, createUserWithEmailAndPassword, signInWithEmailAndPassword} from './LoginManager';

import { AiOutlineUser,  AiOutlineMail} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Si1Password } from "react-icons/si";

const LoginPage = () => {
    const [newUser,setNewUser] = useState();
    const[user,setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    phone: '',

})
    initializeLoginFrameWork();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
        handleResponse(res, true);
    })
    }

    const facebookSignIn = () => {
      handleSignInFacebook()
      .then(res => {
        handleResponse(res, true);
      })
    }

    const signOut = () => {
        handleSignOut()
        .then(res => {
         handleResponse(res, false);
        })
       }

       const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect){
          history.replace(from);
        }
      }
    
      const handleBlur = (e) => {
        let isFieldValid = true;
        // console.log(e.target.name,e.target.value);
      
      if( e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      }
    
        if( e.target.name === 'password'){
          isFieldValid= /^[A-z][a-z0-9_-]{8,19}$/.test(e.target.value);
        }
      if(isFieldValid){
        const newUserInfo = {...user}
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
        }
      }
      const handleSubmit = (e) => {
        console.log(user.email, user.password);
        if(newUser && user.email && user.password){
          createUserWithEmailAndPassword(user.name, user.email, user.password)
          .then(res => {
            handleResponse(res, true);
          })
        }
        if(!newUser && user.email && user.password){
            signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
              handleResponse(res, true);
            })
        }
        e.preventDefault();
      }
    
    return (
        <div>
              <div className="navBar">
                <Navbar  sticky="top" variant="light" bg="transparent"  expand="lg" className="navBar">
                    <Navbar.Brand> <span className="logo"><img src="https://img.techpowerup.org/200916/logo336.png" alt="" className="logo"/> </span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Form inline>
                        <FormControl  type="text" placeholder="Search your Destination..." className="mr-sm-2 " id="input" />
                        </Form>
                        <Nav.Link text="white"  className="linkIt" href="#link">News</Nav.Link>
                        <Nav.Link className="linkIt" href="#link">Destination</Nav.Link>
                        <Nav.Link className="linkIt" href="#link">Blog</Nav.Link>
                        <Nav.Link className="linkIt" href="#link">Contact</Nav.Link>
                        <Button variant="warning">Login</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
       
           <div className="form-container">   
           <form onSubmit={handleSubmit} className="registration-form">
             <div className="input-container">
           <h4 className="account">Account</h4>

          {newUser && 
          <form>
          <div className="inputWithIcon inputIconBg">
          <input type="text"  className="input" onBlur={handleBlur} name="name" placeholder="First name" id="name"/>
            <i><AiOutlineUser className="icon" area-hidden="true"/></i>
          <input type="text"  className="input" onBlur={handleBlur} name="name" placeholder="Last name" id="name"/>
          </div>
          </form> 
          }

           <div className="inputWithIcon inputIconBg">
           <input type="text" className="input" onBlur={handleBlur} name="email" id="email" placeholder="Your email here" required/>
           <i><AiOutlineMail className="icon" area-hidden="true"/></i>
           </div>

           <div className="inputWithIcon inputIconBg">
            <input type="password"  className="input" onBlur={handleBlur} name="password" id="password" placeholder="Your Password here"  required/>
            <i><Si1Password className="icon" area-hidden="true"/></i>
          </div>

          {newUser && 
          <div className="inputWithIcon inputIconBg">
          <input type="password" onBlur={handleBlur}  className="input" name="password" id="password" placeholder="Re-type Password here"  required/>
          <i><Si1Password className="icon" area-hidden="true"/></i>
          </div>
          }
               <p><Link to={'/forgot'} className="account">forgot password</Link></p>
           <input className="account booking-btn" variant="warning" type="submit"  value={newUser ? 'Sign Up':'Log In'}/>
              <p>
              
              <span className="empty-account">{newUser ? <span style={{color: '#00e6ac'}}>Already have an account</span> : "Don't have an account,"}</span>
              {!newUser && 
               <span className="new-user-text" onClick={()=> setNewUser(!newUser)}>
                  create a new one
                  </span>
                  }
                 
                  {newUser &&
                  <span type="submit" className="new-user-text"  onClick={()=> setNewUser(!newUser)}>
                  Login
                  </span>
                }
                
              </p>
              </div>      
         </form>
         <p style={{color: 'red'}}>{user.error}</p>
      {user.success &&  <p style={{color: 'green'}}>Your {newUser ?'registration' : 'Logged In'} was successfully</p>}
                <br/>
                    
                    {
                       user.isSignedIn?  <button  onClick={signOut}>Sign out</button>:''
                    
                    }
                <br/>
                { !newUser &&
                 <div>
                    <button className="login-btn" onClick={googleSignIn}><FcGoogle/><span style={{marginLeft:'40px'}}> Sign in with Google</span></button>
                  <button className="login-btn" onClick={facebookSignIn}><FaFacebook style={{color:'darkblue'}}/><span style={{marginLeft:'40px'}}> Sign in with Facebook</span></button>
                 </div>
                }

            </div> 
        </div>
    );
};

export default LoginPage;