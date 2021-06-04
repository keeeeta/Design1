import React from 'react';
import Slideshow from '../content/home/slide';
import Navbar from '../navbar/Navbar';


const Welcome = () =>
{
    return(
        <>
            <Navbar/>
            <h1>Welcome</h1>
            <Slideshow/>
            
        </>
    );
}

export default Welcome;