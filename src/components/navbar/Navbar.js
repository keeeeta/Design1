import React from 'react';
import { Nav, NavLink, Bars, NavMenu,NavBtn,NavBtnLink} from './Elements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
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