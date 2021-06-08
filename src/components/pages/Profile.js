import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';

const Head = styled.h1`
    font-size: 40px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;
const Profile = () => {
    return (
        <>
            <Navbar/>
            <Head>Profile</Head>
                
        </>
    );
}
export default Profile;