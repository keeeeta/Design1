import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
export const Nav = styled.nav`
    background:#4374bd;
    height: 85px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
export const NavLink = styled(Link)`
    color: white;
    font-size: large;
    display: flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    :active{
        font-size: x-large;
        color:#4374bd ;
        background-color: white;
        box-shadow: 0px 10px #4374bd;
    }
    :hover
    {
        font-size: x-large;
        transition: 300ms;
        color:#4374bd ;
        background-color: white;
        box-shadow: 0px 10px #4374bd;
    }
`;
export const Bars = styled(FaBars)`
    display: none;
    color:black;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px){
        display:none;
    }
`;
export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width:768px){
        display:none;
    }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: white;
  padding: 7px 17px;
  color: #4374bd;
  font-size: large;
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