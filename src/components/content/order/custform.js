import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const Cust = styled.div`
    font-size: large;
    align-items: center;
    text-align: center;
    border-radius: 5%;
    border: 4px solid #4374bd;
    margin-top: 10px;
    margin-left: 160px;
    margin-right: 160px;
    margin-bottom: 10px;
    
`;

const Slt = styled.select`
    font-size: large;
`;

const Label = styled.label`
    font-size: larger;
`;

const Place = styled(Link)`
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
  margin-bottom: 20px;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #4374bd ;
    color: white;
  }
`;

const Form =() =>{
    return(
        <Cust>
            <br/>
            <form>
                <Label id="base">Choose the base for the cookie :</Label><br/>
                <Slt id="base" name="base">
                    <option value="plain">Normal plain base</option>
                    <option value="dark">Chocolate base</option>
                    <option value="red">Red velvet base</option>
                    <option value="lemon">Lemon flavour base</option>
                    <option value="ginger">Ginger flavour base</option>
                </Slt><br/><br/>
                <Label id="top">Choose the toppping for the cookie :</Label><br/>
                <Slt id="top" name="top">
                    <option value="choco">Chocolate Chips</option>
                    <option value="white">White Chocolate Chips</option>
                    <option value="dryfruits">Dry fruits</option>
                    <option value="nuts">Roasted nuts</option>
                </Slt><br/><br/>
                <Label id="size">Choose the size for the cookie :</Label><br/>
                <Slt id="size" name="size">
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                </Slt><br/><br/>
                <Label id="quantity">Pack of how many cookies :</Label><br/>
                <Slt id="quantity" name="quantity">
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                </Slt><br/><br/>
                <Place to="/delivery">Place Now</Place><br/><br/>
            </form>
            
        </Cust>
    );
}

export default Form;