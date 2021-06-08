import React from 'react';
import Slideshow from '../content/home/slide';
import Navbar from '../navbar/Navbar';

import styled from 'styled-components';

const Head = styled.h1`
    font-size: 40px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Welcome = () =>
{
    return(
        <>
            <Navbar/>
            <Head>Welcome</Head>
            <Slideshow/>
            
        </>
    );
}

export default Welcome;