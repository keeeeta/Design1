import React from 'react';
import styled from 'styled-components'
import { Nav, NavLink, Bars, NavMenu,NavBtn,NavBtnLink} from './Elements';
import logo from '../images/logo.png'

const Logim = styled.div`
    background-image: url(${logo});
    height: 70px;
    width: 70px;
    margin-right: 10px;
`;

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <Logim/>
                    <NavLink to ='/welcome' activeStyle>Home</NavLink>
                    <NavLink to ='/catalog' activeStyle>Catalog</NavLink>
                    <NavLink to ='/order' activeStyle>Order Now</NavLink>
                    <NavLink to ='/delivery' activeStyle>Your Orders</NavLink>
                    <NavLink to ='/profile' activeStyle>Profile</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/'>Logout</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}
export default Navbar;