import React from 'react';
import Navbar from '../navbar/Navbar';
import { Card, Itemimg1, Itemimg2, Itemimg3, Itemimg4, Itemimg5, Itemimg6 } from '../content/card/card';
import styled from 'styled-components';

const Head = styled.h1`
    font-size: 40px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Cards = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
const heg = styled.h1`
    font-size: xx-large;
    color: #4374bd;
`;
const Catalog = () => {
    return (
        <>
            <Navbar/>
            <Head>Catalog</Head>
            <Cards>
                <Card>Red velvet cookies
                    <Itemimg1 id="redvelvet"/>
                </Card>
                <Card>Normie Choco chip cookies
                    <Itemimg2 id="chocochip"/>
                </Card>
                <Card>Dark Choco chip cookies
                    <Itemimg3 id="redvelvet"/>
                </Card>
                <Card>Lemon cookies
                    <Itemimg4 id="redvelvet"/>
                </Card>
                <Card>The Nut spell cookies
                    <Itemimg5 id="redvelvet"/>
                </Card>
                <Card>Ginger cookies
                    <Itemimg6 id="redvelvet"/>
                </Card>
                
            </Cards>
            
                
        </>
    );
}
export default Catalog;