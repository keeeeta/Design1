import Navbar from '../navbar/Navbar';
import React from 'react';
import styled from 'styled-components';

const Head = styled.h1`
    font-size: 40px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;
const Delivery = () => {
    return (
        <>
            <Navbar/>
            <Head>Delivery</Head>
                
        </>
    );
}
export default Delivery;