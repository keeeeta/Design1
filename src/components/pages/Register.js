import React from 'react';
import { NavBtnLink } from '../navbar/Elements';
import styled from 'styled-components';

const Form = styled.form`
    text-align: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #4374bd;
    height: 510px;
    margin-bottom: 10px;
    margin-left: 50px;
    margin-right: 50px;
    >input{
    height: 5%;
    font-size: large;
    width: 30%;
    }

`;

const Hed = styled.h1`
text-align: center;
color: #4374bd;
`;

const Register = () => {
    return (
        <>
            <Hed>Register</Hed>
            <Form>
                <label to="usernm">User Name:</label><br/>
                <input type="text" id="usernm" name="usernm"/><br/><br/>
                <label to="userpwd">User Password:</label><br/>
                <input type="password" id="userpwd" name="userpwd"/><br/><br/>
                <label to="userpwd1">Retype Password:</label><br/>
                <input type="password" id="userpwd1" name="userpwd1"/><br/><br/>
                <label to="userem">User Email:</label><br/>
                <input type="email" id="userem" name="userem"/><br/><br/>
                <label to="userph">Phone:</label><br/>
                <input type="tel" id="userph" name="userph"/><br/><br/>
                <label to="userla">Landline:</label><br/>
                <input type="tel" id="userla" name="userla"/><br/><br/>
                <NavBtnLink to='/'>Register</NavBtnLink>
            </Form>
            
                
        </>
    );
}
export default Register;