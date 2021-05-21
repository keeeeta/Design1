import React from 'react';
import './Login.css';
import styled from 'styled-components';
import { NavBtnLink } from '../navbar/Elements';
import cook from '../images/cookdes.png';

const Inp = styled.input`
    height: 8%;
    font-size: large;
    width: 30%;
`;

const LinkLog = styled.a`
  border-radius: 4px;
  background: white;
  padding: 7px 17px;
  color: #4374bd;
  font-size: 40px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #4374bd ;
    color: white;
  }
`;

const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'auto'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
}; 
    


const Login = () => {
    return (
        <>
            <div className="head">
                <h1>Cookie scripts</h1>
                <div className="dummy"><LinkLog onClick={scrollToBottom}>Login</LinkLog>/<LinkLog onClick={scrollToBottom}>Register</LinkLog></div>
                <br/><br/>
            </div>
            <div className="wrap">
                <div className="des">
                    <h3>Make your own script for your cookie:</h3>
                    <ul className="steps">
                        <li>Choose your base for the cookie</li>
                        <li>Chooose your topping for the cookie</li>
                        <li>Choose the size of the cookie</li>
                        <li>Choose the bag for your cookies</li>
                    </ul> 
                          
                </div>
                <img src={cook} className="ima" alt="new" />
            </div>
            
           
            
            
            <form className="log" id="login">
                <br/>
                <div className="box">
                    <label to="uname">User Name:</label><br/>
                    <Inp type="text" id="uname"/><br/><br/>
                    <label to="upwd">User Password:</label><br/>
                    <Inp type="password" id="upwd"/><br/><br/>
                    <NavBtnLink to="/welcome">Login</NavBtnLink>
                    <br/>
                </div>
               
                <p>If new user <NavBtnLink to="/register">Register</NavBtnLink></p>
                <br/><br/>                            
                
            </form> 
            
                       
                
        </>
    );
}
export default Login;