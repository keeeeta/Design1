import Navbar from '../navbar/Navbar';
import React from 'react';
import Form from '../content/order/custform';
import styled from 'styled-components';

const Head = styled.h1`
    font-size: 40px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Order = () => {
    return (
        <>
            <Navbar/>
            <Head>Order now</Head>
            <Form/>
                
        </>
    );
}
export default Order;