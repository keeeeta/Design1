import styled from 'styled-components'
import redvelvet from '../../images/redv.png'
import chocochip from '../../images/choco.png'
import dark from '../../images/darkchoco.png'
import lemon from '../../images/lemon.png'
import nut from '../../images/nut.png'
import ginger from '../../images/ginger.png'

export const Card = styled.div `
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    justify-content: center;
    height: 350px;
    width: 350px;
    color: #4374bd;
    font-weight: bold;
    font-size: large;
    border-radius: 10%;
    border: 3px solid #4374bd;
    padding: 10px;
    box-shadow: 5px 10px 18px grey;
    &:hover{
        height: 375px;
        width: 375px;
        background-color: #4374bd;
        color: white;
    }
`;

export const Itemimg1 = styled.div`
    background-image: url(${redvelvet});
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    display: block;
    margin-top: 20px;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    
`;

export const Itemimg2 = styled.div`
    background-image: url(${chocochip});
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    display: block;
    margin-top: 20px;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    
`;

export const Itemimg3 = styled.div`
    background-image: url(${dark});
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    display: block;
    margin-top: 20px;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    
`;

export const Itemimg4 = styled.div`
    background-image: url(${lemon});
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    display: block;
    margin-top: 20px;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    
`;
export const Itemimg5 = styled.div`
    background-image: url(${nut});
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    display: block;
    margin-top: 20px;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    
`;

export const Itemimg6 = styled.div`
    background-image: url(${ginger});
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    display: block;
    margin-top: 20px;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    
`;